import P1 from "@/assets/product-1.webp";
import P2 from "@/assets/product-2.png";
import P3 from "@/assets/product-3.png";
import { ProductTypes } from "./ProductTypes";

export const ProductsData: ProductTypes[] = [
    {
        id: 1,
        name: 'Flex Sweatshirt',
        category: 'Female',
        price: 150,
        image:P1
    },
    {
        id: 2,
        name: 'Instyle Sweatshirt',
        category: 'Female',
        price: 200,
        image:P2
    },
    {
        id: 3,
        name: 'Black Sweatshirt',
        category: 'Female',
        price: 250,
        image:P3
    },
    {
        id: 4,
        name: 'Black Sweatshirt',
        category: 'Male',
        price: 250,
        image:P3
    },
    {
        id: 5,
        name: 'Black Sweatshirt',
        category: 'Kids',
        price: 250,
        image:P3
    }
]