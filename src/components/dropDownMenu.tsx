import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { useState } from "react";


export const DropDownMenu = ({ title }: any) => {

    const [isMenuOpen, setMenuOpen] = useState(false);


  return (
    <div className="flex w-full flex-col mx-8 ">
      <div className="flex w-full items-center justify-between ">
        <h1>{title}</h1>
        <RiArrowDropDownLine className="text-4xl cursor-pointer" 
        onClick={()=>setMenuOpen(!isMenuOpen)}/>


        
      </div>
    </div>
  );
};
