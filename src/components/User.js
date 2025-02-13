import { useState } from "react";
const User = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div className="user-card">
      <h2>Name: {props.name}</h2>
      <h3>Count: {count}</h3>
      <h3>Location: Fremont</h3>
      <h4>contact: @rakesshhh</h4>
    </div>
  );
};

export default User;
