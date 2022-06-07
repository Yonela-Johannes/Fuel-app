import './dropdown.css'
import { AiFillCaretDown } from "react-icons/ai";


export const Dropdown = () => {
  return (
    <div className='dropdown'>
        <div className="dropdownBtn">
            Select Fuel
            <AiFillCaretDown className='icon' />
        </div>
        <div className="dropdownContent">
            <div className="dropdownItem">
                Petrol
            </div>
            <div className="dropdownItem">
                Diesel
            </div>
        </div>
    </div>
  )
}