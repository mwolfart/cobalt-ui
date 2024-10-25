import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: ({ variant, onClick, children, className, ...props }: {
        variant: "primary" | "secondary" | "outlined" | "link";
        onClick: () => void;
    } & import('react').ButtonHTMLAttributes<HTMLButtonElement> & {
        children?: import('react').ReactNode;
    }) => import("react/jsx-runtime").JSX.Element;
    render: ({ ...args }: {
        variant: "primary" | "secondary" | "outlined" | "link";
        onClick: () => void;
    } & import('react').ButtonHTMLAttributes<HTMLButtonElement> & {
        children?: import('react').ReactNode;
    }) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const Outlined: Story;
export declare const Link: Story;
