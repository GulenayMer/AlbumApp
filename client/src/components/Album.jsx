import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Album() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/images")
      .then((response) => {
        console.log(response.data);
        setImages(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {images.map((image) => (
        <div className="grid grid-cols-4 gap-4" key={image._id}>
          <div>
            <img src={image.image} alt={image.information} className="w-64" />
          </div>
        </div>
      ))}
    </div>
  );
}