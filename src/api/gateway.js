import axios from "axios";

const IMAGES_API_BASE_URL = "https://run.mocky.io/v3";

const imagesClient = axios.create({
  baseURL: IMAGES_API_BASE_URL,
  timeout: 10000,
});

export const getImagesList = async () =>
  imagesClient.get("/8dac4388-ce28-4406-95bb-91aec813168d");
