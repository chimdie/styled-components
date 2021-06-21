import styled from "styled-components";

const MainStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 2rem;
  margin-top: 5rem;
  margin-left: 6rem;
`;

const Header = styled.h4`
  display: inline-block;
  color: white;
  background-color: #026e78;
  font-style: italic;
  font-weight: 200;
  padding: 1rem;
  margin-bottom: 2rem;
  opacity: 0.5;
`;

const Link = styled.a.attrs({
  href: "#",
})`
  color: #2d99a4;
  background-color: #fff;
  font-size: 2rem;
  text-decoration: none;
  padding: 1rem;
  font-weight: bolder;
  border-radius: 0.7rem;

  &:hover {
    color: #2d99a4;
    background: transparent;
    transition: background-color 300ms ease-in, color 300ms ease-in;
  }
`;

const MenuLink = styled(Link)`
  color: #fff;
  background-color: #2d99a4;
  margin-top: 2rem;
`;

const Main = () => {
  return (
    <MainStyle>
      <Header>Try something new...</Header>
      <Link>Book a table</Link>
      <MenuLink>See our menu</MenuLink>
    </MainStyle>
  );
};

export default Main;
