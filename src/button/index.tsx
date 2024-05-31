import { PropsWithChildren } from 'react';
import './styles.scss';

type Props = {
  variant: 'primary' | 'secondary' | 'outlined';
  onClick: () => void;
} & PropsWithChildren;

const Button = ({ variant, onClick, children }: Props) => {
  return (
    <button className={`button-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
