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
                        description
                        tags
                        images(first: 1) { 
                            edges { 
                                node { 
                                    originalSrc 
                                    altText 
                                }
                            }
                        }
                        variants(first: 1) { 
                            edges { 
                                node { 
                                    price
                                    inventoryQuantity
                                } 
                            } 
                        }
                    }
                    cursor
                }
                pageInfo {
                    hasNextPage
                }
            }
        }`;

        const response = await client.request(query);
        const data = {
            products: response.data.products.edges.map(({ node: { images, variants, ...rest } }: any) => ({
                ...rest, 
                tags: rest.tags[0], 
                image: images.edges[0]?.node.originalSrc || "N/A", 
                price: variants.edges[0]?.node.price || "N/A", 
                quantity: variants.edges[0]?.node.inventoryQuantity || 0, 
            })),            
            lastCursor: response.data.products.edges[response.data.products.edges.length - 1]?.cursor || null,
            hasNextPage: response.data.products.pageInfo.hasNextPage,
        };
        return data;
    } catch (error) {
        console.error((error as Error).message);
    }
};


