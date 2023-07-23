import Hero from "@/views/Hero";
import ProductList from "@/views/ProductList";
import ProductPromoSection from "@/views/ProductPromoSection";
import { client } from "@/lib/sanityClient";
import { Image as IImage } from "sanity";
import Image from "next/image";


export const getProductData = async () => {
    const resp = await client.fetch(`*[_type=="product"]{
    price,
    _id,
    productName,
    image,
    size,
    category->{
      name  
    }
  }`);
return resp  
}

interface IProduct {
      // title: string,
  productName: string,
  image: IImage,
  price: number,
  _id: string,
  size: string,
  category: {
    name:string
  }

      //description: string,
    }
// IMQGE URL GENERATON IS NOT WORKING HERE IN DIV.

export default async function Home() {
  const data: IProduct[]= await getProductData() 
return (<div>
  <Hero />
   <ProductPromoSection />
    {/* <PromoTemplete/> */}
    <ProductList />;
 
 </div>
 )
 
}



// return ( 
//   <div className='grid grid-cols-[repeat(3,auto)]  justify-center gap-x-10 mt-4'>
//        {data.map((item) => (
//       //  <div key={item._id}>
//        <div>
//          </div>
      
//     ))}
//   </div>
// )