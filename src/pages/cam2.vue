<template>
  <div class="overlay" :style="overlayStyle"></div>
  <div class="fondo" :style="fondoStyle">
    <h1>Ouagadougou / Burkina Faso</h1>

    <Popup title="Ouagadougou" :content="`Estado: ${condicion}, ${temperatura}`" :bot="0" :left="0" />
    <Popup title="Ouagadougou" :content="`Estado: ${condicion}, ${temperatura}`" :bot="500" :left="1000" />
  </div>
</template>

<script>
import Popup from "../components/Popups.vue";
import getClima from "../../public/api.js";
import temperatura from "../components/temperatura.vue";
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
      fondoFile: null
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
    const clima = await getClima({ camera: "cam2" });
    this.temperatura = clima.temperatura;
    this.condicion = clima.condicion;
    this.isDay = clima.isDay;

    this.overlayFile = await getFiltro(this.condicion, this.isDay);
    this.fondoFile = await getFondo(this.condicion, this.isDay)
  }
};
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