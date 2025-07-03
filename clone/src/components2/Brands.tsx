import Slidecard from "@/components/slidecard"
import Headin from "@/components/heading"
import  brands from '../images/brandss.json'


export default function Brand(){

const Heading="Best Brands On Offer"
    return (
     
        <>
        <Headin Head={Heading}/>
        <Slidecard  product={brands}/>
        </>
    )
}