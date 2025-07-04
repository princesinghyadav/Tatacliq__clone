 import { useContext } from "react";
 import { Authcontext } from "@/context/authcontext";
import { Routes, Route } from "react-router-dom"; 
import Product from "@/pages/product";
import Singleproduct from "@/pages/singleproduct";
import ContactForm from "@/pages/contact";
import Cart from "@/pages/cart";
import Signup from "@/pages/signup";
import Login from "@/pages/login";
import Landing from "@/pages/landingpage";
import Success from "@/pages/payment";
import { Navigate } from "react-router-dom";
import NotFound from "@/pages/notfound";
type Props = { children: React.ReactNode };
function Pagewrapper({children}:Props ){
  const {isLoggedIn}= useContext(Authcontext)

// const isLog=false;
 
   if(!isLoggedIn){
      alert('To vist this page , first login.')
   return  <Navigate to="/login"/>
   }
  
  return children
  
}




export default function Routess  (){

    return(
        <div> 
         
        <Routes>
        
        
                <Route path='/' element={   <Landing/>  }></Route>

                <Route path='/product' element={   <Product/>  }></Route>

                <Route path="/product/:id" element={<Singleproduct/>}></Route>
  
                <Route path="/contact" element={<ContactForm/>}></Route>

                <Route path="/cart" element={
                    <Pagewrapper>
                           <Cart/>
                    </Pagewrapper>
                    }></Route>

                <Route path="/signup" element={<Signup/>}></Route>

                <Route path="/login" element={<Login/>}></Route>
        
                <Route path="/product/:id/success" element={ 
                    <Pagewrapper>
                        <Success/>
                    </Pagewrapper>
                   } ></Route>
                <Route path="*" element={<NotFound/>}></Route>
        </Routes>
        </div>
    )
}