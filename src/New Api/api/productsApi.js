import axiosClient from "./axiosClient";

const boardApi = {
  create: () => axiosClient.post("products"),
  getAll: () => axiosClient.get("products"),
  update: (params) => axiosClient.put("products", params),
  getOne: (id) => axiosClient.get(`products/${id}`),
  delete: (id) => axiosClient.delete(`products/${id}`),
  update: (id, params) => axiosClient.put(`products/${id}`, params),
  getFavourites: () => axiosClient.get("products/favourites"),
  updateFavouritePosition: (params) =>
    axiosClient.put("boards/favourites", params),
};

export default boardApi;
