import { InputHTMLAttributes, PropsWithChildren, useState } from 'react';
import './styles.scss';
import {
  getFormattedValue,
  InputSupportedTypes,
  parseType,
} from './input-field.helper';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

type Props = {
  type?: InputSupportedTypes;
} & InputHTMLAttributes<HTMLInputElement> &
  PropsWithChildren;

export const InputField = ({
  type = 'text',
  value,
  onChange,
  ...props
}: Props) => {
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
    <div className="input-wrapper">
      <input
        type={type === 'password' ? passwordType : innerType}
        value={innerValue}
        onChange={onChangeHandler}
        {...props}
      />
      {type === 'password' && (
        <button onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </button>
      )}
    </div>
  );
};
