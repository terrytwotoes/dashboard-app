import cities from "../data/data";
import {
  FaUserFriends,
  FaTint,
  FaThermometerHalf,
  FaWind,
} from "react-icons/fa";

const Header = ({ cityId }) => {
  // Find city data based on cityId
  const city = cities.find((city) => city.id === parseInt(cityId));

  return (
    <div className="header bg-gray-900 text-white p-2">
      {city && (
        <>
          <h2 className="text-3xl font-bold text-center mb-4">{city.name}</h2>
          <div className="grid grid-cols-2 gap-4 lg:flex lg:justify-between mx-auto w-2/3">
            <div className="flex items-center">
              <FaUserFriends className="mr-2" />
              <p className="font-semibold hidden sm:flex">Population:</p>
              <p className="ml-2 font-semibold ">{city.population}</p>
            </div>
            <div className="flex items-center">
              <FaTint className="mr-2" />
              <p className="font-semibold hidden sm:flex">Humidity:</p>
              <p className="ml-2 font-semibold">{city.humidity}</p>
            </div>
            <div className="flex items-center">
              <FaThermometerHalf className="mr-2" />
              <p className="font-semibold hidden sm:flex">Temperature:</p>
              <p className="ml-2 font-semibold">{city.temperature}</p>
            </div>
            <div className="flex items-center">
              <FaWind className="mr-2" />
              <p className="font-semibold hidden sm:flex">Wind Speed:</p>
              <p className="ml-2 font-semibold">{city.windSpeed}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
