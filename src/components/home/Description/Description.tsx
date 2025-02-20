import styles from './Description.module.sass';
import Image from 'next/image';
import { blurURL } from '../../../../public/images/description';

export const Description = () => {
    return (
        <section className={styles.Description}>
            <div className={styles.Description__imageContainer}>
                <Image 
                    src="/images/description/description.jpeg" 
                    alt="Technology products" 
                    fill
                    placeholder='blur'
                    blurDataURL={blurURL}
                    //width={500}
                    //height={300}
                    //quality={100}// by default is 75
                />  
            </div>
            
            <div className={styles.Description__text}>
                <h2>Bring the future today</h2>
                <p>Future World: Your Gateway to Tomorrow's Tech! Dive into a world of cutting-edge gadgets and gear. Stay ahead of the curve and redefine your digital lifestyle with us.</p>
            </div>
        </section>
    );
}