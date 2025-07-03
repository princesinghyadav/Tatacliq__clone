import Slidecard from "@/components/slidecard"
import Headin from "@/components/heading"
import  hotboyz from '../images/hotboyz.json'


export default function Hotboyz(){

const Heading="Hot Boy Fits"
    return (
     
        <>
        <Headin Head={Heading}/>
        <Slidecard  product={hotboyz}/>
        </>
    )
}