// THE WAY TO TELL APP, ABOUT STORE IS PROVIDER, WRAPED AS CHILD 
// GO TO LAYOUT & WRAP WHOLE APP AS CHILDREN

"use client"
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { Toaster } from 'react-hot-toast';

// provided store and passed serwer component as child , hyderation by the of support next 
const Providers = ({children}:{children:React.ReactNode}) => {
  return <Provider store={store}>
    {children}
  <Toaster/>
  </Provider>
}  
export default Providers;


// now go laout.tsx and wrap children in it
/**
 * see layout export default function RootLayout                                  ({  children, }: {   children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>      {children}
      </body>                                                                      </html> )
 */