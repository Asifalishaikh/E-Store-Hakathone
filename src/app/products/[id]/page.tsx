import { ProductsData } from "@/utils/mockUpData";

import Image from "next/image";

const getProductDetail = (id: number ) => {
  console.log(id);
  return ProductsData.filter((items => items.id == id))
};

export default function Page({ params }: { params: { id: number } }) {
  const result = getProductDetail (params.id)
  
  return (
    <div className="flex justify-around flex-wrap mt-16 "> 
      {result.map((items) => (
        <div key={items.id} className="flex items-center gap-6">
          <div>
          <Image src={items.image} alt={items.name} />
           </div>
          <div >
            <h1 className="text-lg font-bold">Product Detail</h1>
          <p className="text-lg font-bold">Price $: {items.price}</p>
          <p className="text-lg font-bold">{items.category}</p>
          <p className="text-lg font-bold">{items.name}</p>
           </div>
       
        </div>
      ))}
  </div>
        );
}
  