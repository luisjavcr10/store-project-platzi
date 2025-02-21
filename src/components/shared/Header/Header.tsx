import Link from "next/link";
import styles from "./Header.module.sass";

export const Header = () => {
    return (
        <header>
          <nav>
            <ul className={styles.HeaderList}>
              <li>
                <Link className={styles.Link} href="/">Home</Link>
              </li>
              <li>
                <Link className={styles.Link} href="/store">Store</Link>
              </li>
            </ul>
          </nav>
        </header>
    );
}
