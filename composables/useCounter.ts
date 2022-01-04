// const count = ref(0);

const useCounter = () => {
  const count = useState<number>("count", () => 0);

  const increment = () => count.value++;

  const decrement = () => count.value--;

  return {
    count: readonly(count),
    increment,
    decrement,
  };
};

export default useCounter;
