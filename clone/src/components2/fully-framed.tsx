import Slidecard from "@/components/slidecard"
import Headin from "@/components/heading"
import  framed from '../images/fully-framed.json'


export default function Framed(){

const Heading="Fully Framed"
    return (
     
        <>
        <Headin Head={Heading}/>
        <Slidecard  product={framed}/>
        </>
    )
}