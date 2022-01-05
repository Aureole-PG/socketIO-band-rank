import React,{createContext, useEffect, useState, useMemo} from 'react'
import { useSocket } from '../hooks/useSocket'
export const SocketContex = createContext(null)
const SocketProvider = ({children}) => {
    
    const [bands , setBands] = useState([])
    const {socket, online} = useSocket({serverPath: 'http://192.168.100.10:3000'} )
    const [loading, setLoading] = useState(true)
    const delete_band = (id)=>{
        socket.emit("delete", id)
    }
    useEffect(()=>{
        if (loading) {
            socket.on("bands-list",(e)=>{
                console.log(e)
            })
        }
    },[loading])
    const vote= (id)=>{
        socket.emit('vote', id);
    } 
    // const bandList = useMemo(()=>({
    //     bands,
    //     delete_band,
    //     vote,
    //     online
    // }), bands)
    return (
        <SocketContex.Provider value={{socket, online}}>
            
            {children}
        </SocketContex.Provider>
    )
}

export default SocketProvider