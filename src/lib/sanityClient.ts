import { createClient } from 'next-sanity'

export const client = createClient({
    apiVersion: '2023-07-12',
    dataset:'production',
    //projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    projectId:"4xctjlxr",
    useCdn: true,
    token:process.env.NEXT_PUBLIC_ACCESS_TOKEN,
  })
// clien crate path b/w sanity & Next.js
// 
//to fetch data in next js we create client to set credentials
//these above are called credential. Now we have to fetch data > go page.ts to fatch data
// dataset is for production or testing envoirnment.
// createClient takes arguments , in which these credtials are created
// this function will retrun a object. that object is stored in a variable=client
// in this object we have a method fetch , where we can write query 