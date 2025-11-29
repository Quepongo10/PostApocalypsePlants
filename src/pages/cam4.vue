<template>
  <div>
    <h1>Rio Grande / Argentina</h1>
    <temperatura :grados="temperatura" />
    <p>{{ condicion }}</p>
    <p>{{ isDay }}</p>
    <Popup title="Welcome" :content="`Relax in ${temperatura}`" />
  </div>
</template>

<script>
import Popup from "../components/Popups.vue";
import getClima from "../../public/api.js";
import temperatura from "../components/temperatura.vue";

export default {
  components: { temperatura, Popup },
  data() {
    return {
      temperatura: "Cargando...",
      condicion: "Cargando...",
      isDay: "Cargando..."
    };
  },

  async mounted() {
    const clima = await getClima({ camera: "cam4" });
    this.temperatura = clima.temperatura;
    this.condicion = clima.condicion;
    this.isDay = clima.isDay;
  }
};

</script>

<style scoped>
  div {
    background-color: #8fa1a7;
    height: 100vh;
    place-content: center;
  }
</style>