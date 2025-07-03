import Slidecard from "@/components/slidecard"
import Headin from "@/components/heading"
import  nextgen from '../images/next-gen.json'


export default function Next_gen(){

const Heading="Next-Gen Fashion "
    return (
     
        <>
        <Headin Head={Heading}/>
        <Slidecard  product={nextgen}/>
        </>
    )
}