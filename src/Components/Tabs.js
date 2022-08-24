import React from "react";
/* eslint-disable */

function Tabs({
  onAllListClick,
  onCompletedListClick,
  onActiveListClick,
  activeTab,
}) {
  return (
    <>
      <button
        type="button"
        aria-pressed="false"
        className="tabs"
        onClick={onAllListClick}
        style={activeTab == "ALL" ? { backgroundColor: "green" } : {}}
      >
        Show all tasks
      </button>

      <button
        type="button"
        aria-pressed="false"
        className="tabs"
        onClick={onActiveListClick}
        style={activeTab == "ACTIVE" ? { backgroundColor: "green" } : {}}
      >
        Show Active tasks
      </button>

      <button
        type="button"
        aria-pressed="false"
        className="tabs"
        onClick={onCompletedListClick}
        style={activeTab == "COMPLETED" ? { backgroundColor: "green" } : {}}
      >
        Show Completed tasks
      </button>
    </>
  );
}

export default Tabs;
