import { AxiosResponse } from "axios";

// src/api/handleRequest.js
export const handleRequest = async (promise: Promise<AxiosResponse<any, any>> | PromiseLike<{ data: any; }> | { data: any; }, fallback = null) => {
  try {
    const { data } = await promise;
    return data;
  } catch (error) {
    console.error("API Error:", error);
    return fallback;
  }
};
