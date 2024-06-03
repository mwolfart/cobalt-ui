import { PropsWithChildren } from 'react';

type Props = {
    variant: 'primary' | 'secondary' | 'outlined';
    onClick: () => void;
} & PropsWithChildren;
export declare const Button: ({ variant, onClick, children }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
