import { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const CustomChart = ({ data, color }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      // Destroy the existing chart instance if it exists
      if (chartRef.current.chartInstance) {
        chartRef.current.chartInstance.destroy();
      }

      const ctx = chartRef.current.getContext("2d");

      chartRef.current.chartInstance = new Chart(ctx, {
        type: "line",
        data: {
          labels: ["", "", "", "", "", "", ""],
          datasets: [
            {
              data,
              borderColor: color,
              borderWidth: 1,
              tension: 0.4,
            },
          ],
        },
        options: {
          scales: {
            x: { display: false },
            y: { display: false },
          },
          plugins: {
            tooltip: { enabled: true },
            legend: { display: false },
          },
        },
      });
    }
  }, [data, color]);

  return <canvas ref={chartRef} />;
};

export default CustomChart;
