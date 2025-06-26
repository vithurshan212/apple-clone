import React from "react";
import {
    FaApple, FaSearch, FaShoppingBag,
} from "react-icons/fa";

function Navbar (){

    return (
        <>
        <nav className="flex mx-auto justify-center bg-slate-50 p-3 top-0">
        <img src="https://www.apple.com/in/" alt=""/>
        
        <ul className="flex justify-center items-center gap-4 ">
             <li> <a href=""><FaApple/></a></li>
            <li> <a href="">Store</a></li>
            <li> <a href="">Mac</a></li>
            <li> <a href="">IPad</a></li>
            <li> <a href="">Iphone</a></li>
            <li> <a href="">Watch</a></li>
            <li> <a href="">Airpods</a></li>
            <li> <a href="">Tv & Home</a></li>
            <li> <a href="">Entertainment</a></li>
            <li> <a href=""></a>Accessories</li>
            <li> <a href="">Support</a></li>
            <li> <a href=""><FaSearch/></a></li>
            <li> <a href=""><FaShoppingBag/></a></li>
            
           
        </ul>
        
        </nav>
         <p className="text-center p-4 ">Get up to 12 months of No Cost EMI◊ plus up to ₹8000.00 instant cashback‡ on selected products with eligible cards.
         <a className="text-blue-600 hover:underline " href="#">Shop</a>
         </p>

        </>
        
        
        
        
    )
}
   


export default Navbar