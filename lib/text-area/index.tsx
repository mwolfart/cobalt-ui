import { PropsWithChildren, TextareaHTMLAttributes } from 'react';
import './styles.scss';

type Props = {
  resize?: 'none' | 'both' | 'x' | 'y';
} & TextareaHTMLAttributes<HTMLTextAreaElement> &
  PropsWithChildren;

export const TextArea = ({ resize = 'both', ...props }: Props) => {
  const className = `textarea resize-${resize}`;
  return <textarea className={className} {...props} />;
};
