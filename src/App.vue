<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Lista from './components/Lista.vue'
</script>

<template>
  <div>
      <nav>
      <router-link to="/">Inicio</router-link> |
      <router-link to="/about">Sobre nosotros</router-link> |
      <router-link to="/contact">Contacto</router-link>
    </nav>
    <router-view></router-view>
    </div>
</template>

<style scoped>

</style>
