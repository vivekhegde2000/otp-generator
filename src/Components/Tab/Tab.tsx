import React from "react";

interface TabProps {
  tabs: { label: string; value: string }[];
  activeTab: string;
  onTabChange: (value: string) => void;
}

const Tab: React.FC<TabProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="flex border-b mb-[2rem]">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          className={`py-2 px-4 focus:outline-none text-xl ${
            activeTab === tab.value
              ? "border-b-2 border-primary font-semibold text-primary  "
              : "text-gray-500"
          }`}
          onClick={() => onTabChange(tab.value)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tab;
