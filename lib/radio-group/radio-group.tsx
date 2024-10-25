import { forwardRef } from 'react';

import { RadioOption } from './radio-option';
import css from './radio-group.module.scss';

type Props = {
  name: string;
  options: { label: string; value: string }[];
  value: string;
  orientation?: 'horizontal' | 'vertical';
  onChange?: (value: string) => unknown;
  containerStyle?: React.CSSProperties;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

export const RadioGroup = forwardRef<HTMLDivElement, Props>(
  (
    { name, options, value, onChange, containerStyle, orientation, ...props },
    ref
  ) => {
    const innerChange = (value: string) => {
      if (onChange) {
        onChange(value);
      }
    };

    const className = [
      css.radioWrapper,
      orientation === 'vertical' ? css.vertical : '',
      containerStyle,
    ].join(' ');

    return (
      <div ref={ref} className={className}>
        {options.map((option, i) => (
          <RadioOption
            key={i}
            name={name}
            label={option.label}
            value={option.value}
            checked={option.value === value}
            onChange={() => innerChange(option.value)}
            {...props}
          />
        ))}
      </div>
    );
  }
);
