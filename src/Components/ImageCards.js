import React, { useState } from "react";
import Card from "./Card";

function ImageCards({ images }) {
  return (
    <div>
      <div className="grid-section">
        {images.map((data) => (
          <Card data={data} />
        ))}
      </div>
    </div>
  );
}
export default ImageCards;
