import React from 'react'
import ChevronIconDown from '../../img/down-chevron.svg'; // adjust path if needed
import ChevronIconUp from '../../img/up-chevron.svg';
import "./DropdownButton.css"

const DropdownButton = ({children, open, toggle}) => {
  return (
    <div 
        onClick={toggle} 
        className={`dropdown-btn ${open ? "button-open" : null} `} 
    >
        {children}
        <span className='toggle-icon'>
            { open ? <img src={ChevronIconDown} alt="Chevron down" className="chevron-icon" /> : 
                <img src={ChevronIconUp} alt="Chevron down" className="chevron-icon" />
            }
        </span>
    </div>
  )
}

export default DropdownButton