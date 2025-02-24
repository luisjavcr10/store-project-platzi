import Image from 'next/image';
import styles from './MainProducts.module.sass'
import {sessionShopify} from '../../../services/shopify/utils/Session';
import {getProducts} from '../../../services/shopify';

export const MainProducts = async () =>{
    const data = await getProducts(sessionShopify);
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