import Slidecard from "@/components/slidecard"
import Headin from "@/components/heading"
import  digiden from '../images/digi-den.json'


export default function Digi_dex(){

const Heading="Digi Den"
    return (
     
        <>
        <Headin Head={Heading}/>
        <Slidecard  product={digiden}/>
        </>
    )
}