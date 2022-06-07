import { Button } from './button/Button'
import './components.css'
import { Dropdown } from './dropdown/Dropdown'

export const Main = () => {
  return (
    <div className="main">
        <div className="wrapper">
            <div className="content">
                <h1 className='title'>Enter Your Details</h1>
                <div className='mainContent'>
                    <h3 className='label'>Select Fuel Type</h3>
                    <Dropdown />
                    <label name="diesel-price">Current Diesel Price per Liter</label>
                    <p>R 2.08</p>
                    <input type="number" name="diesel-price" />
                </div>
                <div className='mainContent'>
                    <h3 className='label'>Select Fuel Type</h3>
                    <label name="diesel-price">Current Diesel Price per Liter</label>
                    <p>R 2.08</p>
                    <input type="number" name="diesel-price" />
                </div>
            </div>
        </div>
        <Button name='Calculate' />
    </div>
  )
}
