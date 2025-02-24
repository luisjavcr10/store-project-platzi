import { Session } from '@shopify/shopify-api';
import { env } from "@/config/env";

export const sessionShopify = new Session({
    id: `shopify_${env.SHOPIFY_HOSTNAME}_online`,
    shop: env.SHOPIFY_HOSTNAME,
    state: '', 
    isOnline: true,
    accessToken: env.SHOPIFY_ACCESS_TOKEN,
});
