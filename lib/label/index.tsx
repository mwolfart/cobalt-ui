import { LabelHTMLAttributes, PropsWithChildren } from 'react';
import css from './label.module.scss';

type Props = {
  text: string;
  required?: boolean;
} & PropsWithChildren<LabelHTMLAttributes<HTMLLabelElement>>;

export const Label = ({
  text,
  required,
  children,
  className: customClasses,
  ...props
}: Props) => {
  const className = [css.label, customClasses].join(' ');
  return (
    <label className={className} {...props}>
      <span>
        {text}
        {required && <small>*</small>}
      </span>
      {children}
    </label>
  );
};
