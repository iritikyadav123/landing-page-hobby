import { useState } from "react";
import Navbar from "./component/Navbar";
import { IoIosLock } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";
import Card from "./component/Card";
import Additem from "./component/AddItem";
import Testimonals from "./component/Testimonals";
import { FaChevronUp } from "react-icons/fa6";
import Footer from "./component/Footer";

export default function App() {
  const [mark, setMark] = useState(false);
  const [sign, setSign] = useState("sign");
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  let signCss = "border-gray-300";
  let joinCss = "border-gray-300";
   sign == "sign" ? signCss = "text-gray-500 border-gray-500" : joinCss = "text-gray-500 border-gray-500";
  return <div className="">
     <Navbar />
     <div className="bg-purple-200/25 sm:flex ">
        <div className="flex sm:w-[55%] flex-col items-center sm:mt-[8%]  justify-center" >
           <div className="text-2xl font-semibold sm:text-3xl text-center mt-5">Explore your <span className="text-cyan-500">hobby</span> or <span className="text-purple-800">passion</span> </div>
           <div className="w-[75%] mt-5 text-gray-500">Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform.</div>
           <span className="hidden sm:block w-[75%] text-gray-500">Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
           </span >
           <div className="hidden sm:block w-[75%] text-gray-500 mt-5">
           If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.
           </div>
           <div className="w-[80%] hidden sm:block object-cover mt-[12%]">
         <img src="/Group 27.png" className="w-full object-cover"/>
       </div>
           
        </div>
        <div className="flex flex-col sm:w-[35%] sm:mt-[8%]  items-center gap-3 mt-5">
         <div className="w-[40%] flex items-center justify-between text-xl font-semibold text-gray-300">
             <span onClick={()=>{setSign('sign')}} className={`border-b-4 cursor-pointer  pb-1 ${signCss}`}>Signin</span>
             <span onClick={()=>{setSign('join')}} className={`border-b-4 cursor-pointer pb-1 ${joinCss}`}>Join in</span>
         </div>

         <div className=" w-[80%] rounded-lg">

         <div className="hidden sm:block w-full mt-4 ">
        
         <div className=" mb-4 border-2 border-gray-500 w-[100%] p-1 font-medium rounded-lg flex items-center gap-8 pl-4 cursor-pointer">
         <img src="/google.png" className="h-5" />
           Continuen with Google
         </div>
         <div className=" mb-4 border-2 border-gray-500 w-[100%] p-1 font-medium rounded-lg flex items-center gap-8 pl-4 cursor-pointer"> <img src="/fb.png" className="h-5" />
           Continuen with Facebook
         </div>
         <div className="mb-4 flex items-center gap-2  w-[100%] justify-center" >
          <div  className="h-[2px] bg-gray-500 w-[30%]"></div>
            Or connect with
            <div className="h-[2px] bg-gray-500 w-[30%]"></div>
         </div>

         </div>
          <input placeholder="Email"  className="w-full p-2 rounded-lg"/>
         </div>
         <div className=" w-[80%] rounded-lg">
          <input 
          type="password" placeholder="Password"  className="w-full p-2 rounded-lg"/>
         </div>
         {sign == "sign" ? <div className="w-[80%]">
        <div className=" w-full text-gray-800 flex items-center justify-between">
           <span className="flex items-center gap-2"><button onClick={()=>{setMark(!mark)}} className="border-2 h-5 w-5 border-gray-500">{mark == true ?<IoMdCheckmark /> : null}</button> Remember me</span>
           <span className="flex items-center gap-2"><IoIosLock className="text-gray-500"/>Forget Password?</span>
         </div>
        </div> :  <div className=" text-gray-500 w-[80%] ">
           <div className="text-end font-medium">Password strength</div>
           <div className="text-[13px] w-[100%]  mt-2">By countinue you agree to our <span className="text-gray-700">Terms of Service </span>and <span className="text-gray-700">Privacy Policy</span></div>
        </div>}
        <div className="sm:hidden bg-purple-800 text-center w-[80%] text-white font-medium p-1 rounded-lg cursor-pointer active:bg-purple-700 active:text-gray-400">Continue</div>
        <div className="hidden sm:block bg-purple-800 text-center w-[80%] text-white font-medium p-1 rounded-lg cursor-pointer active:bg-purple-700 active:text-gray-400">Agree & Continue</div>
         <div className="sm:hidden flex items-center gap-2  w-[80%] justify-center" >
          <div  className="h-[2px] bg-gray-500 w-[30%]"></div>
            Or connect with
            <div className="h-[2px] bg-gray-500 w-[30%]"></div>
         </div>
        
         <div className="sm:hidden border-2 border-gray-500 w-[80%] p-1 font-medium rounded-lg flex items-center gap-8 pl-4 cursor-pointer">
         <img src="/google.png" className="h-5" />
           Continuen with Google
         </div>
         <div className="sm:hidden border-2 border-gray-500 w-[80%] p-1 font-medium rounded-lg flex items-center gap-8 pl-4 cursor-pointer"> <img src="/fb.png" className="h-5" />
           Continuen with Facebook
         </div>
         
     </div>
       <div className="w-[100%] sm:hidden object-cover mt-10">
         <img src="/Group 27.png" className="w-full object-cover"/>
       </div>
       
         
     </div>
     <FaChevronUp
      className="fixed z-[200] inset-x-0 bottom-10 left-4 bg-gray-200 h-6 w-6 p-1 active:text-white active:bg-gray-800 scroll-to-top transition duration-300 rounded-full"
      onClick={handleScrollToTop}
    />
     <Card />
     <Additem />
     <Testimonals />
     <div className="bg-slate-100 p-2 rounded-lg">
        <div className="flex flex-col items-start gap-10 pl-4   mt-10 mb-10 ml-5 mr-5 bg-slate-100 rounded-lg">
            <div className="text-2xl font-semibold mt-5 ">Your <span className="text-purple-800">hobby</span>, Your <span className="text-cyan-600">Community...</span></div>
            <button className="text-white bg-purple-800 p-2  rounded-lg">Get started</button>
            <div className="w-full">
              <img src="/Group 99.png" className="w-full object-cover" />
            </div>
          </div>
     </div>
     <Footer />
     <div className="w-full bg-purple-800/10 mt-10 h-14 flex items-center justify-center font-semibold">© Purple Cues Private Limited</div>
  </div>
}