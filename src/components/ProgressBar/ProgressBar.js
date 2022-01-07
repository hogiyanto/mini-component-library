/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    wrapper: {
      "--padding": "0",
      "--borderRadius": "4px",
    },
    bar: {
      "--height": "8px",
    },
  },
  medium: {
    wrapper: {
      "--padding": "0",
      "--borderRadius": "4px",
    },
    bar: {
      "--height": "12px",
    },
  },
  large: {
    wrapper: {
      "--padding": "4px",
      "--borderRadius": "8px",
    },
    bar: {
      "--height": "16px",
    },
  },
};

const ProgressBar = ({ value, size }) => {
  const style = SIZES[size];

  if (!style) {
    throw new Error("No style found for size: " + size);
  }

  return (
    <Wrapper
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={value}
      style={style.wrapper}
    >
      <VisuallyHidden>{value}</VisuallyHidden>
      <BarWrapper>
        <Bar value={value} style={{ ...style.bar, "--width": value + "%" }} />
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.gray50};
  border-radius: var(--borderRadius);
  padding: var(--padding);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const BarWrapper = styled.div`
  border-radius: 4px;

  /* Trim off corners when progress bar is near-full. */
  overflow: hidden;
`;

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
`;

export default ProgressBar;
