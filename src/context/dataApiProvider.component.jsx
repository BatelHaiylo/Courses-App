import {createContext,useState,useEffect} from 'react'

export const dataContext = createContext()

export default function dataApiProvider({children}){
    const [dataApi,setDataApi] = useState([])
    useEffect(()=>{getFetchFunc().then(res => setDataApi(res))},[])

    return(
        <dataContext.Provider value={{dataApi,setDataApi}}>
            {children}
        </dataContext.Provider>
    )
}