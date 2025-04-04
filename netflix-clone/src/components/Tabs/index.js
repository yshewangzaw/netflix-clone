import React, { useState } from "react";
import Tabs from "./Tabs";
import { tableLables } from "./constant";

function Tabcomponent() {
  const [activeTab, setActiveTab] = useState(tableLables.CANCEL_AT_ANYTIME);

  const onClickTab = (tab) => {
    setActiveTab(tab);
    console.log("Active tab changed to:", tab);
  };

  console.log("Tabcomponent rendered with activeTab:", activeTab);

  return (
    <div>
      <Tabs activeTabName={activeTab} onclick={onClickTab} />
    </div>
  );
}

export default Tabcomponent;
