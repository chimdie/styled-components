import Button from "./Buttons";
import styled from "styled-components";

// const imgs =[
//   img: ''
// ]

const StyledApp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 1rem;
  `;
  
  const Card = styled.div`
  background: #edd2bs;
  padding: 1rem;
  border: none;
  border-radius: 1rem;
  height: 10rem;
  width: 30rem;
  display: flex;
	flex-direction: column;
	justify-content: space-between;
	transition: 200ms ease-in;
`;

const Image = styled.img`
display: block;
width: 100%;
height: 18rem;
object-fit: cover;
`;

const Par = styled.p`
  text-align: justify;
`;

function App() {
  return (
    <StyledApp>
      <Card>
        <Image/>
        <Par>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum ex quidem
        quibusdam rem quod sequi at. Consequuntur aliquam dolore sapiente
        aliquid libero natus omnis unde molestiae in dolorum, neque ipsam,
        itaque repudiandae quasi hic consectetur consequatur iure fuga laborum
        deserunt corrupti animi dolorem repellat. Non at maiores doloribus
        pariatur, tenetur optio temporibus voluptates vitae corporis. 
        </Par>
        <Button />
      </Card>
    </StyledApp>
  );
}

export default App;
