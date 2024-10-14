import { HTMLAttributes, PropsWithChildren } from 'react';
import './styles.scss';

type Props = { variant?: 'default' | 'small' } & PropsWithChildren &
  HTMLAttributes<HTMLParagraphElement>;

export const Typography = ({
  children,
  variant = 'default',
  ...props
}: Props) => {
  const classes = `paragraph ${variant === 'small' ? 'small' : ''}`;
  return (
    <p className={classes} {...props}>
      {children}
    </p>
  );
};
