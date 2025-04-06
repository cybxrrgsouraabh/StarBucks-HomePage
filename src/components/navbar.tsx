import { FaLocationDot } from "react-icons/fa6";
import logo from "../assets/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

export const Navbar: React.FC = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between w-screen shadow-md sticky top-0  mt-4 z-50 ">
        <img src={logo} alt="" className="w-[50px] ml-8 mb-2 cursor-pointer" />

        <div className="md:hidden text-3xl mr-8">
          <RxHamburgerMenu
            onClick={() => setOpen((prev) => !prev)}
            className="cursor-pointer"
          />
        </div>

        <div className=" hidden md:flex w-full justify-between ">
          <ul className="flex justify-between items-center gap-6 w-auto p-2 ml-8 font-extrabold uppercase shrink-0 ">
            <li className="hover:text-green-800 transition ease-in-out">
              <a href="#">Menu</a>
            </li>
            <li className="hover:text-green-800 transition ease-in-out">
              <a href="#">Rewards</a>
            </li>
            <li className="hover:text-green-800 transition ease-in-out">
              <a href="#">Gift Cards</a>
            </li>
          </ul>

          <div className="w-auto flex justify-between items-center mr-8 font-medium shrink-0 gap-8 cursor-pointer ">
            <div className="flex justify-between items-center gap-2 hover:text-green-800">
              <FaLocationDot className="" />
              <h2 className="">Find a store</h2>
            </div>

            <div className="flex justify-between items-center gap-6 ">
              <button className="border rounded-2xl px-4 py-1 text-sm text-nowrap cursor-pointer hover:bg-stone-200">
                Sign In
              </button>
              <button className="bg-black rounded-2xl px-4 py-1 text-white text-sm text-nowrap cursor-pointer hover:opacity-70">
                Join now
              </button>
            </div>
          </div>
        </div>

        {/* {if above part is hidden then this part will show up } */}
      </nav>

      {/* {overlay} */}
      {
        isOpen &&
        (<div className={`fixed top-20 left-0 right-0 bottom-0 bg-black opacity-50 z-30`}
          onClick={()=>setOpen(false)}
        ></div>)
      }



      {/* {sliding menu} */}
      <div
        className={`flex flex-col fixed top-0 right-0 h-full z-40 w-[70%] bg-white transform transition-all duration-300
       ${isOpen ? `translate-x-0` : `translate-x-full`}`} 
      >
        <ul className="flex flex-col gap-8 mt-6 relative top-16 ml-6">
          <li className="hover:text-green-800 transition ease-in-out">
            <a href="#">Menu</a>
          </li>
          <li className="hover:text-green-800 transition ease-in-out">
            <a href="#">Rewards</a>
          </li>
          <li className="hover:text-green-800 transition ease-in-out">
            <a href="#">Gift Cards</a>
          </li>
        </ul>
        
        <div className="w-auto relative top-16 flex flex-col justify-between ml-6 mt-8 font-medium shrink-0 gap-8 cursor-pointer ">
          <div className="flex  items-center gap-6 ">
            <button className="border rounded-2xl px-4 py-1 text-sm text-nowrap cursor-pointer hover:bg-stone-200">
              Sign In
            </button>
            <button className="bg-black rounded-2xl px-4 py-1 text-white text-sm text-nowrap cursor-pointer hover:opacity-70">
              Join now
            </button>
          </div>

          <div className="flex items-center gap-2 hover:text-green-800">
            <FaLocationDot className="" />
            <h2 className="">Find a store</h2>
          </div>
        </div>
      </div>
    </>
  );
};
