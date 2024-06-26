import React, { useState } from "react";
import "./MyPageHomeLayout.css";
import MyProfileLayout from "./ProfileLayout";
import MyBillingLayout from "./BillingLayout";
import MyHistoryLayout from "./HistoryLayout";
import MyWithdrawalLayout from "./WithdrawalLayout";
import Calendar from "./Calendar";

interface MySidebarLayoutProps {
  children?: React.ReactNode;
}

const MySidebarLayout = ({ children }: MySidebarLayoutProps) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [selectedMode, setSelectedMode] = useState<string | null>("Mode 1");
  const [activeItem, setActiveItem] = useState<number | null>(0);

  const handleToggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const handleModeChange = (mode: string, index: number) => {
    setSelectedMode(mode);
    setActiveItem(index);
  };

  return (
    <div className="grid">
      <button className="toggle-btn" onClick={handleToggleSidebar}>
        {isSidebarVisible ? "Hide Sidebar" : "Show Sidebar"}
      </button>
      <div className={`side ${isSidebarVisible ? "visible" : ""}`}>
        {React.Children.map(children, (child, index) =>
          React.isValidElement(child) ? (
            <div
              className={`sidebarList ${activeItem === index ? "active" : ""}`}
              onClick={() => handleModeChange(`Mode ${index + 1}`, index)}
            >
              {child}
            </div>
          ) : (
            child
          )
        )}
      </div>
      <div className="content">
        {selectedMode === "Mode 1" && <MyProfileLayout />}
        {selectedMode === "Mode 2" && <MyBillingLayout />}
        {selectedMode === "Mode 3" && <Calendar />}
        {selectedMode === "Mode 4" && <MyHistoryLayout />}
        {selectedMode === "Mode 5" && <MyWithdrawalLayout />}
      </div>
    </div>
  );
};

export default MySidebarLayout;
