import Hero from "@/views/Hero";
import ProductList from "@/views/ProductList";
import ProductPromoSection from "@/views/ProductPromoSection";
import { client } from "@/lib/sanityClient";
import { Image as IImage } from "sanity";
import Image from "next/image";

import BASE_PATH_API from "@/components/shared/BasePath";

async function getProductData () {
  const res = await fetch(`${BASE_PATH_API}/api/products`);
  if (!res.ok) {
    throw new Error("FAILED TO FETCH DATA")
  }
  return res.json();
}

export default async function Home() {




  
  //const data: IProduct[]= await getProductData()  //Hmaza 
  let {response} = await getProductData();
  console.log("response : " ,response);
    return (
    <div>
  <Hero />
  <ProductPromoSection />  
       {/* <PromoTemplete/> */}
    <ProductList />  
 </div>
  ) 
}
  //   const resp = await client.fetch(`*[_type=="product"]{
  //   price,
  //   _id,
  //   productName,
  //   image,
  //   size,
  //   category->{
  //     name
  //   }
  // }`);
  
// interface IProduct {
//       // title: string,
//   productName: string,
//   image: IImage,
//   price: number,
//   _id: string,
//   size: string,
//   category: {
//     name:string
//   }
//  //description: string,
//     }
// IMAGE URL GENERATON IS NOT WORKING HERE IN DIV.


// inter ISR video 6 
//  https://www.youtube.com/watch?v=yyL7zbKol7A&list=PL0VhnZARkgZOQ_S-OlkS3ypYFN2gfrv_S&index=8
// export const getProductData = async () => {
//   const resp = await fetch("http://localhost:3000/api/products", {
//     next:revalidate: 60
//   });
//   if (!resp.ok) {
//     throw new Error ("failed to fetch data")
//   }

// return resp.json() 


// return ( 
//   <div className='grid grid-cols-[repeat(3,auto)]  justify-center gap-x-10 mt-4'>
//        {data.map((item) => (
//       //  <div key={item._id}>
//        <div>
//          </div>
      
//     ))}
//   </div>