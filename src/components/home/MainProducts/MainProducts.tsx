import { shopifyApi, LATEST_API_VERSION, Session } from '@shopify/shopify-api';
import '@shopify/shopify-api/adapters/node';
import Image from 'next/image';
import styles from './MainProducts.module.sass'

const SHOPIFY_HOSTNAME = process.env.SHOPIFY_HOSTNAME || '';
const SHOPIFY_ACCESS_TOKEN = process.env.SHOPIFY_ACCESS_TOKEN  || '';
const SHOPIFY_APY_KEY = process.env.SHOPIFY_APY_KEY || '';
const SHOPIFY_APY_SECRET = process.env.SHOPIFY_APY_SECRET || '';

const shopify = shopifyApi({
    apiKey: SHOPIFY_APY_KEY ,
    apiSecretKey: SHOPIFY_APY_SECRET,
    scopes: ['read_products'],
    hostName: SHOPIFY_HOSTNAME ,
    apiVersion: LATEST_API_VERSION, 
    isEmbeddedApp: true,
});

const fetchProducts = async (session: Session): Promise<any> => {
    try {
        const client = new shopify.clients.Graphql({ session });
    
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

const session = new Session({
    id: `shopify_${SHOPIFY_HOSTNAME}_online`,
    shop: SHOPIFY_HOSTNAME,
    state: '', 
    isOnline: true,
    accessToken: SHOPIFY_ACCESS_TOKEN,
});

export const MainProducts = async () =>{
    const data = await fetchProducts(session);
    const products = data.products;

    return(
        <section className={styles.MainProducts}>
            <h3>New products released</h3>
            <div className={styles.MainProducts__grid}>
                {products.map((product: any) => {
                    const imgSrc= product.images.edges[0].node.originalSrc;
                    return(
                        <article key={product.id}>
                            <p>{product.title}</p>
                            <Image 
                                src={imgSrc}
                                fill
                                alt={product.title}
                                loading='eager'
                            />
                        </article>
                    )
                })}
            </div>
        </section>
    )
}