import axiosInstance from "../../axios-config";
import "./CardRow.css";
import { useState, useEffect } from "react";
import { IMAGE_URL, API_KEY } from "../../utils/constants";
import YouTube from "react-youtube";
import Cross from '../../assets/Cross'

const CardRow = (props) => {
  const [cards, setCard] = useState([]);
  const [movieId, setMovieId] = useState(null)
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

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  function handleClick(id) {
    console.log(id)
    try {
      axiosInstance.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
        console.log('axios',movieId)
        if (response.data.results.length !== 0) {
          setMovieId(response.data.results[0])
        } else {
          console.log('array empty')
        }
      }).catch(error => {
        console.error(error)
      })
    } catch (error) {
      console.error(error)
    }
  }

  function closeYtVideo() {
    setMovieId(null)
    console.log('onclick on cross ', movieId)
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
                  backgroundImage: `url(${props.isPoster ? IMAGE_URL + card.poster_path : IMAGE_URL + card.backdrop_path
                    })`,
                }}
                className={props.isPoster ? "poster" : "card"}
                onClick={() => handleClick(card.id)}
              ></div>
            ))}
          </div>
        </div>
      </div>
      {
        movieId && <div className="yt-video"><span onClick={closeYtVideo}><Cross/></span><YouTube videoId={movieId.key} opts={opts} /></div>
      }
    </div>
  );
};
export default CardRow;
