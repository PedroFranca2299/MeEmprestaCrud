import { RestauranteFormType } from "../components/RestauranteForm/RestauranteForm.type";
import axios from "./axios";

export const getRestaurantes = () => {
  return axios.get("/restaurantes");
};

export const getRestauranteById = (id: number) => {
  return axios.get(`/restaurantes/${id}`);
};

export const createRestaurante = (data: RestauranteFormType) => {
  return axios.post("/restaurantes/create", data);
};

export const updateRestaurante = (id: number, data: RestauranteFormType) => {
  return axios.post(`/restaurantes/update/${id}`, data);
};

export const deleteRestaurante = (id: number) => {
  return axios.delete(`/restaurantes/delete/${id}`);
};
