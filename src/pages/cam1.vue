<template>
  <div class="overlay" :style="overlayStyle"></div>

  <div class="fondo" :style="fondoStyle">
    <h1>Lleida / España</h1>

    <Popup title="Lleida" :content="`Estado: ${condicion}, ${temperatura}`" :bot="730" :left="340" />
    <Popup title="Lleida" :content="`Estado: ${condicion}, ${temperatura}`" :bot="680" :left="360" />
    <Popup title="Lleida" :content="`Estado: ${condicion}, ${temperatura}`" :bot="630" :left="380" />
    <Popup title="Lleida" :content="`Estado: ${condicion}, ${temperatura}`" :bot="580" :left="400" />
    <Popup title="Hola" :content="'Cómo te encuentras hoy?'" :bot="0" :left="0" />
  </div>
  <div class="planta1"><img src="../assets/flores/planta-lleida-1.png" alt="Planta Lleida 1"></div>
  <div class="planta2"><img src="../assets/flores/planta-lleida-1.png" alt="Planta Lleida 1"></div>
  <div class="planta3"><img src="../assets/flores/planta-lleida-2.png" alt="Planta Lleida 2"></div>
  <div class="planta4"><img src="../assets/flores/planta-lleida-2.png" alt="Planta Lleida 2"></div>
  <div class="planta5"><img src="../assets/flores/planta-lleida-2.png" alt="Planta Lleida 2"></div>
  <div class="planta6"><img src="../assets/flores/planta-lleida-3.png" alt="Planta Lleida 3"></div>
  <div class="planta7"><img src="../assets/flores/planta-lleida-3.png" alt="Planta Lleida 3"></div>
</template>

<script>
import Popup from "../components/Popups.vue";
import getClima from "../../public/api.js";
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
  const clima = await getClima({ camera: "cam1" });
  this.temperatura = clima.temperatura;
  this.condicion = clima.condicion;
  this.isDay = clima.isDay;

  this.overlayFile = await getFiltro(this.condicion, this.isDay);
  this.fondoFile = await getFondo(this.condicion, this.isDay);

  if (typeof gsap !== 'undefined') {
    gsap.to('.planta1', {
      rotation: 3,
      x: 10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  };

  if (typeof gsap !== 'undefined') {
    gsap.to('.planta2', {
      rotation: 3,
      x: 10,
      duration: 2.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  };

  if (typeof gsap !== 'undefined') {
    gsap.to('.planta3', {
      rotation: 3,
      x: 10,
      duration: 1.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  };

  if (typeof gsap !== 'undefined') {
    gsap.to('.planta4', {
      rotation: 3,
      x: 10,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  };

  if (typeof gsap !== 'undefined') {
    gsap.to('.planta5', {
      rotation: 3,
      x: 10,
      duration: 2.1,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  };

  if (typeof gsap !== 'undefined') {
    gsap.to('.planta6', {
      rotation: 3,
      x: 10,
      duration: 1.9,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  };

  if (typeof gsap !== 'undefined') {
    gsap.to('.planta7', {
      rotation: 3,
      x: 10,
      duration: 2.3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  };
}
}
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
  z-index: 6;
}

h1 {
  display: none;
}

.planta1 { 
  position: absolute;
  bottom: 6rem;
  left: 58rem;
  z-index: 4;
} 
.planta2 {
  position: absolute;
  bottom: 3rem;
  left: 45rem;
  z-index: 4;
}
.planta3 {
  position: absolute;
  bottom: 10rem;
  left: 10rem;
  z-index: 4;
}
.planta4 {
  position: absolute;
  bottom: 5rem;
  left: 22rem;
  z-index: 4;
}
.planta5 {
  position: absolute;
  bottom: 2rem;
  left: 70rem;
  z-index: 4;
}
.planta6 {
  position: absolute;
  bottom: 8rem;
  left: 80rem;
  z-index: 3;
}
.planta7 {
  position: absolute;
  bottom: 15rem;
  left: 88rem;
  z-index: 2;
}
</style>