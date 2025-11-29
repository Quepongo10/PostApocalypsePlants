<template>
  <div>
    <h1>Rio Grande / Argentina</h1>
    <p>{{ temperatura }}</p>
    <p>{{ condicion }}</p>
    <p>{{ isDay }}</p>
  </div>
</template>

<script>
import getClima from "../../public/api.js";

export default {
  data() {
    return {
      temperatura: "Cargando...",
      condicion: "Cargando..."
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