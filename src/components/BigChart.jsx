import { useState } from "react";
import { Line } from "react-chartjs-2";
import { datasets, labels } from "../data/chartdata";
import ToggleButton from "./ToggleButton";

const BigChart = ({ selectedStackId }) => {
  const [dataVisibility, setDataVisibility] = useState({
    historical: true,
    forecast: true,
    actual: true,
  });

  const selectedStack = datasets.find((stack) => stack.id === selectedStackId);

  const { name, id } = selectedStack;

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Historical",
        data: selectedStack.historicData,
        borderColor: "#3399ff",
        tension: 0.3,
        fill: false,
        hidden: !dataVisibility.historical,
      },
      {
        label: "Forecast",
        data: selectedStack.forecastData,
        borderColor: "#b4e31b",
        tension: 0.3,
        fill: false,
        hidden: !dataVisibility.forecast,
      },
      {
        label: "Actual",
        data: selectedStack.actualData,
        borderColor: "#ff9933",
        tension: 0.3,
        fill: false,
        hidden: !dataVisibility.actual,
      },
    ],
  };

  const toggleDataVisibility = (dataType) => {
    setDataVisibility({
      ...dataVisibility,
      [dataType]: !dataVisibility[dataType],
    });
  };

  return (
    <div className="mx-auto w-full md:w-4/5 flex flex-col items-center overflow-x-auto">
      <div className="mb-2 p-4 gap-4 flex items-center flex-col">
        <div className="flex gap-2 items-center">
          <p className="font-semibold text-2xl sm:text-lg">{name}</p> |{" "}
          <p className="text-gray-800 text-lg sm:text-sm">Stack ID - {id}</p>
        </div>

        <div className="flex gap-4">
          <ToggleButton
            label="Historical"
            active={dataVisibility.historical}
            onClick={() => toggleDataVisibility("historical")}
            color="#3399ff"
          />
          <ToggleButton
            label="Forecast"
            active={dataVisibility.forecast}
            onClick={() => toggleDataVisibility("forecast")}
            color="#b4e31b"
          />
          <ToggleButton
            label="Actual"
            active={dataVisibility.actual}
            onClick={() => toggleDataVisibility("actual")}
            color="#ff9933"
          />
        </div>
      </div>

      <div className="w-full ">
        <Line
          data={chartData}
          options={{
            legend: {
              display: true,
              labels: {
                fontColor: "black",
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default BigChart;
