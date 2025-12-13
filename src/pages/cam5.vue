<template>
  <div class="overlay" :style="overlayStyle"></div>

  <div class="fondo" :style="fondoStyle">
    <h1>Christchurch / Nueva Zelanda</h1>

    <Popup title="Christchurch" :content="`Estado: ${condicion}, ${temperatura}`" :bot="var1" :left="var2" @click="movePopup" />
  </div>
</template>

<script>
import Popup from "../components/Popups2.vue";
import temperatura from "../components/temperatura.vue";
import getClima from "../../public/api.js";
import getFiltro from "../../public/aplicación-filtro.js";
import getFondo from "../../public/aplicación-fondo.js";

export default {
  components: {Popup },

  data() {
    return {
      temperatura: "Cargando...",
      condicion: "Cargando...",
      isDay: "Cargando...",
      overlayFile: null,
      fondoFile: null,

      var1: 500,
      var2: 300,
    };
  },

  computed: {
  overlayStyle() {
    if (!this.overlayFile) return {};
    return {
      backgroundImage: `url('./src/assets/filtros/${this.overlayFile}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      mixBlendMode: 'overlay'
    };
  },

  fondoStyle() {
    if (!this.fondoFile) return {};
    return {
      backgroundImage: `url('./src/assets/fondos/${this.fondoFile}')`,
    };
  },
},

async mounted() {
  const clima = await getClima({ camera: "cam5" });
  this.temperatura = clima.temperatura;
  this.condicion = clima.condicion;
  this.isDay = clima.isDay;

  this.overlayFile = await getFiltro(this.condicion, this.isDay);
  this.fondoFile = await getFondo(this.condicion, this.isDay)
},


 methods: {
    movePopup() {
      this.var1 = Math.floor(Math.random() * 700);
      this.var2 = Math.floor(Math.random() * 1300);
    }
  }
}
</script>

<style scoped>
.fondo {
  height: 100vh;
  place-content: center;
  z-index: 1;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  pointer-events: none;
  z-index: 5;
}

h1 {
  display: none;
}
</style>