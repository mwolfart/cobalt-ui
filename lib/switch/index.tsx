import { forwardRef } from 'react';
import css from './switch.module.scss';

type Props = {
  label?: string;
  wrapperClasses?: React.CSSProperties;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Switch = forwardRef<HTMLInputElement, Props>(
  ({ label, wrapperClasses, ...props }, ref) => {
    return (
      <label className={`${css.wrapper} ${wrapperClasses}`}>
        <span>
          <input {...props} type="checkbox" ref={ref} />
          <span />
        </span>
        {label}
      </label>
    );
  }
);
