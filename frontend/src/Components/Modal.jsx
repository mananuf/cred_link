import { useState } from "react";
import vector2 from "../assets/svg/Ellipse.svg"
import { ethers } from "ethers";

const contractAddress = "0x429f2336e332e8c4227D965f921E1A3E827b1D9e";
const tokenAddress = "0x233A66dB39b5BA93993383b2B4E08E6FA81be8AB";

const ProvideLoanModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState("");

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Loan Amount:", amount);
    closeModal(); // Close the modal after submitting
  };
  async function deposit (amount) {
    const {ethereum} = window;
    if (!ethereum) {
      // connect wallet
    }

    //request account access
    const accounts = await ethereum.request({ method: 'eth_requestAccounts'});
    const userAddress = accounts[0];

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();

    const credlinkContract = new ethers.Contract(contractAddress, credLinkAbi, signer);
    const tokenContract = new ethers.Contract(tokenAddress, tokenAbi, signer);


  }

  return (
    <div>
      {/* Button to Open Modal */}
      <button
        className="rounded-3xl bg-[#584BFF] text-white flex items-center gap-2 px-3 py-2"
        onClick={openModal}
      >
        Provide Loan <img src={vector2} alt="Limit Icon 2" />
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg w-[400px] p-6">
            <h2 className="text-xl font-semibold mb-4">Provide Loan</h2>
            <form onSubmit={handleSubmit}>
              {/* Input Field */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Loan Amount
                </label>
                <input
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                  placeholder="Enter amount"
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#584BFF] text-white px-4 py-2 rounded-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProvideLoanModal;
