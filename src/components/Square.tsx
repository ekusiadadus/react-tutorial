import React, { useState } from "react";

const Square = ({ value }: { value: string }) => {
  const [value2, setValue2] = useState(value);
  return (
    <button
      className="square"
      onClick={() => {
        setValue2("X");
      }}
    >
      {value2}
    </button>
  );
};

export default Square;
