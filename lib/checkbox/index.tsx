import { forwardRef } from 'react';
import css from './checkbox.module.scss';

type Props = { label: string } & React.InputHTMLAttributes<HTMLInputElement>;

export const Checkbox = forwardRef<HTMLInputElement, Props>(
  ({ label, ...props }, ref) => {
    return (
      <label className={css.wrapper}>
        <input ref={ref} type="checkbox" {...props} />
        <span className={css.checkmark}></span>
        {label}
      </label>
    );
  }
);
