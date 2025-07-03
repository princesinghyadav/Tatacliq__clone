import bank  from "../images/bank.json"

 
  export default function Bank () {

    return (
<div  style={{display:"flex", width:"98%",borderRadius:"10px",margin:"auto",marginTop:"45px"}}>


{
    bank.map((product,index) =>(
    <div key={index}
    style={{   borderRadius:"10px" ,margin:"3px"}}
    > 
      
       <img src={product.src} alt="product-image"/> 
   
    </div>


    ))
}


 
</div>
       
    )
}
 