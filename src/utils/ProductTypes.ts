import { StaticImageData } from 'next/image';

export type ProductTypes = {
    id: number;
    name: string;
    price: number;
    category: string;
    image: string | StaticImageData
}
