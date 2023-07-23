
import { createClient } from "next-sanity";
import { NextResponse } from "next/server";
import { SanityClient } from "sanity";

export async function GET() {

    let client: SanityClient = createClient({
        projectId: `${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`,
        dataset: `${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
        apiVersion: "v2023-07-12",
        useCdn:false
    
})
    try {
        const response = await client.fetch(`*[_type == "product"]{ price,
            _id,
            productName,
            image,
            size,
            category->{
              name  
            }

        }`)
        console.log(response);
        return NextResponse.json({response})
        
    } catch (error) {
    console.log((error as { message: string }).message);// define message type   
        return NextResponse.json({"error":error })
    }
};
// to create conection b/w sanity and next.js use sanity createClient 