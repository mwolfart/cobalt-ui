import { HTMLAttributes, PropsWithChildren } from 'react';
import css from './typography.module.scss';

type Props = { variant?: 'default' | 'small' } & PropsWithChildren &
  HTMLAttributes<HTMLParagraphElement>;

export const Typography = ({
  children,
  variant = 'default',
  className,
  ...props
}: Props) => {
  const classes = `${css.paragraph} ${variant === 'small' ? css.small : ''} ${className}`;
  return (
    <p className={classes} {...props}>
      {children}
    </p>
  );
};
