import Image from "next/image";
import { StaticImageData } from "next/image";
import React from "react";
import ImageP from "@/assets/promoImage-1.webp";
import ImageBlueTShirt from "@/assets/BlueT-shirt.webp";
import ButtomBomber from "@/assets/buttonBomber.webp";

const ProductPromoSection = () => {
  return (
    <section className="py-16 px-10 space-y-5">
      {/* Heading */}
      <div className="text-center font-bold space-y-2">
        <h2 className="text-blue-600 font-semibold text-lg">PROMOTIONS</h2>
        <h1 className="text-3xl text-gray-800 font-bold">
          Our Promotions Events
        </h1>
      </div>
      {/* Grid */}
      <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* start div Black Sweatshirt Female */}
        <div className="w-full flex felx-col justify-around md:flex-row col-span-2 h-44 bg-slate-200 px-8 py-2  ">
          <div className="flex max-w-[23rem] ">
          <div className="pt-6">
          <h4 className="text-3xl font-extrabold ">GET UP TO 60%</h4>
          <p className="text-xl">For the summer season</p>
          </div>
            <div> 
            {/* <Image width={1000} height={1000}  src={"https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevent1.6f776995.png&w=384&q=75" } alt="Black Sweatshirt"/>  */}
            <Image height={200} width={300} src={ImageP} alt="Black Swweatshirt F" />
          </div>
    </div>
    </div>{""} {/* Ending Black Sweatshirt Female */}
        
        {/* Blue T-shirt Man */}
        <div className="row-span-2 w-full h-full pl-4 pt-4 bg-orange-50">
          
          <p className="pb-1">Flex Sweatshirt</p>
          <div className="flex gap-2">
            <p> <del> $100.00</del>
               </p>
          <p className="font-semibold ">$75.00 </p>
          </div>
        <Image src={ImageBlueTShirt} alt="Blue T-Shirt Man" className="pt-8"/> 
        </div> {/* End Blue T-shirt Man */}

{/* Button Bomber Man */}
        <div className="row-span-2 w-full h-full pl-4 pt-4 bg-slate-200">
        <p className="pb-1">Flex Push Button Bomber</p>
          <div className="flex gap-2">
          <p> <del>$225.00</del> </p>
          <p className="font-semibold ">$190.00 </p>
          </div>
            <Image src={ButtomBomber} alt="Blue T-Shirt Man" className="pt-8"/>
        </div>{/* Button Bomber Man */}
        
        <div className="col-span-2 w-full h-44 bg-slate-700 ">
          <h1 className="text-white text-center text-3xl font-extrabold pt-6 px-8 pb-4">GET 30% Off</h1>
          <h2 className="text-white text-center text-sm ">USE PROMO CODE</h2>
          <h3 className="text-white text-center text-xl  ">D I N E W E K E N S A L E</h3>
        </div> 
      {/* end main div */}
      </div>{" "}
     
    </section>
  );
};

export default ProductPromoSection;
