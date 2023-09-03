import Quantity from "@/components/Quantity";
import AddToCart from "@/components/ui/AddToCart";
import DeleteFromCart from "@/components/ui/DeletFromCart";
import { ProductsData } from "@/utils/mockUpData";

import Image from "next/image";
// pass slug ot ifor dynamic page
const getProductDetail = (id: number | string) => {
  //console.log(id);
  return ProductsData.filter((items) => items.id == id);
};

const sizes = ['XS', "SM", "M", "L","XL" ];
export default function Page({ params }: { params: { id: number } }) {
  const result = getProductDetail(params.id);
  //console.log(result);

  return (
    <div className="flex flex-wrap justify-around  mt-16 ">
      {result.map((items) => (
        <div key={items.id} className="flex items-center gap-6">
          {/* flex for image & product */}
          {/* Left image side */}
          <div>
            <Image src={items.image} alt={items.name} />
          </div>
          {/* Right side div start*/}
          <div>
            <div className="">
              <h1 className="text-2xl font-semibold ">{items.name}</h1>
              <h2 className="text-base text-gray-400 font-semibold">
                {items.tagline}
              </h2>
            </div>

            <div>
              <h3 className="text-sm font-semibold mt-8">SLECT SIZE</h3>

              {/* sizes div for flex  */}
              <div className="flex gap-2 ">          
              {
                sizes.map((itemsSize) => {
                //return <div>{itemsSize} </div>  
                  return (
                    <div className="_center h-6 w-6 rounded-full border duration-700 hover:bg-green-400 cursor-pointer mt-2">
                      <span className=" text-xs font-semibold text-center text-gray-600 ">{itemsSize} </span>
                    </div>
                  );
                })
              }  {/* here due to {} should be retrun  */}
              
              {/* {
                sizes.map(() => {
                return <div>items size</div>  
                })
              } */}
              {/* here due to {} should be retrun  */}
              </div>{/* sizes div  flex end  */}

              {/* Quantity */}
              <div className="flex mt-2 items-center gap-2">
                <h3 className="text-xs font-semibold ">Quantity: </h3>
                
                <div className="_center  mt-2">
                  <Quantity/>
                </div>
              </div>   {/* Quantity */}


              {/* Add to Card */}
              <div className="_center  mt-4">
                <AddToCart/>
              </div>

              {/* Delete to Cart */}
              <div className="_center  mt-4">
                <DeleteFromCart/>
              </div>



              {/* <p className="text-lg font-bold mt-2">Price $: {items.price}</p>
              <p className="text-lg font-bold mt-2">{items.category}</p> */}
            </div>
          </div>{" "}
          {/* Right side div end*/}
        </div>
      ))}
    </div>
  );
}
//Residnet of Finland