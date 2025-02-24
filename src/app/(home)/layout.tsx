import { Hero } from "@/components/home/Hero/Hero";
import { Description } from "@/components/home/Description";

export default function HomeLayout ({children}: Readonly<{children: React.ReactNode}>){

    return(
        <div>
            <main>
                <Hero />
                <Description />
                {children}
            </main>
        </div>
    );
}