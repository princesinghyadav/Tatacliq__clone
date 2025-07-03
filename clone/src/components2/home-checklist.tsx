import Slidecard from "@/components/slidecard"
import Headin from "@/components/heading"
import  homechecklist from '../images/home-checklist.json'


export default function Home_checklist(){

const Heading="Home Checklist"
    return (
     
        <>
        <Headin Head={Heading}/>
        <Slidecard  product={homechecklist}/>
        </>
    )
}