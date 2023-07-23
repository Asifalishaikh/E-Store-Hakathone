import { defineField } from "sanity";

export const product = {
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    {
      name: "productName",//title (in Hamza syed )
      type: "string",
      title: "Product Name",
    },
    //slug product seperate page
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "productName",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input: any) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      name: "desdription",
      type: "array",
      title: "Product Description",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "image",
      type: "array",
      title: "Product Image",
      of: [
        {
          type: "image",
          fields: [
            {
              name: "alt",
              type: "text",
              title: "Alternative Text",
            },
          ],
        },
      ],
    },
    {
      name: "productType",
      type: "array",
      title: "Product Type",
      of: [{ type: "string" }],
    },
    {
      name: "price",
      type: "number",
      title: "Product Price",
    },
    {
      name: "size",
      type: "array",
      title: "Sizes",
      of: [{ type: "string" }],
    },
    {
      name: "quantity",
      type: "number",
      title: "Quantity",
    },
  

    // {
    //   name: "directors",
    //   title: "Directors",
    //   type: "array",
    //   of: [{ type: "string" }],
    // }    

    defineField(
      {
      name: "category",
      title: "Product Catagory",
      type: "reference",
      to: [
        {
            type:"category"
        }
      ]
    }),//defineField
  ]
}
  
  
