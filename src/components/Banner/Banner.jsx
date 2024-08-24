import "./Banner.css";
import { useEffect, useState } from "react";
import axiosInstance from "../../axios-config";
import { TRENDING, IMAGE_URL } from "../../utils/constants";

const Banner = () => {
  const [banner, setBanner] = useState();
  useEffect(() => {
    axiosInstance
      .get(TRENDING)
      .then((response) => {
        console.log(response.data.results);
        const index = Math.floor(Math.random() * 20);
        setBanner(response.data.results[index]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!banner) {
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{
        backgroundImage: `url(${IMAGE_URL}${banner.backdrop_path})`,
      }}
      className="banner banner-bg"
    >
      <div className="info-layer">
        <div>img name</div>
        <div>
          <h1>{banner.title}</h1>
          <p>{banner.overview}</p>
        </div>
        <div>
          <button>Play</button>
          <button>More Info</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
