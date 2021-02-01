import React from "react";

const Modal = ({ showModal, data }) => {
  const { user, urls, location } = data;

  return (
    <div className="modal-container">
    <div
      className="modal-box"
      style={{ display: showModal === false ? "none" : null }}
    >

      <img src={urls.regular} alt="" />
      <div className="details">
        <h2>{user.name}</h2>
        <p>{user.location}</p>
      </div>
      <button onClick={!showModal}>Close</button>
    </div>
    </div>
  );
};
export default Modal;
