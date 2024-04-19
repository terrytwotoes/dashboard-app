const ToggleButton = ({ label, active, onClick, color }) => {
  const sliderStyle = {
    backgroundColor: active ? color : "#999",
  };

  return (
    <div className="flex items-center">
      <label className="inline-flex items-center cursor-pointer">
        <div
          className={`relative rounded-full w-10 mr-3 h-6 transition-colors duration-200 ease-in-out bg-gray-300`}
        >
          <input
            type="checkbox"
            className="hidden"
            checked={active}
            onChange={onClick}
          />
          <span
            className={`absolute left-0 w-6 h-6 rounded-full bg-black shadow-md transform transition-transform duration-200 ease-in-out ${
              active ? "translate-x-full" : ""
            }`}
            style={sliderStyle}
          ></span>
        </div>
        <span className="mr-2">{label}</span>
      </label>
    </div>
  );
};

export default ToggleButton;
