import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import '../styles/dropdown.scss';

const Dropdown = ({ id, value, options, onChange, borderColor }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(value);
    const dropdownRef = useRef(null);

    const handleToggle = () => setIsOpen(!isOpen);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        onChange({ target: { id, value: option } });
        setIsOpen(false);
    };

    return (
        <div className="list-dropdown" ref={dropdownRef} style={{ borderColor }}>
            <button
                type="button"
                className="dropdown-toggle"
                onClick={handleToggle}
            >
                {selectedOption}
                <img 
                    src={isOpen ? "/icons/dropdown/dropdown_on.png" : "/icons/dropdown/dropdown_off.png"} 
                    alt={isOpen ? "dropdown on" : "dropdown off"} 
                    className='dropdown-icon'
                />
            </button>
            {isOpen && (
                <ul className="dropdown-menu">
                    {options.map((option) => (
                        <li
                            key={option}
                            className={classNames('dropdown-item', { selected: option === selectedOption })}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
