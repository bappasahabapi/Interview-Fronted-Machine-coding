/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Interests } from "../components/Interests";
import { Profile } from "../components/Profile";
import { Setting } from "../components/Setting";

const initialData = {
  name: "BAPPA",
  age: 24,
  email: "test@",
  address: "skfjdslkf",

  interests: ["coding", "music", "cricket"],

  theme: "dark",
};

export default function TabForm() {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState({
    // name: "name is required",
  });

  const tabs = [
    {
      name: "Profile",
      component: Profile,
       validate: () => {
        const err = {};
        if (!data.name || data.name.length ===0) {
          err.name = "Your Name is not valid";
        }
        if (data.age<18) {
          err.age = "You are under 18";
        }
        if (data.address==='') {
          err.address = "Address should not be empty";
        }
        setErrors(err)
        return err.name || err.age || err.address ? false : true
      },
    },
    {
      name: "Interests",
      component: Interests,
      validate: () => {
        const err ={};
        if(data.interests.length<1){
          err.interests="Select at least one interest"
        }
         setErrors(err)
        return err.interests ? false : true
      },
     
    },
    {
      name: "Settings",
      component: Setting,
      validate: () => {
        return false;
      },
    },
  ];

  const handlePreviousClick = () => {
    setActiveTab((preTab) => preTab - 1);
  };
  const handleNextClick = () => {
    // setActiveTab((preTab) => preTab + 1);
    if(tabs[activeTab].validate()){
    setActiveTab((preTab) => preTab + 1);
    }
  };
  const handleSubmitClick = () => {
    console.log(data);
  };

  const ActiveTabComponent = tabs[activeTab].component;
  const lastTab = tabs.length - 1;

  return (
    <div>
    <u><b>Problem:4 Tab Form | Steeper Form</b></u> 
      <h1>Tab Form</h1>
      <div className="tab-header">
        {tabs.map((t, index) => (
          <button
            key={t.name}
            // onClick={() => setActiveTab(index)}
            // validate the tab 
            onClick={()=>tabs[activeTab].validate() && setActiveTab(index)}
            className={`tab-btn ${activeTab === index ? "active-tab" : ""}`}
          >
            {t.name}
          </button>
        ))}
      </div>
      <div className="tab-body">
        <ActiveTabComponent data={data} setData={setData} errors={errors} />
      </div>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        {activeTab > 0 && (
          <button onClick={handlePreviousClick}>Previous</button>
        )}
        {activeTab < tabs.length - 1 && (
          <button onClick={handleNextClick}>Next</button>
        )}
        {activeTab === lastTab && (
          <button onClick={handleSubmitClick}>Submit</button>
        )}
      </div>
    </div>
  );
}
