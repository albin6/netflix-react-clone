import axiosInstance from "../../axios-config";
import "./CardRow.css";
import { useState, useEffect } from "react";
import { IMAGE_URL } from "../../utils/constants";

const CardRow = (props) => {
  const [cards, setCard] = useState([]);
  useEffect(() => {
    axiosInstance.get(props.url).then((response) => {
      console.log(response);
      const cardData = response.data.results;
      if (Array.isArray(cardData)) {
        setCard(cardData);
      } else {
        console.error("Expected an array but got:", cardData);
        setCard([]); // Reset to empty array to avoid breaking the map function
      }
    }).catch((error) => {
      console.log(error);
    })
  }, []);
  if (!cards) {
    return <h1>loading...</h1>;
  }
  return (
    <div className="row-container">
      <h2>{props.title}</h2>
      <div className="slider-container">
        <div className="slider-pad">
          <div className="slider-mask">
            {cards.map((card) => (
              <div
                key={card.id}
                style={{
                  backgroundImage: `url(${
                    props.isPoster ? IMAGE_URL + card.poster_path : IMAGE_URL + card.backdrop_path
                  })`,
                }}
                className={props.isPoster ? "poster" : "card"}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardRow;
