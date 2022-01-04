import { defineNuxtPlugin } from "#app";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      http: instance,
    },
  };
});
