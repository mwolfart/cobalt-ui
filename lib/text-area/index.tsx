'use client';

import { forwardRef, PropsWithChildren, TextareaHTMLAttributes } from 'react';
import css from './textarea.module.scss';

type Props = {
  resize?: 'none' | 'both' | 'x' | 'y';
} & TextareaHTMLAttributes<HTMLTextAreaElement> &
  PropsWithChildren;

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ resize = 'both', className: customClasses, ...props }, ref) => {
    const className = `${css.textarea} ${css[`resize-${resize}`]} ${customClasses}`;
    return <textarea ref={ref} className={className} {...props} />;
  }
);
