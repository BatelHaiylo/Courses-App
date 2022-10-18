import {createContext,useState,useEffect} from 'react'
import { getUsers } from '../services/Users/getUsers'

export const userContext = createContext()

export default function userProvider({children}){
    const [user,setUser] = useState([])
    useEffect(()=>{getUsers().then(res => setUser(res))},[])

    return(
        <userContext.Provider value={{user,setUser}}>
            {children}
        </userContext.Provider>
    )
}