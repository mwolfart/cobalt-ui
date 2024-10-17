import { HTMLAttributes, PropsWithChildren } from 'react';
import './styles.scss';

type Props = {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & PropsWithChildren &
  HTMLAttributes<HTMLHeadingElement>;

export const Heading = ({
  children,
  variant = 'h1',
  as,
  className: customClasses,
  ...props
}: Props) => {
  const className = `heading-base heading-${as ? as.replace('h', '') : variant.replace('h', '')} ${customClasses}`;

  switch (variant) {
    default:
    case 'h1':
      return (
        <h1 className={className} {...props}>
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 className={className} {...props}>
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3 className={className} {...props}>
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4 className={className} {...props}>
          {children}
        </h4>
      );
    case 'h5':
      return (
        <h5 className={className} {...props}>
          {children}
        </h5>
      );
    case 'h6':
      return (
        <h6 className={className} {...props}>
          {children}
        </h6>
      );
  }
};
