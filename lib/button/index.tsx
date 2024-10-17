import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import './styles.scss';

type Props = {
  variant: 'primary' | 'secondary' | 'outlined';
  onClick: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren;

export const Button = ({
  variant,
  onClick,
  children,
  className,
  ...props
}: Props) => {
  return (
    <button
      {...props}
      className={`button-${variant} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
