export type InputSupportedTypes =
  | 'text'
  | 'number'
  | 'password'
  | 'currency'
  | 'zip'
  | 'tel'
  | 'email';

export const parseType = (type: InputSupportedTypes): string => {
  switch (type) {
    case 'currency':
    case 'zip':
      return 'text';
    default:
      return type;
  }
};

export const getFormattedValue = (value: string, type: InputSupportedTypes) => {
  switch (type) {
    case 'tel': {
      const numeric = value.replace(/[^0-9]/g, '').slice(0, 10);
      const lastFour = numeric.slice(-4);
      const middle = numeric.slice(-7, -4);
      const first = numeric.slice(-10, -7);
      if (first) {
        return `(${first}) ${middle}-${lastFour}`;
      } else if (middle) {
        return `${middle}-${lastFour}`;
      }
      return lastFour;
    }
    case 'zip': {
      const alphanumeric = value.replace(/[^0-9a-zA-Z]/gi, '');
      const isNumericOnly = alphanumeric.match(/^[0-9]*$/);
      const isCanada = !isNumericOnly;
      if (isCanada) {
        const firstThree = alphanumeric.slice(0, 3).toUpperCase();
        const lastThree = alphanumeric.slice(3, 6).toUpperCase();
        if (lastThree.length) {
          return `${firstThree} ${lastThree}`;
        }
        return firstThree;
      } else {
        const firstFive = alphanumeric.slice(0, 5);
        const lastFour = alphanumeric.slice(5, 9);
        if (lastFour.length) {
          return `${firstFive}-${lastFour}`;
        } else {
          return firstFive;
        }
      }
    }
    default:
      return value;
  }
};
