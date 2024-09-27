import BTC from "../assets/Btc.png";
import Txs from "./Txs";

const Lender = () => {
  const imgStyle = {
    width: "40px",
    height: "40px",
    gap: "8px",
    opacity: "0px",
  };
  return (
<<<<<<< HEAD
    <>
      <div className="border border-[#584BFF] rounded-xl w-[76%] h-[110px] flex flex-col justify-between p-4 mt-4 mx-1">
        <div className="flex justify-between *:  font-bold text-white">
=======
    <div className="md:ml-12 md:mt-2">
       <div className="w-[80%] flex justify-between font-bold text-white mt-4 mx-6">
>>>>>>> 53c94acfc8e5c8be1b339ea755df08ba06732731
          <p>Recent transaction</p>
          <p className="">View all transactions</p>
        </div>
      <div className="w-[80%] border border-[#584BFF] rounded-xl  h-[100px] flex flex-col justify-between p-4 mt-4 mx-4">
        <div className="flex flex-row justify-evenly text-white  align-left ">
          <p className="flex-1 text-left">Team</p>
          <p className="flex-1 text-left">Transaction type</p>
          <p className="flex-1 text-left">Price</p>
          <p className="flex-1 text-left">24hrs Changes</p>
        </div>
        <hr />
        <Txs/>
       
      </div>
    </div>
  );
};

export default Lender;
