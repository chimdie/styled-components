import Button from "../components/Buttons";
import styled from "styled-components";

import stick from "../images/stick.jpg";

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 18rem));
  margin: 2rem;
  grid-gap: 2rem;
  padding: 1rem;
`;

const Card = styled.div`
  background: #eddb2a;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 200ms ease-in;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Image = styled.img.attrs({
  src: stick,
  alt: "burger",
})`
  display: block;
  width: 100%;
  height: 18rem;
  object-fit: cover;
`;

const Description = styled.p`
  padding: 1rem;
  text-align: justify;
  margin: 0;
`;

const Content = () => {
  return (
    <StyledApp>
      <Card>
        <Image />
        <Description>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum ex
          quidem quibusdam rem quod sequi at. Non at maiores doloribus pariatur,
          tenetur optio temporibus voluptates vitae corporis.
        </Description>
        <Button>Order</Button>
      </Card>
    </StyledApp>
  );
};

export default Content;
