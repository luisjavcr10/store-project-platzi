import { ProductsWrapper } from "@/components/Store/ProductWrapped"

interface Props{
    params: Promise<{
        categories: string[] 
    }>,
    searchParams: Promise<{
        id: string
    }>
}

export default async function Category(props: Props) {
    const {categories} = (await props.params);

    const response = await fetch('http://localhost:3000/api');
    const products = (await response.json()).data.products;
    console.log(products);


    return(
        <ProductsWrapper products={products}/>
    );
}