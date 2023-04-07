import React from "react";
import EventHandle from "./components/EventHandle";
import TimeDate from "./components/TimeDate";
import ParentComponent from "./components/ChildToParent/ParentComponent";
import UserGreets from "./components/Conditional Rendering/UserGreets";

function App() {
  return (
    <div>
      <TimeDate />
      <EventHandle />
      <br />
      <ParentComponent />
      <UserGreets  IsLoggedIn={true}/>
    </div>
  );
}

export default App;
