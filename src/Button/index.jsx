import React from "react";
import styled from "styled-components";
import { darken } from "polished";
import t from "prop-types";

const scales = {
  small: `
    padding: 5px 10px;
    font-size: 14px;
  `,
  normal: `
    padding: 10px 20px;
    font-size: 16px;
  `,
  big: `
    padding: 20px 30px;
    font-size: 18px;
  `
};

const kind = outline => (bg, color) => {
  const boxShadowColor = outline ? bg : "transparent";
  const backgroundColor = outline ? "transparent" : bg;

  return `
    background: ${backgroundColor};
    color: ${outline ? bg : color};
    transition: all .5s;

    &:hover {
      box-shadow: inset 0 0 0 1000px ${boxShadowColor};
      color: ${color};
     
    }
  `;
};

const kinds = outline => {
  const get = kind(outline);

  return {
    blue: get("#007aff", "white"),
    purple: get("#70b", "white"),
    green: get("#0a0", "white"),
    red: get("#c00", "white"),
    dark: get("#273444", "white"),
    default: get("#f8f8f8", "#4e616c")
  };
};

const getScale = ({ scale = "normal" }) => scales[scale];
const getKind = ({ kind = "primary", outline = false }) => kinds(outline)[kind];

const ButtonStyled = styled("button")`
  ${getKind};
  ${getScale};
  cursor: pointer;
  margin: 3px 5px;
  border-radius: 3px;
  border: 1px solid ${kind.backgroundColor};
`;

export const Button = ({ children, ...props }) => (
  <ButtonStyled {...props}>{children}</ButtonStyled>
);

Button.propTypes = {
  scales: t.oneOf(["small", "normal", "big"]),
  kind: t.oneOf(["primary", "secondary", "cancel", "dark", "default"]),
  outline: t.bool
};

Button.defaultProps = {
  scales: "normal",
  kind: "default",
  outline: false
};
