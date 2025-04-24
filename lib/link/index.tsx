'use client';

import { AnchorHTMLAttributes, ElementType } from 'react';
import css from './link.module.scss';
import buttonCss from '../button/button.module.scss';

type Props = {
  as?: 'a' | 'button';
  Component?: ElementType;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link = ({
  as = 'a',
  Component,
  className: customClasses,
  ...props
}: Props) => {
  const className = `${as === 'button' ? `${css.button} ${buttonCss.button} ${buttonCss.primary}` : css.anchor} ${customClasses}`;
  if (Component) {
    return <Component {...props} className={className} />;
  }
  return <a {...props} className={className} />;
};
