import { Product } from "../types/product";

const API_URL = "https://fakestoreapi.com/products";

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
