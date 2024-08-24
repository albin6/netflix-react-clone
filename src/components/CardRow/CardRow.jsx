import { useEffect, useState } from "react";
import "./CardRow.css";
import axiosInstance from "../../axios-config";
import { BASE_URL, CARD_IMAGE, IMAGE_URL } from "../../utils/constants";

const CardRow = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axiosInstance.get(BASE_URL + CARD_IMAGE).then((response) => {
      console.log(response.data);
      setCards(response.data.results);
    });
  });
  return (
    <div className="row-container">
      <h2>Popular</h2>
      <div className="slider-container">
        <div className="slider-pad">
          <div className="slider-mask">
            {
              cards.map((card) => (
                
                  <div key={card.id} style={{backgroundImage : `url(${card ? IMAGE_URL+card.poster_path : ""})`}} className="card"></div>
                
              ))
            }            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRow;
