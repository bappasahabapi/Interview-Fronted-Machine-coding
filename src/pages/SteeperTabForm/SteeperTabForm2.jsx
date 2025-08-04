import { useState } from "react";
import { inititalState, tabs } from "./tabs";



const SteeperTabForm2 = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState(inititalState);

  //Now make a Active tab component

  const ActiveTabComponent = tabs[activeTab].componenet;

  return (
    <div>
      <h1>SteeperTabForm2</h1>

      <div>
        <li>First i have to make Parent Component Named SteeperTabForm</li>
        <li>I need to create the subTab components</li>
        <li>
          Next task is to render this in UI.
          <ul>To do First I have to create tabs objects</ul>
          <ul>I need to make which tab is active based on index</ul>
          <ul>When click to the tab header setActive to the header</ul>
        </li>
        <li>
          Crate all the state to the parent so that we can easily hadle the form <br />
          <ul>I need to pass the data , setData to the components</ul>
        </li>
      </div>
      <hr />
      {/* Tabs Headers */}
      <div className="tab-header">
        {tabs.map((tab, index) => (
          <div key={tab.tabName}>
            <div>
              <button
                className={`tab-btn ${
                  activeTab === index ? "active-tab" : " "
                }`}
                onClick={() => setActiveTab(index)}
              >
                {tab.tabName}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs Body for render the elements */}
      <div className="tab-body">
        <ActiveTabComponent data={data} setData={setData} />
      </div>
    </div>
  );
};

export default SteeperTabForm2;
