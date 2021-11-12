import React from 'react'

export const FilaCoin = ({ coin }) => {

    return (
        <tr>
            <th>
                <img
                    src={coin.image}
                    alt={coin.name}
                    style={{ width: 30 }}
                    className="img-fluid me-2"
                />
                <span className="me-3">
                    {coin.name}
                </span>
                <span className="text-uppercase text-muted">
                    ({coin.symbol})
                </span>
            </th>
            <th > $ {coin.current_price} </th>

            <th
                className={
                    (coin.price_change_percentage_24h > 0)
                        ? "text-success"
                        : "text-danger"
                }
            >
                {coin.price_change_percentage_24h}
            </th>
        </tr>
        
      
    )
}
