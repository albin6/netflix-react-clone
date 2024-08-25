import "./Banner.css";
import { useState, useEffect } from "react";
import axiosInstance from "../../axios-config";
import { API_KEY, IMAGE_URL } from "../../utils/constants";
function Banner() {
  const [banner, setBanner] = useState([]);
  const randomNumber = Math.floor(Math.random() * 20);
  useEffect(() => {
    axiosInstance
      .get(`/trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data.results);
        setBanner(response.data.results[randomNumber]);
      });
  }, []);
  if (!banner) {
    return <h1>Loading...</h1>;
  }
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${IMAGE_URL + banner.backdrop_path})` }}
    >
      {banner && (
        <div className="content">
          <h1 className="title">{banner.title} </h1>
          <h1 className="description">{banner.overview}</h1>
          <div className="banner_buttons">
            <button className="button">Play</button>
            <button className="button">My list</button>
          </div>
        </div>
      )}
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
