import styled, { css } from "styled-components";
import FlexWrapper from "../styled-compoents/FlexWrapper";
import Linked from "./Linked";

const ClickableWrapper = styled(FlexWrapper)`
  cursor: pointer;
  box-sizing: border-box;
  display: inline-flex;
  text-align: start;
  font-size: ${({ fz }) => fz || "2rem"};
  font-weight: 700;
  margin: ${({ margin }) => margin || ".5em"};
  ${({ icon }) => {
    if (icon === "trash")
      return css`
        transition: 0.2s ease transform;
        &:hover {
          transform: translateY(-3px);
          i {
            color: red;
          }
        }
      `;
    else if (icon === "star")
      return css`
        transition: 0.2s ease;
        &:hover {
          transform: scale(1.2);
          opacity: 0.6;
        }
      `;
    else if (icon === "edit")
      return css`
        transition: 0.2s ease;
        &:hover {
          transform: translateY(-3px);
          i {
            color: green;
          }
        }
      `;
    else if (icon)
      return css`
        i {
          padding: 0.2em;
        }
      `;
  }}
`;

const Clickable = ({ to, children, icon, ...props }) => {
  return (
    <ClickableWrapper icon={icon} {...props}>
      {to ? (
        <Linked to={to} {...props}>
          {icon && <Clickable.Icon icon={icon} />}
          {children}
        </Linked>
      ) : icon ? (
        <>
          <Clickable.Icon icon={icon} iconSize={props.iconSize || ""} />
          {children}
        </>
      ) : (
        <>{children}</>
      )}
    </ClickableWrapper>
  );
};

Clickable.Icon = ({ icon, iconSize }) => (
  <i className={`fas fa-${icon} fa-${iconSize ? iconSize : "sm"}`}></i>
);

export default Clickable;
