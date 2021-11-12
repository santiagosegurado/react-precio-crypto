import React from 'react'
import { FilaCoin } from './FilaCoin'


const titulos = ["Moneda", "Precio", "Cambio de Precio"];

export const TablaCoins = ({ coins, search }) => {
    

    const arrayCoins = coins.filter( (coin) => coin.name.toLowerCase().includes(search.toLowerCase()) || 
                                                    coin.symbol.toLowerCase().includes(search.toLowerCase()));

    
    return (
        
            <table className="table table-dark mt-4 table-hover">
                <thead>
                    <tr>
                        {
                            titulos.map(titulo => (
                                <td key={ titulo } >{ titulo }</td>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    
                        {
                            arrayCoins.map(coin => (
                                <FilaCoin 
                                    key={ coin.id }
                                    coin={ coin } 
                                />
                            ))
                        }
                        
                        
                    
                </tbody>
                
            </table>
            
            
        
    )
}
