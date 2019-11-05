import React from "react";

const Styling = props => {
  return (
    <div className="styling">
      <p>
        {props.arg1} <span>{props.arg2}</span> <p id="time">{props.time}</p>
      </p>
    </div>
  );
};

export default Styling;
