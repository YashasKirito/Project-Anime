import axios, { AxiosInstance, AxiosResponse } from "axios";

class API {
  private BASE_URL: string;
  private Axios: AxiosInstance;

  constructor() {
    this.BASE_URL = "https://api.jikan.moe/v4";
    this.Axios = axios.create({
      baseURL: this.BASE_URL,
      // timeout: 1000,
      // headers: { "X-Custom-Header": "foobar" },
    });
  }

  get = async (url: string, params?: any): Promise<AxiosResponse> => {
    return this.Axios.get(url, {
      params,
    });
  };
}

export default new API();
