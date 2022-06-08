import { useState } from 'react'
import { Button } from './button/Button'
import './components.css'
import { Dropdown } from './dropdown/Dropdown'
import { FaArrowCircleUp } from 'react-icons/fa';
import { FaArrowCircleDown } from 'react-icons/fa';

export const Main = () => {
    const [selected, setSelected] = useState('Select Fuel')
    let [count, setCount] =useState(0)

    const counter = e => {
        count <= 0 ? setCount(0) : setCount(count--)
    }
  return (
    <div className="main">
        <div className="wrapper">
                <h1 className='title'>Enter Your Details</h1>
            <div className="content">
                <div className='mainContent'>
                    <h3 className='label'>Select Fuel Type</h3>
                    <Dropdown selected={selected} setSelected={setSelected} />

                    {(selected.toLocaleLowerCase() === 'petrol' || selected.toLocaleLowerCase() ==='diesel') ? (
                        <>
                            <label className='label' name="diesel-price">Enter {selected} Price per Liter</label>
                            <input type="number" name="diesel-price" />
                        </>
                    ) : (
                        <>
                            <label className='label' name="diesel-price">Select your car fuel type</label>
                            <input type="number" name="diesel-price" disabled/>
                        </> 
                    )
                    }
                </div>
                <div className='mainContent'>
                    {(selected.toLocaleLowerCase() === 'petrol' || selected.toLocaleLowerCase() ==='diesel') ? (
                        <>
                            <label className='label' name="Amount">Enter Your {selected} Amount</label>
                            <input type="number" name="Amount" />
                        </>

                    ) : (
                        <>
                            <label className='label' name="Amount">Select your car fuel type</label>           
                            <input type="number" name="Amount" disabled/>
                        </>
                    )
                }
                    <h3 className='label'>Enter amount of fuel per liter</h3>
                    <label name="diesel-price">Enter Diesel Price per Liter</label>
                    <div className='bottomContainer'>
                        <div className="counterContainer">
                                <FaArrowCircleUp className='icon' onClick={e => setCount(count++)}/>
                                <p className='count'>{count}</p>
                                <FaArrowCircleDown className='icon' onClick={counter}/>
                        </div>
                        <p className='liters'>{count > 1 ? 'liters' : 'liter'}</p>
                    </div>
                </div>
            </div>
        </div>
        <Button name='Calculate' />
    </div>
  )
}
