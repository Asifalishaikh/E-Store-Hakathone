import P1 from "@/assets/product-1.webp";
import P2 from "@/assets/product-2.png";
import P3 from "@/assets/product-3.png";
import { ProductTypes } from "./ProductTypes";

export const ProductsData: ProductTypes[] = [
    {
        id: 1,
        name: 'Flex Sweatshirt',
        tagline:"Sweatshirt",
        category: 'Female',
        price: 150,
        image:P1
    },
    {
        id: 2,
        name: 'Instyle Sweatshirt',
        tagline:"Sweatshirt",
        category: 'Female',
        price: 200,
        image:P2
    },
    {
        id: 3,
        name: 'Black Sweatshirt',
        tagline:"Sweatshirt",
        category: 'Female',
        price: 250,
        image:P3
    },
    {
        id: 4,
        name: 'T Shirt',
        tagline:"Shirt",
        category: 'Male',
        price: 250,
        image:P3
    },
    {
        id: 5,
        name: 'Kids Cloths',
        tagline:"Cloths",
        category: 'Kids',
        price: 250,
        image:P3
    }
]