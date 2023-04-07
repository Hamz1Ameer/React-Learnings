import React, { Component } from "react";

class UserGreets extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     IsLoggedIn: true,
  //   };
  // }   //we can use this constructor method to create islogin or else we can also use the props.

  render() {
    //  //using variables:
    // let message = <div>Welcome Ameer</div>;
    // if (this.props.IsLoggedIn === true) {
    //   message = <div>Welcome Ameer</div>;
    // } else {
    //   message = <div>Welcome All</div>;
    // }
    // return message;

    // //using conditional operators:
    // return this.props.IsLoggedIn ? (
    //   (<div>Welcome Ameer</div>)
    // ) : (
    //   (<div>Welcome All</div>)
    // )

    // // using if else Statements:
    // if (this.props.IsLoggedIn === true) {
    //   return <div>Welcome Ameer</div>;
    // } else {
    //   return <div>Welcome All</div>;
    // }

    // //using && (logical And): but in this uproach it will only render if the condition is true and it willn't render anything if the confidion is false.
    return this.props.IsLoggedIn && <div>Welcome Ameer</div>;
  }
}

export default UserGreets;
