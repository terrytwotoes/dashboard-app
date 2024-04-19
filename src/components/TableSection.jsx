import { datasets } from "../data/chartdata";

const TableSection = ({ selectedStackId }) => {
  // Find the selected stack data based on stackId
  const selectedStack = datasets.find((stack) => stack.id === selectedStackId);

  // If no stack is selected or stack data is not available, return fallback UI
  if (!selectedStack) {
    return (
      <div className="text-white bg-gray-900 lg:max-w-4/5 lg:p-8 mt-4 flex justify-center">
        <h2 className="text-xl font-semibold">No data to display</h2>
      </div>
    );
  }

  const { historicData, forecastData, actualData } = selectedStack;

  return (
    <div className="overflow-x-auto text-white bg-gray-900 lg:max-w-4/5 lg:p-4 mt-4">
      <table className="w-full lg:max-w-full m-4 px-4">
        <tbody>
          <tr>
            <th className="border-b border-gray-400 p-2">Historic Data</th>
            {historicData.map((data, index) => (
              <td
                key={index}
                className="border-b border-gray-400 p-2 whitespace-nowrap"
              >
                {data}
              </td>
            ))}
          </tr>
          <tr>
            <th className="border-b border-gray-400 p-2">Actual Data</th>
            {actualData.map((data, index) => (
              <td
                key={index}
                className="border-b border-gray-400 p-2 whitespace-nowrap"
              >
                {data}
              </td>
            ))}
          </tr>
          <tr>
            <th className="border-b border-gray-400 p-2">Forecast Data</th>
            {forecastData.map((data, index) => (
              <td
                key={index}
                className="border-b border-gray-400 p-2 whitespace-nowrap"
              >
                {data}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableSection;
