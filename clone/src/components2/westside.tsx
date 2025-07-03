
import Slidecard from "@/components/slidecard"
import Headin from "@/components/heading"
import  west from '../images/westside.json'


export default function Westside(){

const Heading="The Westside Store"
    return (
     
        <>
        <Headin Head={Heading}/>
        <Slidecard  product={west}/>
        </>
    )
}