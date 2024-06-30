import { IoSearch } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import { FaBookmark } from "react-icons/fa";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { FaCompass } from "react-icons/fa";
import { RiShieldStarFill } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa6";
import { useState } from "react";
export default function Navbar() {
    const [state, setState] = useState(false);
    return <div className=" h-20 w-full flex items-center justify-center sticky z-[100]  inset-x-0 top-0  border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
        <div  className="flex justify-between items-center w-[95%]">
        <div className="flex w-[70%]  items-center justify-center gap-2  sm:w-[50%]">
            <div className="border-[3px] h-10 w-10 flex justify-center items-center border-purple-800"><span className="text-2xl font-semibold italic text-cyan-600">h</span></div>
            <div className=" flex flex-col">
                <div className="italic text-xl font-bold">
                    <span className="text-purple-800">hobby</span><span className="text-cyan-600">cue</span>
                </div>
                <div className="text-gray-500 -mt-1 text-sm">
                    Your hobby, Your community
                </div>
            </div>
            <div className="hidden sm:block w-[50%]">
            <div className="w-full  flex items-center justify-center">
                <input placeholder="Search here..." className="w-[70%] p-2 rounded-tl-lg rounded-bl-lg outline-none bg-gray-200" />
               <div className="w-[20%] p-2  flex items-center justify-center text-2xl font-bold active:bg-purple-950 bg-purple-700 rounded-tr-lg rounded-br-lg  text-white"> <IoSearch  className=""/></div>
            </div>
            </div>
        </div>
        <div className="flex text-3xl sm:hidden text-purple-800 gap-5">
            <div><IoSearch /></div>
            <div><FaBell /></div>
            <div><LuMenu /></div>
        </div>
        <div className="hidden md:block text-purple-800 text-xl w-[50%]  ">
           <div className="flex items-center gap-2 justify-evenly">
           <div onClick={()=>{setState(!state)}} className="flex items-center gap-1"><FaCompass /> <span className="text-black cursor-pointer">Explore </span><FaChevronDown className="text-gray-500" /></div>
           {
            state==true?<div className="absolute bg-gray-200 top-20 right-[37%] flex flex-col items-start justify-start gap-2 border-2 border-gray-400 pr-2 pl-2">
            <div className="w-full border-b-2 border-gray-400 border-spacing-2">People-Community</div>
            <div className="w-full border-b-2 border-gray-400 border-spacing-2">Place-venues</div>
            <div className="w-full border-b-2 border-gray-400 border-spacing-2">Programs-Events</div>
            <div className="w-full border-b-2 border-gray-400 border-spacing-2">Products-Store</div>
            <div>Blogs</div>
          </div> :null
           }
            <div className="flex items-center gap-1"><RiShieldStarFill/> <span className="text-black">hobbies</span> <FaChevronDown className="text-gray-500" /></div>
            <div><FaBookmark className="active:text-purple-400"/></div>
            <div><FaBell className="active:text-purple-400"/></div>
            <div><PiShoppingCartSimpleFill className="active:text-purple-400"/></div>
            <button className="border-2 pl-2 pr-2 pt-1 pb-1 hover:bg-purple-800 hover:text-white rounded-lg">Sign in</button>
           </div>

        </div>
        </div>
    </div>
}