"use client";

import styles from './error.module.sass';

interface ErrorProps {
    error: Error;
    reset: () => void;
}

export default function Error({ reset }: ErrorProps){
    return(
        <div className={styles.error}>
            <h1>Error</h1>
            <p>Something went wrong :/ </p>
            <button onClick={reset}>Try again</button>
        </div>
    );
}