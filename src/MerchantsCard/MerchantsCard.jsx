import React from 'react'
import { FaPlus } from 'react-icons/fa'
import './MerchantsCard.css'

const MerchantsCard = () => {

  const merchants = [
  { initials: 'AD', name: 'Adisa Debo...' },
  { initials: 'AD', name: 'Adisa Debo...' },
  { initials: 'AD', name: 'Adisa Debo...' },
  { initials: 'AD', name: 'Adisa Debo...' },
  { initials: 'AD', name: 'Adisa Debo...' },
];
  return (
    <div className='merchant-container'>
        <div className='merchant-header'>
            <h3> Merchants </h3>
            <a href="#" className="add-merchant"> <FaPlus />Add Merchants</a>
        </div>
        <div className="merchant">
            {merchants.map((merchant, index) => (
              <div className="merchant-info" key={index}>
                <h2 className="initials">{merchant.initials}</h2>
                <p className="merchants-name">{merchant.name}</p>
            </div>
            ))}
        </div>
        <a className="see-all">See all</a>
    </div>
  )
}

export default MerchantsCard