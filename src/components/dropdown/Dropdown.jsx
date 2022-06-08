import { useState } from 'react'
import './dropdown.css'
import { AiFillCaretDown } from "react-icons/ai";
const fuel = ['Petrol', 'Diesel']

export const Dropdown = ({selected, setSelected}) => {
    const [isActive , setIsActive] = useState(false)
  return (
    <div className='dropdown'>
        <div className="dropdownBtn" onClick={e => setIsActive(!isActive)}>
            {selected}
            <AiFillCaretDown className='icon' />
        </div>
        {isActive && 
            (
            <div className="dropdownContent" >
                {fuel.map((elem) => (
                    <div onClick={(e) => {
                        setSelected(elem)
                        setIsActive(false)
                    }}
                        className='dropdownItem'
                    >
                            {elem}
                    </div>
                    ))
                }
            </div>
            )
        }
    </div>
  )
}