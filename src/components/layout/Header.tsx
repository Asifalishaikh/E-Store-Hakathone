"use client" // added Header should always 

import Image from "next/image";
import logo from "/public/logo.webp";
import Link from "next/link";
import { useSelector } from "react-redux"; // added
import { RootState } from "@/store/store"; // added
import {ShoppingCart} from "lucide-react"

const Header = () => {
    const cartValue = useSelector(
      (state: RootState) => state.cart.totalQuantity
    );
  
  return ( 
    <div className="flex justify-between px-8 py-8  ">
      <Link href={'/'}>
      <Image src={logo} alt="Compony Logo" />
      </Link>
      <ul className="flex text-lg font-bold gap-4">
          <li><Link href={"/categoery/Male"}>Male</Link></li>
          <li><Link href={"/categoery/Female"}>Female</Link></li>
          <li><Link href={"/categoery/Kids"}>Kids</Link></li>
          <li><Link href={"/categoery/Sports"}>Sports</Link></li>
          <li><Link href={"/products"}>All Products</Link></li>
      </ul>
      <div className="bg-slate-200 rounded-full h-10 w-10
      flex justify-center items-center hover">
        <span className=" absolute top-6 text-white h-5 w-5
         bg-red-500 rounded-full flex items-center justify-center  ">{cartValue}</span>
        <ShoppingCart/>
      </div>
    </div>
  );
};

export default Header;
