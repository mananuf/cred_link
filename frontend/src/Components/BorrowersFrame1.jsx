import Transactions from "./Transactions";

const BorrowersFrame1 = () => {
  return (
    <div className="w-[100%] flex justify-center mt-20">
      <div className="flex flex-row justify-between w-[90%]">
        {/* first frame */}
        <div className="w-[400px] h-[405px] border border-white flex flex-col  align-middle items-center rounded-2xl">
          
          <div className="w-80 h-11 flex flex-row justify-center align-middle items-center border border-white rounded-3xl mt-12">
            <p className='text-white'>Loan Repayment: 90% </p>
          </div>
          <div className="w-80 ">
            <div className='w-80 h-32 border-b flex flex-col justify-center align-bottom'>
              <p className='text-xs font-normal text-white mt-6'>Debt</p>
              <h2 className='text-4xl text-white font-bold font-100'>$ 3,000.00</h2>
            </div>
          </div>
        </div>

        





        {/* second frame */}
        <div className="w-[400px] h-[405px] border border-white p-5 rounded-2xl">
          <div className="w-80 h-11">
            <p className='text-white mb-6'>Available for loan</p>
            <Transactions/>
            <Transactions/>
            <Transactions/>
            <Transactions/>
          </div>
        </div>


        <div className="w-[400px] h-[405px] border border-white flex flex-col justify-between align-middle items-center rounded-2xl">
          <div className="w-80 h-11">
            <p>Loan Repayment: 90% </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BorrowersFrame1
