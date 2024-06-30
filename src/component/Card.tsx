import { BsFillPeopleFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { BsFileEarmarkCheckFill } from "react-icons/bs";

export default function Card() {
    return (
        <div className="mt-10">
            <div className="grid grid-cols-12 ml-4 mr-4 ">
                <div className="col-start-2 sm:col-start-1 md:col-start-3 xl:col-start-4 border-2 border-purple-700 rounded-lg h-60 w-80 mb-5 ">
                   <div className="flex items-center gap-2 mt-4 ml-2 justify-center hover:text-white">
                   <BsFillPeopleFill className="text-xl h-8 w-8 text-purple-800 "/>
                   <span className="text-xl font-semibold">People</span>
                   </div>
                <div className="mt-7 pl-3">
                An Individual or Organization.  Teacher, Coach, Professional or Online Seller.  Company, Business or Association.
                </div>
                <div className="border-2 border-purple-800 ml-5 mr-5 text-center mt-10 rounded-lg text-purple-800 hover:bg-purple-700 hover:text-white  ">Connect</div>
                </div>

                <div className="col-start-2 sm:col-start-7 md:col-start-8 lg:col-start-7 border-2 border-green-700 rounded-lg h-60 w-80 mb-5">
                   <div className="flex items-center gap-2 mt-4 ml-2 justify-center">
                   <FaLocationDot className="text-xl text-green-700 h-8 w-8  "/>
                   <span className="text-xl font-semibold">Place</span>
                   </div>
                <div className="mt-7 pl-3">
                Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.
                </div>
                <div className="border-2 border-green-800 ml-5 mr-5 text-center mt-5 rounded-lg text-green-800 hover:bg-green-700 hover:text-white ">Got it</div>
                </div>


                <div className="col-start-2 sm:col-start-1 md:col-start-3 xl:col-start-4 border-2 border-red-700 rounded-lg h-60 w-80 mb-5">
                   <div className="flex items-center gap-2 mt-4 ml-2 justify-center">
                   <PiShoppingCartSimpleFill className="text-xl h-8 w-8 text-red-700"/>
                   <span className="text-xl font-semibold">Product</span>
                   </div>
                <div className="mt-7 pl-3">
                Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.
                </div>
                <div className="border-2 border-red-800 ml-5 mr-5 text-center mt-5 rounded-lg text-red-800 hover:bg-red-700 hover:text-white ">Meet up</div>
                </div>


                <div className="col-start-2 sm:col-start-7 md:col-start-8 lg:col-start-7 border-2 border-blue-700 rounded-lg h-60 w-80">
                   <div className="flex items-center gap-2 mt-4 ml-2 justify-center">
                   <BsFileEarmarkCheckFill className="text-xl h-8 w-8 "/>
                   <span className="text-xl font-semibold">Programe</span>
                   </div>
                <div className="mt-7 pl-3">
                Find events, meetups and workshops related to your hobby.  Register or buy tickets online.
                </div>
                <div className="border-2 border-blue-800 ml-5 mr-5 text-center mt-10 rounded-lg text-blue-800 hover:bg-blue-700 hover:text-white ">Connect</div>
                </div>
            </div>
        </div>
    )
}