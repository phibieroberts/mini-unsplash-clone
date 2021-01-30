import React from 'react'


 const Modal = ({ showModal, cardData}) => {
    const{user,urls,location}=cardData;
    return (
        <div className="modal-box" style={{display:showModal ===false ? "none" : "block"}}>
        {/* 
                <img src={urls.regular} alt="" />
                <div className="details">
                    <h2>{user.name}</h2>
                    <p>{user.location}</p>
    
                </div>
        */}
    </div>
    )
}
export default Modal