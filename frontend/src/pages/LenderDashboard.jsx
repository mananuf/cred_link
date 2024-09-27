import Notification from "../Components/Notification";
import vector1 from "../assets/Vector.svg";
// import vector2 from "../assets/Vector (1).svg";
import vector3 from "../assets/Vector (2).svg";
import ActiveLoan from "../Components/ActiveLoan";
import notice from "../assets/notice.svg";
import TransactionB from "../Components/TransactionB";
import Lender from "../Components/Lender";
import ProvideLoanModal from "../Components/Modal";

const LenderDashboard = () => {
  return (
<<<<<<< HEAD
    <div>
      <section className="mx-10 mt-10">
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
                 
                    <ProvideLoanModal/>
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
=======
    <div className="md:p-4">
  <section className="mt-10">
    {/* Header Section */}
    <div className="flex items-center justify-between">
      <p className="text-white text-2xl md:text-3xl">Welcome Back!</p>
      <Notification />
>>>>>>> 53c94acfc8e5c8be1b339ea755df08ba06732731
    </div>

    {/* Main Content Section */}
    <div className="flex flex-col lg:flex-row gap-6 mt-6">

      {/* Left Side - Loan Overview */}
      <div className="border border-[#584BFF] rounded-xl w-full lg:w-[65%] p-4">  {/* Adjusted width */}
        
        {/* Loan Buttons */}
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <button className="flex border border-[#584BFF] rounded-3xl gap-2 px-4 py-2">
            <span className="text-[#584BFF]">Active Loans:</span>
            <p className="text-white">70%</p>
          </button>
          <button className="flex border border-[#584BFF] rounded-3xl gap-2 px-4 py-2">
            <span className="text-[#584BFF]">Loans Repayment:</span>
            <p className="text-white">90%</p>
          </button>
          <button className="flex border border-[#584BFF] rounded-3xl gap-2 px-4 py-2">
            <span className="text-[#584BFF]">Total Loans Disbursed:</span>
            <p className="text-white">$200,000</p>
          </button>
          <button className="flex items-center gap-3 bg-[#584BFF] text-white px-4 py-2 rounded-3xl">
            Request
            <span className="bg-white rounded-full p-2">
              <img src={notice} alt="notification" />
            </span>
          </button>
        </div>

        {/* Total Balance and Buttons */}
        <div className="flex flex-col lg:flex-row justify-between items-center mt-6">
          <div className="text-center lg:text-left">
            <p className="text-white">Total fiat balance</p>
            <p className="text-white text-4xl">$20,000.00</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-4 lg:mt-0">
            <button className="bg-[#584BFF] text-white flex items-center gap-2 px-4 py-2 rounded-3xl">
              Define Loan Limit <img src={vector1} alt="Limit Icon" />
            </button>
            <ProvideLoanModal />
            <button className="bg-[#584BFF] text-white flex items-center gap-2 px-4 py-2 rounded-3xl">
              Withdraw <img src={vector3} alt="Withdraw Icon" />
            </button>
          </div>
        </div>

        {/* Transactions Section */}
        <div className="flex flex-col sm:flex-row gap-6 mt-6">
          <TransactionB />
          <TransactionB />
          <TransactionB />
          <button className="border-2 border-dotted border-[#584BFF] text-white px-6 py-2 mt-4 sm:mt-0 rounded-xl">
            +Add Currency
          </button>
        </div>
      </div>

      {/* Right Side - Active Loans */}
      <div className="border border-[#584BFF] rounded-xl w-full lg:w-[35%] p-4">  {/* Adjusted width */}
        <div className="flex justify-between text-white">
          <p>Active Loans</p>
          <p>See All</p>
        </div>
        <div className="flex justify-between text-white mt-2">
          <p>Address</p>
          <p>Amount</p>
          <p>Due Date</p>
        </div>
        <hr className="text-white mt-4" />
        <ActiveLoan />
      </div>
    </div>

    <Lender />
  </section>
</div>

  );
};

export default LenderDashboard;
