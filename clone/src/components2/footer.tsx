



export default function Footer(){

return (
<>
<div style={{backgroundColor:"#CCCCCC", marginTop:'120px', marginBottom:'50px'}}> 
    {/* this div for logo of tata cliq */}
<div style={{width:"25%", margin:"auto"}    }>
    <img  src="https://www.tatacliq.com/src/general/components/img/trustFrame.png" alt="img"/>
    </div>

    {/* this is the main div in which all three lines of words were written  */}
<div style={{  width:"70%",margin:"auto", display:"flex", marginTop:'60px'
,justifyContent:"space-evenly",backgroundColor:"#CCCCCC"
}}>
   
   

    <div className="foot">
        <h2 style={{ fontStyle:"normol",fontWeight:"bold"}}>Tata Market Place</h2>
        <p>About Us</p>
        <p>Carrers </p>
        <p>Sell With Us </p>
        <p> Terms of Use</p>
        <p> Privacy Policy </p>
        <p>Affiliates</p>
        <p> Sitemap</p>
        </div>
    <div  className="foot">
        <h2 style={{ fontStyle:"normol",fontWeight:"bold"}}>Customer Service </h2>
    <p>Shopping </p>
        <p>Offers & Promotions  </p>
        <p>Payments</p>
        <p> Cancellation</p>
        <p> Returns & Refunds  </p>
        <p>CliQ And PiQ</p>
        <p> Returns Policy </p>
         <p>Electronics Returns Policy </p>
         <p>Contact Us</p>
         <p>Revies Guidelines </p>
         <p>Furniture Return Policy </p>
         <p>Replacement Policy </p>
         </div>
    <div  className="foot"><h2 style={{ fontStyle:"normol",fontWeight:"bold"}}>My Tata Cliq </h2> 
    <p>My Account </p>
    <p>My Orders </p>
    <p>My Shopping  Bag</p>
    <p>My Wishlist </p>

    </div>
</div>

{/*  this is the div in which i gonna write logo related and rules  */}
 
 
</div>
</>
)    
}