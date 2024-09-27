import Notification from "../Components/Notification";
import vector1 from "../assets/Vector.svg";
import vector2 from "../assets/Vector (1).svg";
import vector3 from "../assets/Vector (2).svg";
import Transactions from "../Components/Transactions";
import ActiveLoan from "../Components/ActiveLoan";
import notice from "../assets/notice.svg";
import TransactionB from "../Components/TransactionB";
import Lender from "../Components/Lender";

const LenderDashboard = () => {
  return (
    <div>
      <section className="mx-4 mt-10">
        <div className="flex items-center justify-between">
          <p className="text-white text-3xl">Welcome Back!</p>
          <Notification />
        </div>

        <div className="flex gap-3 items-center mt-6">
          <div className="border border-[#584BFF] rounded-xl w-[836px] h-[321px] flex flex-col justify-between p-4">
            <div className="flex items-start space-x-4">
              <button className="flex border border-[#584BFF] rounded-3xl gap-2 px-3 py-2">
                <span className="text-[#584BFF]">Active Loans:</span>
                <p className="text-white">70%</p>
              </button>
              <button className="flex border border-[#584BFF] rounded-3xl gap-2 px-3 py-2">
                <span className="text-[#584BFF]">Loans Repayment:</span>
                <p className="text-white">90%</p>
              </button>
              <button className="flex border border-[#584BFF] rounded-3xl gap-2 px-3 py-2">
                <span className="text-[#584BFF]">Total Loans Disbursed:</span>
                <p className="text-white">$200,000</p>
              </button>
              <button className="rounded-3xl flex gap-3 mt-3 items-center bg-[#584BFF] text-white px-4 py-2">
                Request
               <span className="bg-white rounded-full p-2"> <img src={notice} alt="notification"/></span> 
              </button>
            </div>

            {/* Total Fiat Balance and Define Loan Limit buttons at the bottom */}

            <div className="flex justify-center items-center h-[400px]">
              <div className="flex justify-between items-center mt-4 w-full max-w-[800px]">
                <div>
                  <p className="text-white">Total fiat balance</p>
                  <p className="w-[212px] text-white text-4xl">$20,000.00</p>
                </div>
                <div className="flex space-x-2">
                  <button className="rounded-3xl bg-[#584BFF] text-white flex items-center gap-2 px-3 py-2">
                    Define Loan Limit <img src={vector1} alt="Limit Icon 1" />
                  </button>
                  <button className="rounded-3xl bg-[#584BFF] text-white flex items-center gap-2 px-3 py-2">
                    Deposit <img src={vector2} alt="Limit Icon 2" />
                  </button>
                  <button className="rounded-3xl bg-[#584BFF] text-white flex items-center gap-2 px-3 py-2">
                    Withdraw <img src={vector3} alt="Limit Icon 3" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex gap-8">
            <TransactionB/>
            <TransactionB/>
            <TransactionB/>
            <button className="border-2 border-dotted text-white border-[#584BFF] px-8  mt-4 rounded-xl">+Add Currency</button>
            </div>
          </div>

          {/* Second Div */}
          <div className="border border-[#584BFF] rounded-xl w-[400px] h-[323px]">
            <div className="flex justify-between items-center m-4 text-white ">
              <p>Active Loans</p>
              <p>See All</p>
            </div>
            <div className="flex justify-between items-center text-white mx-2">
              <p>Address</p>
              <p>Amount</p>
              <p>Due Date</p>
            </div>
            <hr className="text-white mt-4 mx-3" />
            <ActiveLoan/>
          </div>
        </div>
          <Lender/>
      </section>
    </div>
  );
};

export default LenderDashboard;
