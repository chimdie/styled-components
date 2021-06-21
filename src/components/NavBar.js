import styled from "styled-components";

const Navbar = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 1000px;
  max-width: 100%;
`;

const NavHeader = styled.h4`
  padding-left: 2rem;
`;

const NavUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
    visibility: hidden;
  }
`;

const NavLink = styled.li`
  font-size: 1.2rem;
  font-weight: 700;
  flex: 1 auto;
  margin: 0 1rem;
`;

const Href = styled.a`
  border-radius: 0.7rem;
  display: block;
  padding: 0.7rem 1.5rem;
  text-align: center;
  font-size: 1.7rem;
  background-color: #2d99a4;
  color: white;
  text-decoration: none;

  &:hover {
    color: #2d99a4;
    background: transparent;
    transition: background-color 300ms ease-in, color 300ms ease-in;
  }
`;
const HeaderLink = styled(Href)`
  color: #fff;
  background: none;
  font-weight: bolder;
  font-size: 2rem;
  text-decoration: none;
  text-transform: capitalize;
`;

const NavBar = () => {
  return (
    <Navbar>
      <NavHeader>
        <HeaderLink href="#">chopsy</HeaderLink>
      </NavHeader>
      <NavUl>
        <NavLink>
          <Href href="#">Home</Href>
        </NavLink>
        <NavLink>
          <Href href="#">Menu</Href>
        </NavLink>
        <NavLink>
          <Href href="#">Contact Us</Href>
        </NavLink>
      </NavUl>
    </Navbar>
  );
};

export default NavBar;
