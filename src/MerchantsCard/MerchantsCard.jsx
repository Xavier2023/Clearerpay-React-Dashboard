import React from 'react'
import { FaArrowDown, FaArrowUp, FaPlus } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'
import './MerchantsCard.css'
import { GoArrowSwitch } from 'react-icons/go'
import { BsThreeDotsVertical } from 'react-icons/bs'

const MerchantsCard = () => {
  return (
    <div className='merchant-container'>
        <div className='merchant-header'>
            <h3> Merchants </h3>
            <a href="#" className="add-merchant"> <FaPlus />Add Merchants</a>
        </div>
        <div className="merchant">
            <div className="merchant-info">
              <h2 className="initials">AD</h2>
              <p className="merchants-name">Adisa Debo...</p>
            </div>
            <div className="merchant-info">
              <h2 className="initials">AD</h2>
              <p className="merchants-name">Adisa Debo...</p>
            </div>
            <div className="merchant-info">
              <h2 className="initials">AD</h2>
              <p className="merchants-name">Adisa Debo...</p>
            </div>
            <div className="merchant-info">
              <h2 className="initials">AD</h2>
              <p className="merchants-name">Adisa Debo...</p>
            </div>
            <div className="merchant-info">
              <h2 className="initials">AD</h2>
              <p className="merchants-name">Adisa Debo...</p>
            </div>
        </div>
        <a className="see-all">See all</a>
    </div>
  )
}

export default MerchantsCard