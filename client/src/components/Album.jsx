import axios from "axios";
import { useState, useEffect } from "react";
export default function Album() {
  const [images, setImages] = useState([]);

  useEffect((req, res) => {
    axios
      .get("http://localhost:3000/images")
      .then((response) => {
        console.log(response.data);
        setImages(response.data);
        //console.log(response.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {images &&
        images.map((image) => (
          <div key={image._id}>
            {" "}
            <img src={image.image} alt={image.information} />
          </div>
        ))}
    </>
  );
}
