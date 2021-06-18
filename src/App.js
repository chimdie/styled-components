import Button from "./Buttons";
import styled from "styled-components";
import stick from './images/stick.jpg'

const StyledApp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  padding: 1rem;
`;

const Card = styled.div`
  background: #edd2bs;
  border: none;
  width: 345px;
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

const Par = styled.p`
padding: 1rem;
text-align: justify;
margin: 0;
`;

function App() {
  return (
    <StyledApp>
      <Card>
        <Image />
        <Par>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum ex
          quidem quibusdam rem quod sequi at.  Non at maiores
          doloribus pariatur, tenetur optio temporibus voluptates vitae
          corporis.
        </Par>
        <Button />
      </Card>
    </StyledApp>
  );
}

export default App;
