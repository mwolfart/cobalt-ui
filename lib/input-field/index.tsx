import {
  forwardRef,
  InputHTMLAttributes,
  PropsWithChildren,
  useState,
} from 'react';
import './styles.scss';
import {
  getFormattedValue,
  InputSupportedTypes,
  parseType,
} from './input-field.helper';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

type Props = {
  type?: InputSupportedTypes;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement> &
  PropsWithChildren;

export const InputField = forwardRef<HTMLInputElement, Props>(
  ({ type = 'text', value, onChange, error, ...props }, ref) => {
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
      <div className={`input-wrapper ${error ? 'error' : ''}`}>
        <input
          type={type === 'password' ? passwordType : innerType}
          value={innerValue}
          onChange={onChangeHandler}
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
