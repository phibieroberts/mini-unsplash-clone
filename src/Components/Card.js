import React, { useState } from "react";
import Modal from "./Modal";

const Card = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const { user, urls, location } = data;
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="card" onClick={toggleModal}>
      <div className="card-image">
        <img src={urls.regular} alt={user.name} />
      </div>
      <div className="card-overlay">
        <h2>{user.name}</h2>
        <p>{user.location}</p>
      </div>
      <Modal showModal={showModal} data={data} />
    </div>
  );
};

export default Card;
