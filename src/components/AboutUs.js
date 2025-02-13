import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    //console.log("parent constructor");
  }

  componentDidMount() {
    //console.log("parent componentDidMount");
  }
  render() {
    console.log("parent render");
    return (
      <div>
        <h1>About Us</h1>
        <p>We are a team of developers who love to build web applications.</p>
        <User name={"Rakesh (function)"} />
        <UserClass name={"First (Class)"} />
        <div>
          LoggedIn User
          {/* fetch userContext in class based components */}
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        {/* <UserClass name={"Second (Class)"} />
        <UserClass name={"Third (Class)"} /> */}
      </div>
    );
  }
}

// const AboutUs = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <p>We are a team of developers who love to build web applications.</p>
//       <User name={"Rakesh (function)"} />
//       <UserClass name={"Rakesh (Class)"} />
//     </div>
//   );
// };

/*
----- React Component Lifecycle -----
- Parent Constructor
- Parent Render
- First Child constructor
- First Child render
- Second Child constructor
- Second Child render
- <DOM is updated in a Single Batch>
- First Child componentDidMount
- Second Child componentDidMount
- Parent componentDidMount
*/

export default AboutUs;
