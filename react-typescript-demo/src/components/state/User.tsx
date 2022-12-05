// typing of the useState hook when the initial value type differs from a possible future value's type

import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const User = () => {
  // since the initial value of the user state is null,
  // TS won't let us assign any other type to the user state

  // To remedy this, we should apply a union "type1 | type2",
  // but type it generically:
  // const [state, setState] = useState<type1 | type2>(initVal)
  const [user, setUser] = useState<null | AuthUser>(null);
  const handleLogin = () => {
    setUser({
      name: "Miki",
      email: "a@a.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div
      style={{
        backgroundColor: "pink",
        padding: "1rem",
        width: "300px",
        marginTop: "1rem",
      }}
    >
      <button onClick={handleLogin}>Login</button>
      <p>
        {/* we have to use optional chaining when displaying values from a state which maybe has the property we want to display */}
        <span>username: {user?.name}</span>{" "}
        <span style={{ marginLeft: "20px" }}>email: {user?.email} </span>
      </p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default User;
