<template>
  <div>
    <h1>Lleida / España</h1>
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
    const clima = await getClima({ camera: "cam1" });
    this.temperatura = clima.temperatura;
    this.condicion = clima.condicion;
    this.isDay = clima.isDay;
  }
};

</script>

<style scoped>
div {
  background-color: #a78f8f;
  height: 100vh;
  place-content: center;
}
</style>