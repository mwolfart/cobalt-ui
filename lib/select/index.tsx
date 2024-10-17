import { forwardRef } from 'react';
import { FaChevronDown } from 'react-icons/fa6';
import { FaInfoCircle } from 'react-icons/fa';
import css from './select.module.scss';
import inputCss from '../input-field/input-field.module.scss';

type Props = {
  options: { value: string; label: string }[];
  error?: string;
  wrapperClasses?: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export const Select = forwardRef<HTMLSelectElement, Props>(
  (
    { options, error, wrapperClasses, className: customClasses, ...props },
    ref
  ) => {
    const selectClasses = [
      inputCss.input,
      css.select,
      error ? css.error : '',
      customClasses,
    ].join(' ');
    return (
      <div className={[css.wrapper, wrapperClasses].join(' ')}>
        <div className={css.arrow}>
          <FaChevronDown />
        </div>
        <select ref={ref} className={selectClasses} {...props}>
          {options.map((option, i) => (
            <option key={i} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <div className={css.errortext}>
            <FaInfoCircle />
            {error}
          </div>
        )}
      </div>
    );
  }
);
