<template>
  <div>
    <h2>{{ nameState }}</h2>
    <button @click="main.addCount">+1</button>
    <button @click="main.reset">reset</button>
    <p>count: {{ countState }}</p>
    <p>doubleCount: {{ doubleCount }}</p>
  </div>
</template>

<script lang="ts">
import { useMainStore } from "@/store/main";

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
