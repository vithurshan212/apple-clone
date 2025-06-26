import React from "react";

function Hero (){
    
    return (
        <section className=" rounded-lg bg-cover bg-center mt-2 flex flex-col-reverse items-center   "
          style={{
            backgroundImage:"url(https://www.indiaistore.com/files/uploads/bts/2025/mobile/01.jpg)" ,height: "100vh"
             
        }}>
            <button className="bg-gray-200 hover:bg-white border border-black text-black p-4 rounded-3xl mb-6">Learn more</button>

        </section>
    )
}
   


export default Hero