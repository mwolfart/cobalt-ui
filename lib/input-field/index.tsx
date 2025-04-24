'use client';

import {
  forwardRef,
  InputHTMLAttributes,
  PropsWithChildren,
  useState,
} from 'react';
import css from './input-field.module.scss';
import {
  getFormattedValue,
  InputSupportedTypes,
  parseType,
} from './input-field.helper';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

type Props = {
  type?: InputSupportedTypes;
  error?: string;
  wrapperClasses?: string;
} & InputHTMLAttributes<HTMLInputElement> &
  PropsWithChildren;

export const InputField = forwardRef<HTMLInputElement, Props>(
  (
    {
      type = 'text',
      value,
      onChange,
      error,
      className: inputClasses,
      wrapperClasses,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const [innerValue, setInnerValue] = useState(value || '');

    const innerType = parseType(type);
    const passwordType = showPassword ? 'text' : 'password';

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInnerValue(getFormattedValue(e.target.value, type));
      if (onChange) {
        onChange(e);
      }
    };

    return (
      <div
        className={`${css.wrapper} ${error ? css.error : ''} ${wrapperClasses}`}
      >
        <input
          type={type === 'password' ? passwordType : innerType}
          value={innerValue}
          onChange={onChangeHandler}
          className={inputClasses}
          ref={ref}
          {...props}
        />
        {type === 'password' && (
          <button onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
        )}
        {error && <span>{error}</span>}
      </div>
    );
  }
);
