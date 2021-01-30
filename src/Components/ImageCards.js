import React,{useState} from "react";
import Card from "./Card";
import Modal from './Modal'

function ImageCards({ images }) {
    const[cardData, setCardData]=useState({})

  return (
    <div>
    <div className="grid-section">
      {images.map((data) => (
        <Card data={data} 
         cardData={setCardData}/>
      ))}
    </div>
                  <Modal cardData={cardData}/>
</div>
  );
}
export default ImageCards;
