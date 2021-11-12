import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { TablaCoins } from './components/TablaCoins'
import 'bootstrap/dist/css/bootstrap.min.css'

import './app.css';


export const App = () => {
    
    const [coins, setCoins] = useState([])
    const [search, setSearch] = useState("")


    const getCoin = async() => {
        
        const {data} = await axios.get(
            'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1'
            );
            
        setCoins(data);
    }


    useEffect(() => {
        
        getCoin();
        
    }, [])
    
    return (
        <div className="container">
            <div className="row">
                <input 
                    type="search" 
                    className="form-control bg-dark text-light border-0 mt-4 text-center"
                    placeholder="Buscar..." 
                    onChange={ e => setSearch(e.target.value) }
                />
                <TablaCoins coins={ coins } search={search}/>
            </div>
        </div>
    )
}
