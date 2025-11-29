<template>
  <div>
    <h1>Kuala Lumpur / Malasia</h1>
    <p>{{ temperatura }}</p>
    <p>{{ condicion }}</p>
    <p>{{ isDay }}</p>
    <Popup title="Welcome" :content="`Relax in ${temperatura}`" />
  </div>
</template>

<script>
import Popup from "../components/Popups.vue";
import getClima from "../../public/api.js";

export default {
  components: { Popup },
  data() {
    return {
      temperatura: "Cargando...",
      condicion: "Cargando..."
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