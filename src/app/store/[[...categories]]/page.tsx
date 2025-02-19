interface Props{
    params: Promise<{
        categories: string[] 
    }>,
    searchParams: Promise<{
        id: string
    }>
}

export default async function Categories(props: Props) {
    const {categories} = (await props.params);
    console.log((await props.params).categories + " " + (await props.searchParams).id);

    return(
        <h1 className="text-center text-5xl p-4">Categories: {categories}</h1>
    );
}