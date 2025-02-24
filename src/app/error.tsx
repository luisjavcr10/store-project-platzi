"use client"

import Image from "next/image";
import styles from '../sass/globlass-error.module.sass';

export default function Error({reset}: ErrorPageProps) {
  return (
    <main className={styles.Error}>
        <h1 className={styles.Error__title}>Something went wrong</h1>
        <Image
            src="/images/error/error.png"
            width={300}
            height={300}
            alt="Error"
        />
        <p className={styles.Error__message}>Don't worry, we are finding the error, but you can:</p>
        <button 
            onClick={reset}
            className={styles.Error__button}
        >
            Try again
        </button>
    </main>
  );
}