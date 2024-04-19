import { useState } from "react";
import Sidebar from "./Sidebar";
import BigChart from "./BigChart";
import Header from "./Header";
import { useParams } from "react-router-dom";
import TableSection from "./TableSection";

const CityDetails = () => {
  const [selectedStackId, setSelectedStackId] = useState(2342345712); // Default selected stack ID

  const { id } = useParams();

  return (
    <div>
      <Header cityId={id} />
      <Sidebar
        selectedStackId={selectedStackId}
        setSelectedStackId={setSelectedStackId}
      />
      <BigChart selectedStackId={selectedStackId} />
      <TableSection selectedStackId={selectedStackId} />
    </div>
  );
};

export default CityDetails;
