???? 
Question: Schema, defineType & defineFields ?

In schema if  we do not know which fileds may be define,
we add sanity difien types called defineType() & 

export default defineType(
 name: "product",
  type: "document",
  title: "Product",
  fields: [
    {
      name: "productName",//title (in Hamza syed )
      type: "string",
      title: "Product Name",
    },
  ]
)
now it will show types integration by Ctrl + space


same we we define fields inside defineType();

export default defineType(
 name: "product",
  type: "document",
  title: "Product",
  fields: [
 defineFields (
    {
      name: "image",
      type: "image",
      title: "Image",
    },
    ), // defineFilds (1= Image )

    defineFields (
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    ), // defineFilds (2= Title )

    defineFields (
    {
      name: "description",//title (in Hamza syed )
      type: "string",
      title: "Description",
    },
    )// defineFilds (3=  Description )

  ] // fields:[]
)


??? 
Question: where we add Url after deploymwnt?
in CROS we normly use localhost/3000, This is in production stage,
after deployment we may add Url in CROS of sanity

???
After efining seprate schema in ts/jsx file we add it in 
 sanity> schema.ts file.

 ??? In on studio vision we fetch data throw QUERY 
 * 
 * [_type == "product"]
 * [_type == "product" && category == "kids"]

 ??? we may fetch data after copy QUERY Url in Post API or Thunder extension. 

 ??? we fetch data through sanity client
    we can connect Nexp app through sanity client.
??? we recieved data in promise, so we need to use await in funtion. (see FetchData())

?? once we get data, we can intigrate in UI through maping


??? we recive image url from sanity, so for perfect url, there is a function in Next js / sanity 
static routing
dnamic routing

static params // will be cover in category by Jahanzaib
https://www.youtube.com/watch?v=3tZ7K53c6Gk 

V:18:00
//>src>app>products>[id]>pages.tsx

generative params is functon of next.js during using this / it is necessary to use as it is. 

when we make a params function DO NOT export, to avoid build time error

// pass slug ot ifor dynamic page
const getProductDetail = (id: number | string) => {
  console.log(id);
  return ProductsData.filter((items => items.id == id))
};
it may be used here > return ProductsData.find((items => items.id == id)), 
it will retrun only a single data = id,
so we used filter to get full arry as it return full arry = id

   {result.map((items) => (
(AS THE FILTER retrun AN ARRY we used reult.map)

NOTE ALL THE PRODUCT DATA IS COMING FROM 
//>src>app>utils>mockUpData.ts

video 3
filter needs an argument but it retrun full array

as filter return an array so we apply 
result.map 