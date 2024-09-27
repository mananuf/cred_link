import React from 'react';
import BTC from '../assets/Btc.png';
import ETH from '../assets/Eth.png';
import LTC from '../assets/Lsk.png'

const LenderDashboard = () => {

  const imgStyle = {
    width: '40px',
    height: '40px',
    gap: '8px',
    opacity: '0px',
  }
  return (
    <>
      <div className='flex pb-[10px] ml-[10px] w-[1262px] font-bold text-white'>
        <p>Recent transaction</p>
        <p className='ml-[65%]'>View all transactions</p>
      </div>
      <div className='border-[2px] rounded-[10px] ml-[10px] text-white'>
        <div className='flex flex flex-row justify-between w-[1262px] align-left ml-[20px] p-[10px]'>
          <p className='flex-1 text-left'>Team</p>
          <p className='flex-1 text-left'>Transaction type</p>
          <p className='flex-1 text-left'>Price</p>
          <p className='flex-1 text-left'>24hrs Changes</p>
        </div>
        <hr />
        <div className='text-white'>
          <div className='flex flex-row justify-between w-[1262px] align-left'>
            <img src={BTC} style={imgStyle}/>
            <div className='flex flex-row justify-between w-[1262px] align-left ml-[20px]'>
              <p className='flex-1 text-left'>BTC Bitcoin</p>
              <p className='flex-1 text-left'>Loan</p>
              <p className='flex-1 text-left'>$200</p>
              <p className='flex-1 text-left'>44e25bc0ed840f97039of...eaf |</p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default LenderDashboard