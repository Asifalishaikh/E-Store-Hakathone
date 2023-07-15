import ProductCard from "@/components/ProductCard";
import { ProductsData } from "@/utils/mockUpData";
import { StaticImageData } from "next/image";

const getProductByCategoery = (categoery: string) => {
return  ProductsData.filter((datum=>datum.category === categoery))
}

export default function Page({ params }: { params: { slug: string } }) {
  
  const result = getProductByCategoery(params.slug)
  
  return ( 
      <div className="flex justify-around flex-wrap mt-16 "> 
     {
        result.length>0 ?result.map((items) => (
          <ProductCard
            key={items.id}
            title={items.name}
            price={items.price}
            category={items.category}
            image={items.image as StaticImageData}
            id={items.id}
            />    // ??? dynamic 
        )) :<p className="flex text-2xl font-bold">Sorry; No Stock Available</p>       
    }
        
  </div>
        )
  }