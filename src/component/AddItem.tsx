import { FaPlus } from "react-icons/fa";
export default function Additem() {
    return <div className="bg-slate-50 h-80 sm:h-100  w-full flex items-center justify-center ">
        <div className="flex flex-col items-center border-spacing-2 border-gray-400 bg-white h-[80%] w-[80%] sm:h-[70%] sm:justify-start">
            <div className="flex w-full sm:ml-4 justify-center sm:justify-start mt-5 mb-5 items-center gap-3">
                <div className="bg-cyan-600 h-6 w-6 flex rounded-full  items-center justify-center" ><FaPlus className="text-gray-300"/></div>
               <span className="text-lg font-semibold">Add Your own</span></div>
            <div className="w-[80%]">Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page</div>
            <button className="border text-center w-[80%] sm:w-20 border-gray-400 mt-5 hover:text-gray-300 hover:bg-gray-700 rounded-lg p-1">Add new</button>
        </div>
    </div>
}