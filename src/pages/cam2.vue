<template>
  <div>
    <h1>Ouagadougou / Burkina Faso</h1>
    <temperatura :grados="temperatura" />
    <p>{{ condicion }}</p>
    <p>{{ isDay }}</p>
    <Popup title="Welcome" :content="`Relax in ${temperatura}`" :bot="0" :left="0" />
    <Popup title="Welcome" :content="'lorem ipsum dolor amet asdasdasdad asd as das as a dsdadasdasd as d asdasd a dsdadasda'" :bot="500" :left="1000" />
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