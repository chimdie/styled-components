import React, { useState } from "react";
import styled, { css } from "styled-components";

const Button = styled.button`
  // background: #516174;
  // color: #ffffff;
  // padding: 0.7rem 1.5rem;
  // border-radius: 1rem;
  // justify-content: flex-end;
  // border: none;
  // font-weight: 600;
  // transition: 100ms ease-in;

  padding: 1rem;
	width: 100%;
	border: none;
	background: #516174;
	color: #ffffff;
	font-size: 1rem;
	font-weight: bolder;
	transition: background 200ms ease-in, color 200ms ease-in;

  ${(props) =>
    props.pre &&
    css`
      background: transparent;
      color: red;
    `}
  &:hover {
    color: #516174;
    background: #ffffff;
  }
`;

const Buttons = () => {
  const [loading, setLoading] = useState(false);

  const handleChange = () => {
    setLoading(!loading);
  };
  return (
    <div onClick={handleChange}>
      {/* {loading ? <Button>Click</Button> : <Button pre>Click_b</Button>} */}
      <Button>Order</Button>
    </div>
  );
};

export default Buttons;
