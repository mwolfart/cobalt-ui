import { PropsWithChildren } from 'react';

export type TabProps = {
  title: string;
} & PropsWithChildren;

export const Tab = ({ children }: TabProps) => {
  return <div>{children}</div>;
};
