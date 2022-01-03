import { defineStore } from "pinia";

export const useMainStore = defineStore({
  // ストアの名前
  id: "main",
  state: () => ({
    counter: 0,
    name: "Counter",
  }),
  getters: {
    doubleCount(): number {
      return this.counter * 2;
    },
    doubleCountPlusOne(): number {
      return this.doubleCount * 2 + 1;
    },
  },
  actions: {
    reset() {
      this.counter = 0;
    },
    addCount() {
      this.counter += 1;
    },
  },
});
