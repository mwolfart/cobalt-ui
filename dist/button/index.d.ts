import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

type Props = {
    variant: 'primary' | 'secondary' | 'outlined' | 'link';
    onClick: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren;
export declare const Button: ({ variant, onClick, children, className, ...props }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
