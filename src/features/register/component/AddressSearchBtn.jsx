import React, { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import { ReactComponent as CloseIcon } from '../../../assets/close-icon.svg';
import '../styles/addresssearchbtn.css';

const AddressSearchBtn = ({ onAddressSelect }) => {
  const [open, setOpen] = useState(false);

  const handleComplete = (data) => {
    const fullAddress = data.address;
    const extraAddress = data.addressType === 'R' ? (data.bname || '') + (data.buildingName ? `, ${data.buildingName}` : '') : '';
    const completeAddress = `${fullAddress} ${extraAddress}`.trim();
    
    onAddressSelect(completeAddress);
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className="address-search-btn" onClick={handleOpen}>주소찾기</button>
      {open && (
        <>
          <div className="modal-overlay" onClick={handleClose}></div>
          <div className="modal">
            <div className="modal-content">
              <button className="close" onClick={handleClose}>
                <CloseIcon />
              </button>
              <DaumPostcode onComplete={handleComplete} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AddressSearchBtn;