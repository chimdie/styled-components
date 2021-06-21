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

const Btn = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  border: 2px solid white;
  background: ${(props) => (props.primary ? "white" : "palevioletred")}
  color: ${(props) => (props.primary ? "palevioletred" : "white")}
`;

const Buttons = () => {
  const [loading, setLoading] = useState(false);

  const handleChange = () => {
    setLoading(!loading);
  };
  return (
    <div onClick={handleChange}>
      {loading ? <Button>Click</Button> : <Button pre>Clicked!</Button>}
    </div>
  );
};

export default Button;
