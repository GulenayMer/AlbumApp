import {useState, useEffect} from "react"
import axios from "axios";


export default function Category({category}) {

    const [categorizedAlbum, setCategorizedAlbum]=useState([])
  useEffect((req, res) => {
    axios
      .get("http://localhost:3000/images")
      .then((response) => {
        
        setCategorizedAlbum(response.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>{category}</div>
  )
}
