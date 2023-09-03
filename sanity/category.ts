import { defineType, defineField } from "sanity";

export const category = defineType( { 
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField(
    {
      name: "name",
      title: "Category",
      type: "string",
      // option: {
      //   list:["",""] // 18:00
      // }
      }
    )//defineField
  ]
}
) // defineType ()
/**
// this document ready to pass as refernec in other schema
// 10:00 https://www.youtube.com/watch?v=nqcH9eedzuk&list=PL0vKVrkG4hWq0mLbuI0QIkoLk0V9X_uWT&index=16
defineField({
    name: "name",
    title: "Gender Category",
    type: "reference",
  }),
to:[
{
    type:categoryType
}
]
 */
// 
// this will search to link with categoryType
 // this also @sanity-typed/schema-builder
//vide0 : 20:00 //https://www.youtube.com/watch?v=nqcH9eedzuk&list=PL0vKVrkG4hWq0mLbuI0QIkoLk0V9X_uWT&index=13
// same for drop Down menu