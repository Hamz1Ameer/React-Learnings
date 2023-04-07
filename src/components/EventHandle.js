import React, { Component } from "react";

class EventHandle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Welcome",
    };
  }
  handler = () => {
    if (this.state.message === "Welcome") {
      this.setState({
        message: "Subscribed",
      }); //It will set new value for message
      document.getElementsByTagName("button")[0].innerHTML = "Unsubscibe"; //this will change the text in the button to Unsubscibe
    } else {
      this.setState({
        message: "Welcome",
      }); //It will set new value for message
      document.getElementsByTagName("button")[0].innerHTML = "Subscibe"; //this will change the text in the button to Subscibe.
    }
  };

  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        <button onClick={this.handler.bind(this)}>Subscibe</button>{" "}
        {/*First way of binding this*/}
        {/* <button onClick={() => this.handler()}>Subscibe</button>{" "} */}
        {/*second way of binding this*/}
        {/* In the third way of binding the event handler is binded in the constructor method itself
                inabove case:  //this.handler=this.handler.bind(this)//
                 */}
        {/* In the fourth case declaration of handler is done using an arrow function and it is called as regular handler
                    // onclick={this.handler} //
               */}
      </div>
    );
  }
}

export default EventHandle;
