import ItemPage from "../Components/ItemPage"

export default async function Items({params}) {
    const slug = (await params).slug
    
    return(
        <>
            <ItemPage slug={slug} />
        </>    
    )
}