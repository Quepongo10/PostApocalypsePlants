<template>
    <p>{{ grados }}</p>
</template>

<script setup>
const props = defineProps({
  grados: String
});
</script>