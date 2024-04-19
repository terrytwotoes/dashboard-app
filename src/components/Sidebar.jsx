import { useState } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
import { GiStack } from "react-icons/gi";
import { FaDatabase } from "react-icons/fa";
import { datasets } from "../data/chartdata";

const Sidebar = ({ selectedStackId, setSelectedStackId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleStackSelection = (stackId) => {
    setSelectedStackId(stackId);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className={`fixed top-20 z-50 bg-[#FF1178] text-white w-10 h-10 flex items-center justify-center transition-all duration-300 ${
          isOpen ? "transform rotate-180 left-80" : "left-0"
        }`}
        onClick={toggleSidebar}
      >
        <MdKeyboardDoubleArrowRight className="text-2xl" />
      </button>

      <div
        className={`sidebar border border-gray-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0  w-80 h-full bg-gray-900 text-white z-40 overflow-y-auto transition-transform duration-300 ease-in-out`}
      >
        <Link to="/" className="ml-4">
          <FaArrowLeft className="ml-6" />
        </Link>

        <div className="flex justify-start gap-3 items-center text-xl font-semibold px-6 py-6 border-b border-gray-700">
          <GiStack />
          Sample Stack
        </div>
        <hr className="border-gray-700" />
        <div className="flex flex-col gap-3 mt-4">
          {datasets.map((stack) => (
            <div
              key={stack.id}
              className={`border border-gray-400 mx-3 rounded-lg p-5 flex items-center justify-between cursor-pointer hover:bg-gray-700 ${
                selectedStackId === stack.id && "bg-gray-700"
              }`}
              onClick={() => handleStackSelection(stack.id)}
            >
              <label
                htmlFor={`stack${stack.id}`}
                className="cursor-pointer flex items-center"
              >
                <FaDatabase className="mr-2" /> {stack.name}
              </label>
              <input
                type="radio"
                name="stack"
                id={`stack${stack.id}`}
                className="mr-2 cursor-pointer"
                checked={selectedStackId === stack.id}
                onChange={() => {}}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
