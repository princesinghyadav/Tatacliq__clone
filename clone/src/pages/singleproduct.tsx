import {  useEffect ,useReducer} from "react"
import axios from "axios"
import { Singlepage } from "@/components/cardview"
import LoadingIndicator from "@/components/loading"
import { ErrorIndicator  } from "@/components/error"
import {    Container} from '@chakra-ui/react'
import { useParams } from "react-router"; 


export default function Singleproduct(){

       let initialstate :any ={
    loading:false,
    error:false,
    data:[]
   }
   const reducer =(state :any , action :any )=>{
     switch(action.type){

        case 'fetch_loading':{
            return {
           loading:true,
           error:false,
           data:[]
            }
           
        }
        case 'fetch_sucess':{
           return {
           loading:false,
           error:false,
           data:action.payload
            }  
        }
        case 'fetch_error':{
           return {
           ...state, loading: false, error: true, data: [] 
            }  
        }
        default :{
            throw new Error("action type not matched...")
        }
     }

     

   }

  const id = useParams()
//  console.log(id.id)
 let idd= id.id
 const [state , dispatch]= useReducer(reducer,initialstate)
const {loading , error ,data }= state;




async function Fetchdetails (){

  try {
 dispatch({type:'fetch_loading'})
    
    let res= await axios({
        method:"get",
        url:`https://fakestoreapi.com/products/${idd}`,
       
    })
    
     dispatch({type:'fetch_sucess' , payload:res.data})

} catch (error) {
    
     dispatch({type:'fetch_error'})
   console.log(error) ;
}
    
}

useEffect ( ()=>{
 Fetchdetails()
},[])
 

  return (
   
        <>
      {loading ? <LoadingIndicator/>  :
        error   ? <ErrorIndicator/>   :
        

        <Container maxW="50%">
          
          <Singlepage {...data}/> 
           
        </Container>

      } 
        </>

    )
}
