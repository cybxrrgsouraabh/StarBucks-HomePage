
import { DropDownMenu } from "./dropDownMenu"

export const Footer = ()=>{

    
    return(
        <div className="mx-8 my-8">
            <div className="flex flex-col items-center gap-8">
                <DropDownMenu title="About Us" 
                />
                <DropDownMenu title="Careers" 
                />
                <DropDownMenu title="Social Impact" 
                />
                <DropDownMenu title="For Business Partners" 
                />
                <DropDownMenu title="Order and Pick Up" 
                />
            </div>
        </div>
    )
}