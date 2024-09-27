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
    <>
      <div className="border border-[#584BFF] rounded-xl w-[80%] h-[100px] flex flex-col justify-between p-4 mt-4 mx-4">
        <div className="flex justify-between *:  font-bold text-white">
          <p>Recent transaction</p>
          <p className="">View all transactions</p>
        </div>

        <div className="flex flex-row justify-evenly text-white  align-left ">
          <p className="flex-1 text-left">Team</p>
          <p className="flex-1 text-left">Transaction type</p>
          <p className="flex-1 text-left">Price</p>
          <p className="flex-1 text-left">24hrs Changes</p>
        </div>
        <hr />
        <Txs/>
       
      </div>
    </>
  );
};

export default Lender;
