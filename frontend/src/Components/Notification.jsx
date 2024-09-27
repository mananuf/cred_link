import bell from "../assets/Bell .svg";

const Notification = () => {
  return (
    <div>
        <button className="flex items-center gap-2 text-white rounded-3xl border border-[#584BFF] px-3 py-1">
            <img src={bell} alt="bell" /> 15
          </button>

    </div>
  )
}

export default Notification