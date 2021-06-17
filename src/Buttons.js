import React, { useState } from "react";
import styled, { css } from "styled-components";

const Button = styled.button`
  background: #516174;
  color: #ffffff;
  padding: 0.7rem 1.5rem;
  border-radius: 0.5rem;
  justify-content: flex-end;
  border: none;

  ${(props) =>
    props.pre &&
    css`
      background: transparent;
      color: red;
    `}
  &:hover {
    color: red;
  }
`;

const Buttons = () => {
  const [loading, setLoading] = useState(false);

  const handleChange = () => {
    setLoading(!loading);
  };
  return (
    <div onClick={handleChange}>
      {loading ? <Button>Click</Button> : <Button pre>Click_b</Button>}
    </div>
  );
};

export default Buttons;
