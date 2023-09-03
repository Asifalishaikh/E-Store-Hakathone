"use client"

import { useDispatch } from "react-redux";
import { Button } from "../ui/button";
import { cartActions } from "@/store/slice/cartSlice";
import  toast from "react-hot-toast";

const DeleteFromCart = () => {
    const dispetch = useDispatch();
    const deleteItem = () => {
        // if(quantity:1 = > 0) ? dispetch(cartActions.deleteFromCart({quantity:1})): "No Product chosed"
        dispetch(cartActions.deleteFromCart({ quantity: 1 }));
        toast.success("Product removed from card")
    }
    return <Button onClick={deleteItem}>Delete From Cart</Button>
}
export default DeleteFromCart;
