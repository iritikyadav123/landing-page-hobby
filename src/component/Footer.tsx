import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { BsPinterest } from "react-icons/bs";
import { IoLogoGoogleplus } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { MdMail } from "react-icons/md";
export default function Footer() {
    return <div className="flex flex-col sm:flex-row sm:justify-evenly ml-5 gap-8 mt-10">
        <div className=" flex flex-col gap-5 text-gray-500">
            <div className="text-xl font-semibold">Hobbycue</div>
            <div>About Us</div>
            <div>Work with Us</div>
            <div>FAQ</div>
            <div>Contact Us</div>
        </div>
        <div className=" flex flex-col gap-5 text-gray-500">
            <div className="text-xl font-semibold">How do i</div>
            <div>Sign up</div>
            <div>Add a Listing</div>
            <div>Claim Listing</div>
            <div>Post a Query</div>
            <div>Add a Blog Post</div>
            <div>Other Queries</div>
        </div>
        <div className=" flex flex-col gap-5 text-gray-500">
            <div className="text-xl font-semibold">Quick Links</div>
            <div>Listings</div>
            <div>Blog Posts</div>
            <div>Shop / Store</div>
            <div>Comunity</div>
        </div>
        <div className="flex flex-col gap-4">
             <div className="text-xl font-semibold">Social Media</div>
             <div className="flex items-center gap-8 text-4xl text-gray-500 ">
                <FaFacebookF className="bg-gray-200 p-1 rounded-full"/>
                <BsTwitter className="bg-gray-200 p-1 rounded-full"/>
                <FaInstagram className="bg-gray-200 p-1 rounded-full"/>
                <BsPinterest className="bg-gray-200 p-1 rounded-full"/>
                <IoLogoGoogleplus className="bg-gray-200 p-1 rounded-full"/>
                <FaYoutube className="bg-gray-200 p-1 rounded-full"/>
                <MdMail className="bg-gray-200 p-1 rounded-full"/>
             </div>
             <div className="text-xl font-semibold">Invite Friends</div>
            
            <div className="w-full  flex items-center justify-center">
                <input placeholder="Email id" className="w-[70%] p-2 rounded-tl-lg rounded-bl-lg outline-none bg-gray-200 border-purple-800 border-2" />
               <div className="w-[20%] p-1.5  flex items-center justify-center text-2xl font-bold active:bg-purple-950 bg-purple-800 rounded-tr-lg rounded-br-lg  text-white">invite</div>
            </div>
           
        </div>
    </div>
}