import React from "react";

type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

// we can destructure props
const Input = ({ value, handleChange }: InputProps) => {
  // we can also define the handler inside the component itself
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  return (
    <>
      {/* if we destructure the type props, we should also lose the "props." part in the return */}
      <input type="text" value={value} onChange={handleChange} />
      <br />
      <input type="text" value={value} onChange={handleInputChange} />
    </>
  );
};

export default Input;
