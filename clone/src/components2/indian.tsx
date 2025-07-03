import Slidecard from "@/components/slidecard"
import Headin from "@/components/heading"
import  indian from '../images/indianwear.json'


export default function Indian(){

const Heading="Indianwear Reimagined"
    return (
     
        <>
        <Headin Head={Heading}/>
        <Slidecard  product={indian}/>
        </>
    )
}