import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    fontSize: 12 / 16,
    height: 24,
    iconSize: 16,
    borderThickness: 1,
  },
  large: {
    fontSize: 18 / 16,
    height: 36,
    iconSize: 24,
    borderThickness: 2,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const style = SIZES[size];

  if (!style) {
    throw new Error("No style found for size: " + size);
  }

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ "--size": style.iconSize + "px" }}>
        <Icon id={icon} strokeWidth={1} size={style.iconSize} />
      </IconWrapper>
      <TextInput
        style={{
          "--borderThickness": style.borderThickness + "px",
          "--fontSize": style.fontSize + "rem",
          "--height": style.height + "px",
          "--width": width + "px",
        }}
        type="text"
        placeholder={placeholder}
      />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  width: var(--width);
  display: inline-block;
  position: relative;
  color: ${COLORS.gray500};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  width: var(--size);
  height: var(--size);
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
`;

const TextInput = styled.input`
  width: var(--width);
  height: var(--height);
  border: none;
  outline-offset: 2px;
  padding-left: var(--height);
  font-size: var(--fontSize);
  font-weight: 700;
  color: inherit;
  border-bottom: var(--borderThickness) solid;

  &::placeholder {
    font-weight: 400;
  }
`;

export default IconInput;
