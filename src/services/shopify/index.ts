import { Session } from '@shopify/shopify-api';
import '@shopify/shopify-api/adapters/node';

import {shopifyAPI} from './utils/ShopifyAPI';

export const getProducts = async (session: Session): Promise<any> => {
    try {
        const client = new shopifyAPI.clients.Graphql({ session });
    
        const query = `query {
            products(first: 10) {
                edges {
                    node {
                        id
                        title
                        handle
                        images(first: 1) { 
                            edges { node { originalSrc altText 
                    }}}}
                    cursor
                }
                pageInfo {
                    hasNextPage
                }
            }
        }`;

        const response = await client.request(query);
        const data = {
            products: response.data.products.edges.map((edge: any) => edge.node),
            lastCursor: response.data.products.edges[response.data.products.edges.length - 1].cursor,
            hasNextPage: response.data.products.pageInfo.hasNextPage,
        }
        return data;
    } catch (error) {
        console.error((error as Error).message);
    }
};
