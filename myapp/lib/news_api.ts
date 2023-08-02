import axios, { AxiosRequestConfig } from "axios";

// API endpoint and parameters
const url = "https://newsapi.org/v2/everything";
const params = {
  q: "Apple",
};

// HTTP headers
const headers = {
  "X-Api-Key": process.env.NEXT_PUBLIC_NEWS_API_KEY,
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
