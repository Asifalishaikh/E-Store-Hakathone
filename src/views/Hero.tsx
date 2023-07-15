import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import HeroImage from "@/assets/heroimage.webp";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import  BazarLogo from "@/assets/bazar.webp";
import  InStyle from "@/assets/instyle.webp";
import  Versace from "@/assets/versace.webp";
import  Bustle from "@/assets/bastle.webp";



const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row lg:flex-row gap-y-10 shrink-0">
      {/* Riht Div */}
      <div className="flex-1 pt-6">
      <h1 className="scroll-m-20 mt-4 mb-6 text-4xl font-extrabold tracking-tight lg:text-5xl">
          E-STORE
        </h1>
        <Badge className=" py-3 mb-6 rounded-md bg-blue-200 text-blue-700">
          Sale 70%
        </Badge>
        <h1 className="scroll-m-20 mt-4 mb-6 text-4xl font-extrabold tracking-tight lg:text-7xl">
          An Industrial Take on Streetwear
        </h1>
        
        <p className="text-lg font-bold">Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
        <Button className="h-10 px-10 mt-3 gap-2 mb-12" ><ShoppingCart/>Lets! Shopping</Button>
        <div className="flex gap-4 ">

         {/* <Image height={96} width={96} src={"https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured1.66abddd4.png&w=128&q=75"} alt="Bazar " /> */}
         <Image src={BazarLogo} alt="Bustle  Image" />
          <Image src={Bustle} alt="Bustle  Image" />
          <Image src={Versace} alt="Versace" />
          <Image src={InStyle} alt="Hero Image" />
      </div>
      </div> 
     {/* Left Hero Image Div */}
      <div className="flex-1 bg-orange-100 rounded-full h-full w-96">
        <Image className="" src={HeroImage} alt="Hero Image" />
      </div>
    </section>
  );
};

export default Hero;
