import React from 'react';
import {styled} from "../stitches.config";

interface ButtonProps {
  label: string;
}

const StyledButton = styled('button', {
  backgroundColor: '$yellow',
  borderRadius: '9999px',
  fontSize: '13px',
  border: '0',
});

export const Button = ({
    label,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      type="button"
      {...props}
    >
      {label}
    </StyledButton>
  );
};
