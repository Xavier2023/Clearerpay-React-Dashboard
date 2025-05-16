import React from 'react'
import { FaArrowDown, FaArrowUp, FaPlus } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'
import './BalanceCard.css'
import { GoArrowSwitch } from 'react-icons/go'
import { BsThreeDotsVertical } from 'react-icons/bs'

const BalanceCard = () => {
  return (
    <div className='balance-container'>
        <div className="acc-balance">
            <h3 className='currency'>NGN <span>. Naira</span> <IoIosArrowDown /></h3>
            <a href="#" className="deposite"> <FaPlus />Deposite</a>
        </div>
        <h2 className="amount"> <span>&#8358;</span> 34,645,223</h2>
        <div className="action-btn">
            <button className="send"><FaArrowUp /> Send</button>
            <button className="receive"><FaArrowDown /> Receive</button>
            <button className="swap"><GoArrowSwitch /> Swap</button>
            <button className="more"><BsThreeDotsVertical /></button>
        </div>
    </div>
  )
}

export default BalanceCard