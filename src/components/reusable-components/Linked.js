import { Link } from "react-router-dom";
import styled from "styled-components";

const Linked = styled(Link).attrs(({ to }) => ({
  to,
}))`
  text-decoration: none;
  font-size: ${({ fz }) => fz || "2rem"};
  font-weight: 700;
  margin: 0 1rem;
  color: ${({ color }) => color || "black"};
`;

export default Linked;
