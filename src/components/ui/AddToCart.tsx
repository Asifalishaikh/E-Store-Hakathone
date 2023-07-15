"use client"

import { useDispatch } from "react-redux";
import { Button } from "../ui/button";
import { cartActions } from "@/store/slice/cartSlice";
import toast from 'react-hot-toast';

const AddToCart = () => {
    const dispetch = useDispatch();
    const addItem = () => {
        dispetch(cartActions.addToCart({ quantity: 1 }))
        toast.success("Product added")
    }
   return <Button onClick={addItem}>Add To Cart</Button>
   
}
export default AddToCart;