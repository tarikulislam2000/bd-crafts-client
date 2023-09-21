// import { useEffect, useState } from "react";
import { BsCalendarCheckFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { RiLogoutCircleRLine } from "react-icons/ri";

import {   FaShoppingBasket } from "react-icons/fa";

import { FaGear, FaShopware,  FaVideo } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import "./LeftSideBar.css";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import toast from "react-hot-toast";
const LeftSideBar = () => {
const { logOut} = useContext(AuthContext)
const navigate = useNavigate()
  return (
    <div className="left lg:overflow-y-auto lg:bg-none p-5 mb-5">
      <div className=" flex flex-col ">
        <div className="bg-slate-200 md:bg-[#186DBE0F]  rounded-lg">
          <div className="grid mb-5 grid-cols-2 gap-3 py-3 px-2 m-3 md:m-0">
            {/* bookmark card */}
           
            {/* Connection Requests */}
            <div className="bg-[#186DBE0F] rounded-lg shadow-md hover:shadow-lg  flex flex-col justify-center items-center p-2 gap-6">
              <Link
                to="/wholeSealerForm"
                className="text-center hover:underline"
              >
                <FaShopware className="text-[#7BB4FF] w-14 h-14 animate-pulse ms-9" />
                Wholesaler Form
              </Link>
            </div>
            {/* Events */}
            <div className="bg-[#186DBE0F] rounded-lg shadow-md hover:shadow-lg  flex flex-col justify-center items-center p-2 gap-2">
              <Link to="/eventPage" className="text-center hover:underline">
                <BsCalendarCheckFill className="text-[#7BB4FF] w-14 h-14 animate-pulse ms-1" />{" "}
                Events
              </Link>
            </div>
            {/* Activity Log */}
            <div className="bg-[#186DBE0F] rounded-lg shadow-md hover:shadow-lg  flex flex-col justify-center items-center p-2 gap-2">
              <Link
                to="/shop/allProduct"
                className="text-center hover:underline"
              >
                <FaShoppingBasket className="text-[#7BB4FF] w-14 h-14 animate-pulse ms-2" />{" "}
                All Shop
              </Link>
            </div>
            {/* All Comments */}
       
            {/* Settings */}
            <div className="bg-[#186DBE0F] rounded-lg shadow-md hover:shadow-lg  flex flex-col justify-center items-center p-2 gap-2">
              <Link
                to="/setting"
                className="text-center justify-center hover:underline"
              >
                {" "}
                <FaGear className="text-[#7BB4FF] w-14 h-14 animate-pulse ms-2" />
                Settings{" "}
              </Link>
            </div>
            {/* Groups */}
      
            <div className="bg-[#186DBE0F] rounded-lg shadow-md hover:shadow-lg  flex flex-col justify-center items-center p-2 gap-2">
              <Link to="selerForm" className="text-center hover:underline">
                <FaShopware className="text-[#7BB4FF] w-14 h-14 animate-pulse ms-4" /> Seller
                Form
              </Link>
            </div>
            <div className="bg-[#186DBE0F] rounded-lg shadow-md hover:shadow-lg  flex flex-col justify-center items-center p-2 gap-2">
              <Link to="/conference" className="text-center hover:underline">
                <FaVideo className="text-[#7BB4FF] w-14 h-14 animate-pulse ms-9" /> Vedio
                Conference
              </Link>
            </div>
            <div className="bg-[#186DBE0F] rounded-lg shadow-md hover:shadow-lg  flex flex-col justify-center items-center p-2 gap-2">
              <Link to="/profile" className="text-center hover:underline">
                <CgProfile className="text-[#7BB4FF] w-14 h-14 animate-pulse ms-4" /> 
              Profile
              </Link>
            </div>
            <div className="bg-[#186DBE0F] rounded-lg shadow-md hover:shadow-lg  flex flex-col justify-center items-center p-2 gap-2">
              <button onClick={() => {
                          logOut();
                          toast.success("logout successful");
                          navigate("/login");
                        }} className="text-center hover:underline px-4  hover:bg-neutral-100 transition font-semibold cursor-pointer duration-1000 ">
                <RiLogoutCircleRLine className="text-[#7BB4FF] w-14 h-14 animate-pulse ms-6 mt-2" /> 
               
                        Logout
                     
              </button>
   
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
