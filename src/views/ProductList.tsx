import PoductCard from "@/components/ProductCard";
import { ProductsData } from "@/utils/mockUpData";
import { StaticImageData } from "next/image";

const ProductList = () => {

  const ProductDataChunks= ProductsData.slice(0, 3);
  return (
    <section className="pt-10">
      <div className=" text-center items-center">
        <h2 className="text-blue-600 font-bold text-xl">PRODUCTS</h2>
      <h1 className="text-2xl font-bold " >Check What We Have</h1>
      </div>
      <div className="flex justify-around flex-wrap mt-8 ">
      
      {
        ProductDataChunks.map((items) => (
          <PoductCard
            key={items.id}
            title={items.name}
            price={items.price}
            image={items.image as StaticImageData}
            category={items.category}
            id={items.id}
            // passed items instead of product in video
          />    
        ))
        }
    </div>
    </section>
  )
}
//method 1 will be ignore because for menu data we need arrys
// const ProductList = () => {
//   return (
//       <div className="flex justify-evenly mt-16">
//           <PoductCard title="Flex Sweatshirt" price={150} image={P1}/>
//           <PoductCard  title="Instyle Sweatshirt" price={250} image={P2}/>
//           <PoductCard  title="Black Sweatshirt" price={250} image={P3}/>
//       </div>
//   )
// }

export default ProductList