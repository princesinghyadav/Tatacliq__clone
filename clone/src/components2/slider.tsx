import upper from "../images/sliding1.json"
import { Button } from "@chakra-ui/react"
import { useState ,useEffect} from "react"


 export default function Slider(){
const [count,setCount]=useState(0);
 
const length= upper.length;
 
const Previous =()=>{
    setCount(count-1)

if(count == 0){
    setCount(length-1)
     
} 

}


const Next =()=>{
    setCount(count+1)
    if(count==length-1){
        setCount(0)
      
    }
   

}

//  setInterval((Next)
// ,3500)
 useEffect(()=>{
   let interval= setInterval(()=>{
    Next()
   },3000)
return  () => {
    clearInterval(interval)
} 
},[count])

    return (
<>
 <div   
      style={{ height:"475px", margin: '0 auto', backgroundPosition:"center", backgroundSize:"cover", 
        width:'96%',backgroundImage:`URL(${upper[count].src})`, display:"flex" , flexDirection:"column",
        justifyContent:"space-around",  marginTop:"25px" 
        }}
         >
            <div style={{ display:"flex" , justifyContent:"space-between", paddingTop:"180px"}}>
                <div><Button variant="outline" m={2} bg="white"  size={"2xl"} rounded={"full"}
                onClick={Previous}
                > &lt; </Button></div>
                <div><Button variant="outline" m={2} bg="white"  size={"2xl"} rounded={"full"}
                 onClick={Next}
                > {'>'}</Button></div>
            </div>
            


            <div className="flex justify-center space-x-4 mt-12" style={{   height:"20px",
                display:"flex" ,justifyContent:"center", gap:"1rem"  ,width:"40%",   }}>
            {upper.map((_, index) => (
              <Button
                key={index}
                style={{width:"0.3rem", height:"0.5rem",transition:'background-color 0.5s',
                    backgroundColor: index === count ? 'white' : 'rgba(255, 255, 255, 0.5)',
                }}
                rounded={"full"}
            
                onClick={() => setCount(index)}
              />
            ))}
          </div>


          
 </div>
 
 

</>
       
    )
}

 