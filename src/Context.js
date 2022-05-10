import { createContext, useState } from "react"

export const Context = createContext();
export const ContextProvider = ({children}) => {
    const [name,setName] = useState('');
    const [url,setUrl] = useState('');
    const[Id,setId] = useState('0');

    return(
        <Context.Provider value={{name,setName,url,setUrl,Id,setId}}>
            {children}
        </Context.Provider>
    )
}