import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import AddToCart from "./ui/AddToCart";
import DeleteFromCart from "./ui/DeletFromCart";

function ProductCard(props: {
  title: string;
  price: number;
  category: string;
  image: StaticImageData;
  id: number;
  
}) {
  return (
    <section>
    <Link href={`/products/${props.id}`}>
    <div className="py-4">
      <Image src={props.image} alt="Products" />
      <h1 className="text-lg font-bold mt-3">{props.title}</h1>
      <p className="text-lg font-bold">${props.price} </p>
      <p className="text-lg font-bold">{props.category} </p>       
      </div>
      </Link>
      <AddToCart />
      <DeleteFromCart />
    </section>
     
  );
}
export default ProductCard;
