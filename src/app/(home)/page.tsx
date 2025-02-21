import { Suspense } from 'react';
import { MainProducts } from "@/components/home/MainProducts";
import { Loader } from '../../components/shared/Loader';

export default function Home() {
  return (
      <Suspense fallback={<Loader/>}>
        <MainProducts />
      </Suspense>
  );
}
