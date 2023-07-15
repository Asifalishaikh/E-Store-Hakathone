import ProductCard from "@/components/ProductCard";
import { ProductsData } from "@/utils/mockUpData";
import { StaticImageData } from "next/image";

const AllProduts = () => {
  return (   
  <div className="flex justify-around flex-wrap mt-16">
  {
    ProductsData.map((items) => (
      <ProductCard
        key={items.id}
        title={items.name}
        price={items.price}
        category={items.category}
        image={items.image as StaticImageData}
        id={items.id}/>    // ??? dynamic     
    ))
    }
    </div>)
}

export default AllProduts