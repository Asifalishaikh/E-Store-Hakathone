E Commerce /website hekathone
Jahanzaib & Hmaza

part 1 
https://www.youtube.com/watch?v=loG4NOwbeU0
video:1, 1:40
product list passing through props
react slik slider;
intigrated product Data through props (as arguments)

====================================================
part 2
video:2 00:33
https://www.youtube.com/watch?v=C2pvxFHsEd4

when you have repeatative data use loop, starting point & ending poin, it runs till condition meats,
by integraing data from sanity we get an array. 
Arry have a function called array.map, a call back functioWEn 

HERE WE CAN PASS DATA OTHER METHOD THEN PROPS METHOD IN VIDEO 1
video:2 50:00
ProductList
method 1 will be ignore because for menu data we need arrys
always need to unique pass a key in map function,

video:2 1:00
products details/ to navigate on products page



video:2 1:15
Dynamic Routing
category[slug] page.tsx


video:2 1:25 Filter Method
Catagoery Routing page products

video:2 1:30 
ONCLIK PIC Navigate to Detail Product page 
Product Detail Page Routing
product/[id]
id={items.id}
added in ProductCard.tsx, ProductList.tsx , product=>[slug]>pages.tsx

TO NAVIGATE ON TARGET PAGE ON CLICK WE NEED TO WRAP RETURN IN LINK
Product ard.tsx >
retrun( <Link href={"#"}><div><div></Link>)// Note link behaviour start by hover/onClik images
( <Link href={"#"}><div><div></Link>) then 
<Link href={`/products/${props.id}`}> // to pass value used backtics `${props.id}`

WRAP => image in <Link> components>laout> Header.tsx
<Link href={"/"}>
      <Image src={logo} alt="Compony Logo" />
      </Link>

part 3
lecturee about Responsiveness almost. 
https://www.youtube.com/watch?v=3tZ7K53c6Gk



      ===============================================
      AddToCart By /shukaib
       https://www.youtube.com/watch?v=tpsB99ulDto&t=499s



      =============================================
      Building an Ecommerce Website Sanity, Drizzle, Postgres
      By Hamza
      Part 1
       
      https://www.youtube.com/watch?v=nqcH9eedzuk&list=PL0vKVrkG4hWq0mLbuI0QIkoLk0V9X_uWT&index=12
                 SANATY GROQ is Query method use in sanity
                        Fetch Data & Add Data

                  Content full we use Rest API functionality.
                  Query method in contenfull through Graph QL
                        only fetch Data
      Part 2 Sanity, 
      https://www.youtube.com/watch?v=JTzW0w1qN9E&list=PL0vKVrkG4hWq0mLbuI0QIkoLk0V9X_uWT&index=11

      AddToCart
      https://www.youtube.com/watch?v=nqcH9eedzuk

      ==========================================================




AddToCard:
https://www.youtube.com/watch?v=1dEIpIFA3j0
      AddToCard maintained through Redux
      npm install @reduxjs/toolkit
      npm install react-redux



react-hot.toast
npm install react-hot-toast
go to Provder and wrap as child


Payment Method
https://www.youtube.com/watch?v=qNzwWyRliXI
am

Advertisement
      https://youtu.be/LqHQlIAfYaA



      ==========================
      
      to render image direct from site method video: 1:26
      https://www.youtube.com/watch?v=V8FkyS4SMFQ&list=PL0VhnZARkgZOQ_S-OlkS3ypYFN2gfrv_S&index=3

Sanaty

      npm create sanity@latest -- --template clean --create-project "E-Commerce" --dataset production

      video-3
      https://www.youtube.com/watch?v=j88xcWneUp0&list=PL0VhnZARkgZOQ_S-OlkS3ypYFN2gfrv_S&index=4
     
      git init
      git add
      