<template>
  <div>
    <h1>Ouagadougou / Burkina Faso</h1>
    <p>{{ temperatura }}</p>
    <p>{{ condicion }}</p>
    <p>{{ isDay }}</p>
    <Popup title="Welcome" :content="`Relax in ${temperatura}`" :bot="0" :left="0" />
    <Popup title="Welcome" :content="`Relax in ${temperatura}`" :bot="500" :left="1000" />
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
    const clima = await getClima({ camera: "cam2" });
    this.temperatura = clima.temperatura;
    this.condicion = clima.condicion;
    this.isDay = clima.isDay;
  }
};

</script>

<style scoped>
  div {
    background-color: #94a78f;
    height: 100vh;
    place-content: center;
  }
</style>