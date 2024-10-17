import { HTMLAttributes, PropsWithChildren } from 'react';
import './styles.scss';

type Props = { variant?: 'default' | 'small' } & PropsWithChildren &
  HTMLAttributes<HTMLParagraphElement>;

export const Typography = ({
  children,
  variant = 'default',
  className,
  ...props
}: Props) => {
  const classes = `paragraph ${variant === 'small' ? 'small' : ''} ${className}`;
  return (
    <p className={classes} {...props}>
      {children}
    </p>
  );
};
