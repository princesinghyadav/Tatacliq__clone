import categoryimage from "../images/categoryimage.json"


  function Category () {

    return (
<div  style={{display:"flex", width:"98%",borderRadius:"10px",margin:"auto",marginTop:"45px"}}>


{
    categoryimage.map((product,index) =>(
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
export default Category;
 