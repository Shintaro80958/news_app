import axios, { AxiosRequestConfig } from "axios";

// API endpoint and parameters
const url = "https://newsapi.org/v2/everything";
const params = {
  q: "Apple",
};

// HTTP headers
const headers = {
  "X-Api-Key": "3e69b79661df43f3a3a2118466b9150f",
};

// Axios request configuration
export const config: AxiosRequestConfig = {
  method: "get",
  url: url,
  params: params,
  headers: headers,
};

export async function getNewsData() {
  try {
    const response = await axios(config);
    return response.data.articles;
  } catch (error) {
    console.error("An error occurred:", error);
    return null;
  }
}
