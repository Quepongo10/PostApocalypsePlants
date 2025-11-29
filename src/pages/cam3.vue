<template>
  <div>
    <h1>Kuala Lumpur / Malasia</h1>
    <temperatura :grados="temperatura" />
    <p>{{ condicion }}</p>
    <p>{{ isDay }}</p>
  </div>
</template>

<script>
import getClima from "../../public/api.js";
import temperatura from "../components/temperatura.vue";

export default {
  components: {
    temperatura
  },
  data() {
    return {
      temperatura: "Cargando...",
      condicion: "Cargando...",
      isDay: "Cargando..."
    };
  },

  async mounted() {
    const clima = await getClima({ camera: "cam3" });
    this.temperatura = clima.temperatura;
    this.condicion = clima.condicion;
    this.isDay = clima.isDay;
  }
};

</script>

<style scoped>
  div {
    background-color: #a48fa7;
    height: 100vh;
    place-content: center;
  }
</style>