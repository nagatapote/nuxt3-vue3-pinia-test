<template>
  <div>
    <h1>useCounter</h1>
    <h2>{{ count }}</h2>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script setup lang="ts">
import useCounter from "../composables/useCounter";

type Counter = {
  count: Ref<number>;
  increment: () => number;
  decrement: () => number;
};

const { count, increment, decrement }: Counter = useCounter();
</script>
