import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cities from "../data/data";
import Card from "./Card";
import { Link } from "react-router-dom";

const Widget = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="absolute top-16 px-10 left-0 right-0 z-10 w-full">
      <Slider {...sliderSettings} className="bg-transparent">
        {cities.map((city, index) => (
          <div key={index} className="px-4 py-2">
            <Link to={`/city/${city.id}`} className="text-white">
              <Card city={city} />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Widget;
