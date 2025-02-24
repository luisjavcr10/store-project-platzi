import Link from "next/link";

export default function RootLayout({ children}: Readonly<{ children: React.ReactNode;}>) {

  return (
    <main>
        <nav>
            <ul>
                <Link href="/store/shoes"><li>Shoes</li></Link>
                <Link href="/store/jeans"><li>Jeans</li></Link>  
            </ul>
        </nav>
        {children}
    </main>
  );
}