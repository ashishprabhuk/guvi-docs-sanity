import { createContext } from "react";

export const Store = createContext();

const contextApi = ({children})=>{
  return (
    <Store.Provider>
      {children}
    </Store.Provider>
  )
}

export default contextApi;