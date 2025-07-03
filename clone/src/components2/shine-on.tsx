import Slidecard from "@/components/slidecard"
import Headin from "@/components/heading"
import  Shine from '../images/shine.json'


export default function Shine_on(){

const Heading="Shine On"
    return (
     
        <>
        <Headin Head={Heading}/>
        <Slidecard  product={Shine}/>
        </>
    )
}