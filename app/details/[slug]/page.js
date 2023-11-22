import Details from "../../components/Details"
import Header from "../../components/Header"
import {getProductBySlug} from "@/sanity/sanity-utils";


export default async function page({params}) {
  const {slug} = params;

  const product = await getProductBySlug(slug);

  return (
    <div>
        <Header/>
       
        <div>
            <Details product={product[0]}/>
        </div>
    </div>
  )
}

