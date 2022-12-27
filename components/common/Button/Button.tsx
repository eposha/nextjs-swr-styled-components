import type { FC, MouseEventHandler, ReactNode } from 'react';

import { StyledButton } from 'styles/buttons';

interface Props {
  view?: 'primary' | 'secondary' | 'outlined' | 'primary-red';
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<Props> = ({
  view = 'primary',
  fullWidth = false,
  type = 'button',
  disabled,
  children,
  onClick,
}) => {
  return (
    <StyledButton
      className={`${view} ${fullWidth && 'full-width'}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
