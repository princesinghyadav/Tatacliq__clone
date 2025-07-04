import Slider from '../components2/slider'
import Bank from '@/components2/bank'
import Category from '../components2/categorycard'
// import Headin from '@/components/heading'
import Brand from '@/components2/Brands'
import { Container } from '@chakra-ui/react'
import Westside from '@/components2/westside'
import Indian from '@/components2/indian'
import Hotboyz from '@/components2/hot-boyz'
import Next_gen from '@/components2/next-gen'
import Home_checklist from '@/components2/home-checklist'
import Digi_dex from '@/components2/digi-dex'
import Watch from "../components2/watch"
import Framed from '@/components2/fully-framed'
import Shine_on from '@/components2/shine-on'
// import { useEffect } from 'react'

export default function Landing(){

    return (
<>

 <Slider/>
<Category/> 
<Bank/>
 
<Container maxW="80%">
   <Brand/>
   <Westside/>
   <Indian/>
   <Hotboyz/>
   <Next_gen/>
   <Home_checklist/>
   <Digi_dex/> 
   <Watch/>
   <Framed/>
   <Shine_on/>
</Container>


 

</>
    )     
}