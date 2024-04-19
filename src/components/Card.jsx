import LineChart from "./LineChart";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const Card = ({ city }) => {
  return (
    <div className="rounded-lg p-px bg-white/20 cursor-pointer ">
      <div className="bg-transparent p-10 rounded-[calc(2rem-24px)]">
        <h2 className="text-base font-semibold mb-4">{city.name}</h2>

        <div className="flex gap-3 xl:gap-6 items-center">
          <div className="flex flex-col gap-2  mb-3">
            <h3 className="text-sm">Forecast</h3>
            <p className="font-semibold text-base">{city.population}</p>
          </div>
          <div className="h-10">
            <LineChart
              data={city.chartData.population}
              color="rgba(54, 162, 235, 1)"
            />
          </div>
          <FaArrowUp className="text-green-700" />
        </div>

        <div className="flex gap-3 xl:gap-6 items-center">
          <div className="flex flex-col gap-2 mb-3">
            <h3 className="text-sm">Forecast</h3>
            <p className="font-semibold">{city.humidity}</p>
          </div>
          <div className="h-10">
            <LineChart
              data={city.chartData.humidity}
              color="rgba(255, 99, 132, 1)"
            />
          </div>
          <FaArrowDown className="text-red-700" />
        </div>
      </div>
    </div>
  );
};

export default Card;
