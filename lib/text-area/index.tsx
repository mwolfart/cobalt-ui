import { forwardRef, PropsWithChildren, TextareaHTMLAttributes } from 'react';
import './styles.scss';

type Props = {
  resize?: 'none' | 'both' | 'x' | 'y';
} & TextareaHTMLAttributes<HTMLTextAreaElement> &
  PropsWithChildren;

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ resize = 'both', className: customClasses, ...props }, ref) => {
    const className = `textarea resize-${resize} ${customClasses}`;
    return <textarea ref={ref} className={className} {...props} />;
  }
);
