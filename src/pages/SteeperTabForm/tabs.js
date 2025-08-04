import TabOne from "./TabOne";
import TabThree from "./TabThree";
import TabTwo from "./TabTwo";

export const tabs = [
  {
    tabName: "TabOneText",
    componenet: TabOne,
  },
  {
    tabName: "TabTwoRadio",
    componenet: TabTwo,
  },
  {
    tabName: "TabThreeCheckbox",
    componenet: TabThree,
  },

  //* As much as i need . This is the sclable patterns */
];

export const inititalState = {
  name: "bappa saha",
  email: "bappa@gmail.com",
  password: "12345",
  phone:123456789,

  // second tab:
  gender: "male", //female,others
  theme: "dark", // light also
  // age: 25,
  
  //third tab
  address: "Thakurgaon",
  interests: ["loev", "game", "riding", "coding"],
};