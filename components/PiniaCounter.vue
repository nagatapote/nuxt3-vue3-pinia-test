<template>
  <div>
    <div>
      <h1>pinia store</h1>
      <h2>{{ nameState }}</h2>
      <button @click="main.addCount">+1</button>
      <button @click="main.reset">reset</button>
      <p>count: {{ countState }}</p>
      <p>doubleCount: {{ doubleCount }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { useMainStore } from "@/store/main";
/* 従来の Composition APIの書き方
   今は、<script setup lang="ts">*/
export default defineComponent({
  setup() {
    const main = useMainStore();

    return {
      main,

      countState: computed(() => main.counter),
      nameState: computed(() => main.name),

      doubleCount: computed(() => main.doubleCount),
    };
  },
});
</script>
