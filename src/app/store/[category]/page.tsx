interface Props{
    params: Promise<{
        category: string 
    }>
}

export default async function Category(props: Props) {
    const category = (await props.params).category;

    return(
        <h1 className="text-center text-5xl p-4">Category: {category}</h1>
    );
}