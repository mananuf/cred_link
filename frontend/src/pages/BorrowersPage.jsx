import BorrowersFrame1 from "../Components/BorrowersFrame1"
import Notification from "../Components/Notification"
const BorrowersPage = () => {
  return (
    <div className="text-">
          <div className="flex flex-row justify-between w-[90%] ml-14 mt-6">
            <p className="text-3xl text-white font-bold">Welcome back !</p>
            <Notification/>
          </div>
          <BorrowersFrame1/>
    </div>
  )
}

export default BorrowersPage
