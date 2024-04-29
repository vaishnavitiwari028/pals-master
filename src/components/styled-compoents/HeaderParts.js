import styled, { keyframes } from "styled-components";
const slide_down = keyframes`
 0%{
   transform:scaleY(0)
 }
`;
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  background-color: var(--clr-primary);
  .logo {
    color: var(--clr-primary);
    font-style: italic;
    border-radius: 0.3rem;
    padding: 0.1rem 0.1rem 0.1rem 0;
    background-color: black;
    &::first-letter {
      font-size: 2.5rem;
    }
    font-size: 1.7rem;
  }
  .hamburger-menu {
    display: none;
    margin: 0 10px;
    font-weight: 900;
    cursor: pointer;
    @media (max-width: 650px) {
      display: block;
    }
  }
  nav {
    display: flex;
    justify-content: flex-end;
    align-items: baseline;
    margin: 1rem 0;
    margin-left: 20px;
    position: relative;
    transition: 0.3s ease transform;
    > * {
      position: relative;
      ::after {
        content: "";
        position: absolute;
        background-color: black;
        right: 0.4rem;
        width: 86%;
        bottom: -5px;
        height: 2px;
        transition: 0.2s ease transform;
        transform: scaleX(0);
        transform-origin: left;
      }
      &:hover::after {
        transform: none;
      }
    }
  }

  @media (max-width: 650px) {
    nav.contacts_nav_desktop {
      display: none;
    }
    nav.contacts_nav {
      flex-direction: column;
      background-color: var(--clr-primary);
      width: 30%;
      min-width: 250px;
      padding: 1.2rem 0;
      @media (max-width: 500px) {
        min-width: 180px;
      }
      position: absolute;
      top: 4rem;
      right: 0px;
      transform-origin: top;
      animation: ${slide_down} 0.3s ease forwards;
      z-index: 100;
    }
  }
`;

export { HeaderContainer };
