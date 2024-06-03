import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: ({ variant, onClick, children }: {
        variant: "primary" | "secondary" | "outlined";
        onClick: () => void;
    } & {
        children?: import('react').ReactNode;
    }) => import("react/jsx-runtime").JSX.Element;
    render: ({ ...args }: {
        variant: "primary" | "secondary" | "outlined";
        onClick: () => void;
    } & {
        children?: import('react').ReactNode;
    }) => import("react/jsx-runtime").JSX.Element;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const Outlined: Story;
