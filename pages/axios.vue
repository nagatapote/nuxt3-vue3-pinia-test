<template>
  <div>
    <div>
      <h1>axios</h1>
      <p>{{ data }}</p>
    </div>
    <Nuxt-link to="/"><a>top</a></Nuxt-link>
  </div>
</template>

<script setup lang="ts">
const { $http } = useNuxtApp();

const { data } = await $http.get("/users");
</script>
