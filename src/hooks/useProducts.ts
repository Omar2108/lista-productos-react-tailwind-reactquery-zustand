import {  Products } from "../definitions/definitions";
import {useQuery } from "@tanstack/react-query";
import api from "../api/products";


async function fetchProducts() {
    const { data } = await api.get<Products[]>('/products');
    return data;
  }
  
  export function useFetchProducts() {
    return useQuery({ queryKey: ['products'], queryFn: fetchProducts });
  }

