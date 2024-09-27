import React from 'react'

const Borrow = () => {
  return (
    <div className='flex justify-center al'>
      <div className='w-[312px] text-white border'>
        <h2>Set Minimum Balance Requirement</h2>
        <p className='p-[10px]'>Total fiat balance</p>
        <h1 className='font-bold'>$20,000.00</h1>
        <div className='flex'>
          <p>Min Amount:</p>
          <input type="text" className='border-collapse' />
        </div>
        <hr />
        <button>Borrow </button>
      </div>
    </div>
  )
}

export default Borrow