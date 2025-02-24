import { shopifyApi, LATEST_API_VERSION } from '@shopify/shopify-api';
import { env } from "@/config/env";

export const shopifyAPI = shopifyApi({
    apiKey: env.SHOPIFY_APY_KEY ,
    apiSecretKey: env.SHOPIFY_APY_SECRET,
    scopes: ['read_products'],
    hostName: env.SHOPIFY_HOSTNAME ,
    apiVersion: LATEST_API_VERSION, 
    isEmbeddedApp: true,
});