<script setup>
import musicUrl from "./assets/music/Julian_Rocha on pixaby.mp3";
</script>

<template>
  <div>
    <audio :src="musicUrl" controls loop preload="metadata"></audio>
      <nav>
      <router-link to="/cam1" class="cam">Cámara 1</router-link> 
      <router-link to="/cam2" class="cam">Cámara 2</router-link> 
      <router-link to="/cam3" class="cam">Cámara 3</router-link>
      <router-link to="/cam4" class="cam">Cámara 4</router-link>
      <router-link to="/cam5" class="cam">Cámara 5</router-link>
    </nav>
    <router-view></router-view>
  </div>
  <main>
    <h1>Bienvenido a Postapocalypse Plants</h1>
    <div class="flex-container"><p>Eres transportado a este mundo en el que las plantas se han extinguido por completo de su hábitat natural, dejando atrás paisajes vacíos y una sensación constante de pérdida. <br>
      <br>
      En este entorno artificial, las personas como tú observan estas cámaras como una forma de evasión, buscando calma y consuelo al contemplar fragmentos de lo que una vez fue vida. <br>
      <br>
      Mirar estas grabaciones no solo es un acto de relajación, sino también una forma de conexión emocional con la naturaleza perdida, un intento de recuperar, aunque sea por unos instantes, la serenidad que ofrecían aquellos espacios naturales hoy desaparecidos.</p></div>
    <p>Selecciona una cámara para ver las plantas de la zona de relajación.</p>
  </main>
</template>

<style scoped>
nav {
  z-index: 1000;
}

h1 {
  text-align: center;
  margin-top: 10rem;
}

p {
  text-align: center;
  margin-top: 3rem;
}

.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
}

.flex-container p {
  max-width: 900px;
}

  audio {
    position: fixed;
    top: 1rem;
    left: 1rem;
    z-index: 1000;
  }
</style>
