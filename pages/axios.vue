<template>
  <div>
    <div>
      <h1>axios</h1>
      <p>{{ data }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { $http } = useNuxtApp();

const { data } = await $http.get("/users");
</script>
