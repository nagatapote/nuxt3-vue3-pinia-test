<template>
  <div>
    <div>
      <h1>{{ hoge }}{{ foo }}</h1>
      <h1>Index</h1>
      <PiniaCounter />
      <UseStateCounter />
    </div>
    <div>
      <h1>ユーザー覧</h1>
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.username }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const hoge = useHoge();
const foo = useFoo();

const title = "Hello Nuxt3!!";

useMeta({
  meta: [{ name: "description", content: `This is ${title} page ` }],
});

const { data: users } = await useFetch("/api/users/1");
</script>
