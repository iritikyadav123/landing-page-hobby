import { ImQuotesLeft } from "react-icons/im";
import { BsCaretRightFill } from "react-icons/bs";
import { BsFillMicFill } from "react-icons/bs";
export default function Testimonals() {
    return (
        <div className="flex items-center justify-center w-full pb-10 ">
           <div className="bg-purple-100/30 w-[85%] ">
            <div className="flex items-center justify-center mt-5 mb-5 gap-2">
                <ImQuotesLeft className="bg-purple-800 text-gray-100 h-8 w-8 rounded-full p-1"/><span className="text-xl font-semibold">Tesimnonils</span>
            </div>
            <div className="ml-4 mr-4">In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.</div>
                    <div  className="mt-5 sm:flex items-center justify-evenly w-full mb-5">
                        <div className="flex items-center gap-2 mb-5 ml-4 sm:hidden ">
                            <img src="pic.png" className="h-12 rounded-full object-cover" />
                            <div>
                                <div className="text-purple-800 text-xl font-semibold">Shubha Nagarajan</div>
                                <div className="text-cyan-500">Classical dancer</div>
                            </div>
                        </div>
                        <div className="flex bg-purple-800/25 pt-2 pb-2 rounded-lg ml-4 mr-4 items-center justify-evenly sm:w-[70%]"> 
                            <div className="bg-purple-100 h-5 w-5
                            flex items-center
                            justify-center rounded-full">
                            <BsCaretRightFill />
                            </div>
                            <div className="w-[50%] flex items-center">
                                <div className="bg-purple-900 h-[10px] w-[10px] rounded-full"></div>
                                <div className="bg-purple-100 h-[2px] w-[80%]"></div>
                                 <span className="ml-2">0.00</span>
                            </div>
                            <div className="flex ">
                            <BsFillMicFill className="absolute text-white mt-4 text-xl"/>
                            <img src="/pic.png" className="h-10 " />
                            </div>
                        </div>
                            <div className="hidden sm:block">
                            <div className="flex items-center gap-2 mb-5 ml-4 ">
                            <img src="pic.png" className="h-12 rounded-full object-cover" />
                            <div>
                                <div className="text-purple-800 text-xl font-semibold">Shubha Nagarajan</div>
                                <div className="text-cyan-500">Classical dancer</div>
                            </div>
                        </div>
                            </div>

                    </div>
           </div>
        </div>
    )
}