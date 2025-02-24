"use client";

import styles from './error.module.sass';


export default function Error({ reset }: ErrorPageProps){
    return(
        <div className={styles.error}>
            <h1>Error</h1>
            <p>Something went wrong :/ </p>
            <button onClick={reset}>Try again</button>
        </div>
    );
}