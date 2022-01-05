import React from 'react'

import SocketProvider from './services/socketContext';
import Home from './componets/Home'

export default function App() {
    
    return (
        <SocketProvider>
            <Home/>
        </SocketProvider>
    )
}

