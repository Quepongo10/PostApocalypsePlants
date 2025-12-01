<template>
  <div>
    <h1>Lleida / España</h1>
    <temperatura :grados="temperatura" />
    <p>{{ condicion }}</p>
    <p>{{ isDay }}</p>
    <Popup title="Welcome" :content="`Relax in ${temperatura}`" :bot="500" :left="300" />
    <Popup title="Welcome" :content="`Relax in ${temperatura}`" :bot="450" :left="320" />
    <Popup title="Welcome" :content="`Relax in ${temperatura}`" :bot="400" :left="340" />
    <Popup title="Welcome" :content="`Quepongo*`" :bot="350" :left="360" />
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