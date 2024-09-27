import MySvgIcon from "../assets/svg/logo.svg";
import Line from "../assets/svg/Line.svg";
import Metamask from "../assets/svg/metamask.svg";

const Navbar = () => {
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

        <div className="w-48 h-11 flex flex-row items-center justify-center rounded-3xl border-[#7AAFFF] border-2">
          <img src={Metamask} alt="metamask log" className="w-6 h-6"/>
          <h2 className="text-sm ml-2 text-white">Connect Wallet</h2>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
