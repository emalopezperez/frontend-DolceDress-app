import { Product } from 'app/models/Product';
import { env } from "app/config/env";
import { shopifyUrls } from "./urls";

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(shopifyUrls.products.all, {
      headers: new Headers({
        'X-Shopify-Access-Token': env.SHOPIFY_TOKEN
      })
    });
    const { products } = await response.json();
    return products as Product[];
  } catch (error) {
    console.error(error);
    return []; 
  }
};
