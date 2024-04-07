// import sanityClient from "../client.js";
import { createContext, useEffect, useState } from "react";

export const Store = createContext();

const contextApi = ({children})=>{
  const [title,setTitle] = useState([]);
  // useEffect(()=>{
  //   sanityClient.fetch(`*[_type == "post"]{
  //     title,
  //     slug,
  //     mainImage{
  //       asset->{
  //         _id,
  //         url
  //       },
  //       alt
  //     }
  //   }`)
  //   .then((data)=> setTitle(data)).catch((err)=>console.log(err));
  // },[]);

  return (
    <Store.Provider value={{title, setTitle}}>
      {children}
    </Store.Provider>
  )
}

export default contextApi;