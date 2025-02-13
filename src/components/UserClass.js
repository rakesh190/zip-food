// This is the old way of writing a class component
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // Initialize the state
    this.state = {
      userInfo: {
        name: "dummy",
        avatar_url: "dummy image",
        location: "dummy location",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/rakesh190");
    const json = await data.json();
    const { name, avatar_url, location } = json;
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("Component Updated");
  }

  componentWillUnmount() {
    console.log("Component Unmounted");
  }
  render() {
    const { name, avatar_url, location } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        {/* <h3>Count: {this.state.count}</h3> */}
        {/* <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Count ++
        </button> */}
        <h3>Location: {location}</h3>
        <h4>contact: @rakesshhh</h4>
        <img className="profile-logo" src={avatar_url} alt="avatar" />
      </div>
    );
  }
}

export default UserClass;

/*
Constructor(dummy) -> Render(dummy) -> ComponentDidMount(API call and updates this.setState) -> Mounting Complete

-> setState()->Render(HTML is loaded with new API data) -> ComponentDidUpdate  -> Update Complete
*/
// In the above snippet, we have a class component UserClass that renders a user card. The class component is written in the old way of writing class components. We can convert this class component to a functional component using hooks. Here is the updated code:
