import axios from "axios";

export function makeHttpRequest(base: string, endpoint: string, params: any) {
  // Create a URLSearchParams object and append parameters
  const queryParams = new URLSearchParams(params);
  const fullUrl = `${base}${endpoint}?${queryParams.toString()}`;

  return axios
    .get(fullUrl)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}
