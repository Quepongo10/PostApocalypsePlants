<script setup>

</script>

<template>
  <div>
      <nav>
      <router-link to="/cam1" class="cam">Cámara 1</router-link> 
      <router-link to="/cam2" class="cam">Cámara 2</router-link> 
      <router-link to="/cam3" class="cam">Cámara 3</router-link>
      <router-link to="/cam4" class="cam">Cámara 4</router-link>
      <router-link to="/cam5" class="cam">Cámara 5</router-link>
    </nav>
    <router-view></router-view>
    </div>
</template>

<style scoped>
nav {
  z-index: 1000;
}
</style>
