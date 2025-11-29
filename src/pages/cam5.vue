<template>
  <div>
    <h1>Christchurch / Nueva Zelanda</h1>
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
    const clima = await getClima({ camera: "cam5" });
    this.temperatura = clima.temperatura;
    this.condicion = clima.condicion;
    this.isDay = clima.isDay;
  }
};

</script>

<style scoped>
  div {
    background-color: #a7a38f;
    height: 100vh;
    place-content: center;
  }
</style>