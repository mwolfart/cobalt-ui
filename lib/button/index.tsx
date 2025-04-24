'use client';

import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import css from './button.module.scss';

type Props = {
  variant: 'primary' | 'secondary' | 'outlined' | 'link';
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
      className={[css.button, css[variant], className].join(' ')}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
