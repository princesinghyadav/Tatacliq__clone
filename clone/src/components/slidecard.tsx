// import product from "../images/brandss.json"
import { Image,Flex ,Button} from "@chakra-ui/react"
import { useState } from "react"
import { useNavigate } from "react-router"

export default function Slidecard({product }:any){
    const [card1,setCard1]=useState(0)
    const [card2,setCard2]=useState(1)
    const [card3,setCard3]=useState(2)
    const [card4,setCard4]=useState(3)
const length   = product.length
// console.log(product[0])
const navigation = useNavigate()
 
    const Previous =()=>{
        setCard1(card1-1)
        setCard2(card2-1)
        setCard3(card3-1)
        setCard4(card4-1)
    if(card1 == 0){
        setCard1(length-1)
         
    } 
    if(card2 == 0){
      setCard2(length-1)
       
  } if(card3 == 0){
    setCard3(length-1)
     
} if(card4 == 0){
  setCard4(length-1)
   
}
    }
    
    
    const Next =()=>{
        setCard1(card1+1)
        setCard2(card2+1)
        setCard3(card3+1)
        setCard4(card4+1)
        if(card2==length-1){
          setCard2(0)
        }
        if(card1==length-1 ){
            setCard1(0)
          
        }  if(card3==length-1){
          setCard3(0)
        }
        if(card4==length-1 ){
            setCard4(0)
          
        }
       
    
    }
    
    return (
  <>
  
<div onClick={()=> navigation('/product')}></div>
  <div style={{display:"flex", justifyContent:"flex-end" ,marginTop:"85px"
  
   }}>
  <Button  onClick={Previous} variant="outline" 
        color="black" 
      colorPalette="blue"
        borderRadius="50px 0 0 50px"
       >&lt;</Button>
         <Button  marginLeft={1}onClick={Next} variant="outline" 
        color="black" 
      colorPalette="blue"
        borderRadius="0px 50px 50px 0px"
       >&gt;</Button>
  </div>

<div style={{ padding:"18px",height:"400px"}}
 onClick={()=>navigation('/product')}
>

    <Flex  >
        <div style={{margin:"12px",height:"400px"}}>
      <Image
      htmlWidth="400px"
      htmlHeight="400px"
       src={product[card1].src}
      />
        </div>
        <div style={{margin:"12px"}}>
      <Image
      htmlWidth="400px"
      htmlHeight="400px"
      src={product[card2].src}
      />
        </div>
        <div style={{margin:"12px"}}>
      <Image
      htmlWidth="400px"
      htmlHeight="400px"
      src={product[card3].src}
      />
        </div>
        <div style={{margin:"12px"}}>
      <Image
      htmlWidth="400px"
      htmlHeight="400px"
      src={product[card4].src}
      />
        </div>
   
    </Flex>

</div>
  
  </>  )
}