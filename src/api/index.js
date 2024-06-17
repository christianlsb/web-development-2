import axios from "axios";

export const api = axios.create({
  baseURL: "https://bymykel.github.io/CSGO-API/api/pt-BR/skins.json",
});

export default api;
