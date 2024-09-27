import Transactions from "./Transactions";
import metamask from '../assets/svg/metamask.svg'
import TransactionB from "./TransactionB";

const BorrowersFrame1 = () => {
  return (
    <div className="w-[100%] flex justify-center mt-16">
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
           
          <div className="mt-4">
             <TransactionB/>
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

{/* third fram */}
        <div className="relative w-[400px] h-[405px] border border-white  rounded-2xl">
          <div className="w-80 mt-2 ml-10 ">
            <div className=" h-32 text-white flex flex-col items-center align-middle">
              <p className="text-sm mb-2 font-normal leading-4">Quick Loans</p>
              <div className="w-24 h-24 border rounded-full flex justify-center">
                <img src={metamask} alt="" className="w-[80%]" />
              </div>
              <p>0x12r4598j...6HJ9</p>
            </div>
            
            <div className="border-b border-[#584BFF] pb-3 mt-6 text-white">
              Amount :
            </div>

            <div className="w-80 border-black">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BorrowersFrame1
