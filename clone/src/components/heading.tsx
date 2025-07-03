import {   Heading } from "@chakra-ui/react"
// import React from "react"

export default function Headin ({Head}: { Head: string }){

    return (

        <div> 
       <div style={{marginTop:"85px" ,}}>
       <Heading size="5xl" textAlign="Center" fontFamily="regular">  {Head}  </Heading>
       </div>

        </div>
    )
}