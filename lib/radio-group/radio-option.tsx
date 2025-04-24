'use client';

import { forwardRef } from 'react';
import css from './radio-group.module.scss';

type Props = { label: string } & React.InputHTMLAttributes<HTMLInputElement>;

export const RadioOption = forwardRef<HTMLInputElement, Props>(
  ({ label, disabled, checked, onChange, ...props }, ref) => {
    const labelClasses = [
      css.radioLabel,
      checked && !disabled ? css.labelChecked : '',
      disabled ? css.labelDisabled : '',
    ].join(' ');

    const innerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!disabled && onChange) {
        onChange(e);
      }
    };

    return (
      <label className={labelClasses}>
        <input
          ref={ref}
          type="radio"
          onChange={innerChange}
          checked={checked}
          disabled={disabled}
          {...props}
        />
        {label}
      </label>
    );
  }
);
