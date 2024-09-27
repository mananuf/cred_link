
import React from 'react'
import CoinIcon from "../assets/svg/Ellipse.svg"
const Transactions = () => {
  return (
    <div className='flex flex-row align-middle justify-between text-white mb-5'>
          <p className='font-semibold text-sm'>0x12r4598j... 6HJ9</p>
          <div>
              <img src={CoinIcon} alt="" />
          </div>
          <div className='font-bold text-sm'>$132</div>
          <div className='font-normal text-sm'>1.5005</div>

import btc from "../assets/btc.svg"

const Transactions = () => {
  return (
    <div>
         <div>
              <button className="flex text-white items-center justify-between gap-6 rounded-2xl border border-[#584BFF] px-4 py-2">
                <p className="flex flex-col gap-2"><img src={btc} alt="btc" />BTC</p>
                <p className="flex flex-col gap-2"><span>0.3333</span>$10,9500</p>
              </button>
            </div>

    </div>
  )
}


export default Transactions


