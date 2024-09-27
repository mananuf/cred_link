import MySvgIcon from "../assets/svg/logo.svg";
import Line from "../assets/svg/Line.svg";
import Metamask from "../assets/svg/metamask.svg";
import { ethers } from "ethers";
import { useNavigate } from 'react-router';
import { toast } from 'react-dom';


const Navbar = () => {
  const navigate = useNavigate();
  async function connectWallet () {
    if(window.ethereum){
      try {
        await window.ethereum.request({method: "eth_requestAccounts"});
        navigate('/LenderDAshboard');
        return new ethers.providers.Web3Provider(window.ethereum);

      } catch (err) {
        console.log("errooo:" + err);
      }
      
    }else{
      toast.error("error connecting Wallet")
    }
  }
   
  
  return (
    <div className="w-[100%]  flex flex-row justify-center align-middle pt-14">
      <div className="w-[80%]   flex flex-row justify-between align-middle items-center ">
        <div className="w-48 h-8">
          <img src={MySvgIcon} alt="logo image" className="w-full h-full" />
        </div>
        <div>
          <img src={Line} alt="logo image" />
        </div>
        {/*metamask connect botton  */}

          <button className="w-48 h-11 flex flex-row items-center justify-center rounded-3xl border-[#7AAFFF] border-2">
            <img src={Metamask} alt="metamask log" className="w-6 h-6" />
            <h2 onClick={connectWallet} className="text-sm ml-2 text-white">Connect Wallet</h2>
          </button>
      </div>
    </div>
  );
};

export default Navbar;
