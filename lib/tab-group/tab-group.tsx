'use client';

import { useState } from 'react';
import { TabProps } from './tab';
import css from './tab-group.module.scss';

type Props = {
  children: React.ReactElement<TabProps> | React.ReactElement<TabProps>[];
};

export const TabGroup = ({ children }: Props) => {
  const tabs = Array.isArray(children) ? children : [children];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={css.wrapper}>
      <div className={css.selector}>
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`${css.tabButton} ${activeTab === i ? css.activeTab : ''}`}
          >
            {tab.props.title}
          </button>
        ))}
      </div>
      <div className={css.tabContent}>{tabs[activeTab]}</div>
    </div>
  );
};
