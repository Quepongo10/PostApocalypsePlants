<template>
  <div class="overlay" :style="overlayStyle"></div>

  <div class="fondo">
    <h1>Christchurch / Nueva Zelanda</h1>
    <temperatura :grados="temperatura" />
    <p>{{ condicion }}</p>
    <p>{{ isDay }}</p>
    <Popup title="Christchurch" :content="`Estado: ${condicion}, ${temperatura}`" :bot="var1" :left="var2" @click="movePopup" />
  </div>
</template>

<script>
import Popup from "../components/Popups2.vue";
import temperatura from "../components/temperatura.vue";
import getClima from "../../public/api.js";
import getFiltro from "../../public/aplicación-filtro.js";

export default {
  components: { temperatura, Popup },

  data() {
    return {
      temperatura: "Cargando...",
      condicion: "Cargando...",
      isDay: "Cargando...",
      overlayFile: null,

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
  }
},

async mounted() {
  const clima = await getClima({ camera: "cam5" });
  this.temperatura = clima.temperatura;
  this.condicion = clima.condicion;
  this.isDay = clima.isDay;

  this.overlayFile = await getFiltro(this.condicion, this.isDay);
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
  background-color: #808080;
  height: 100vh;
  place-content: center;
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
</style>