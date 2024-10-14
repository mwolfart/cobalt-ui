import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import './styles.scss';

type Props = {
  variant: 'primary' | 'secondary' | 'outlined';
  onClick: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren;

export const Button = ({ variant, onClick, children, ...props }: Props) => {
  return (
    <button {...props} className={`button-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};
