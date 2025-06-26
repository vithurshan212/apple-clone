import React from "react";

function Sale (){
    
    return (
        <section className=" rounded-lg bg-cover bg-center mt-2 p-2 flex flex-col  items-center cursor-pointer"
          style={{
            backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLS29eUVYBMuSUb48YiAY-Fs-katjSM41HpQ&s)" ,height: "100vh"
             
        }}>
            <h1 className="text-4xl font-semibold">MacBook Air</h1>
            <h4 className="text-xl mt-1 ">Sky blue colour.</h4>
             
             <div className="flex p-5">
            <button className="bg-blue-600 hover:bg-blue-400 border  text-white p-4 rounded-3xl mr-6 ">Learn more</button>
             <button className=" hover:bg-blue-600 hover:text-white border border-white text-violet-400 p-4 rounded-3xl ">Buy</button>
             </div>
             <p className="mt-auto text-purple-500 text-xl">Built for Apple Intelligence.</p>
           

        </section>
    )
}
   


export default Sale