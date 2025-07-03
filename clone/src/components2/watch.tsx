import Headin from "@/components/heading"
import  watch from '../images/watch.json'
import Slidecard from '../components/slidecard'

export default function Watch(){

const Heading="Watch this space"
    return (
     
        <>
        <Headin Head={Heading}/>
        <Slidecard  product={watch}/>
        </>
    )
}