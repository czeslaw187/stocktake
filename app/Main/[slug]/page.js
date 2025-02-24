import ItemPage from "../Components/ItemPage"

export default async function Items({params}) {
    const slug = (await params).slug
    console.log(slug,'slug')
    return(
        <ItemPage slug={slug} />
    )
}