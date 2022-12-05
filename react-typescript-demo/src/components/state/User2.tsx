import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const User2 = () => {
  // here, we'll deal with type assertion.
  // for example, we know that once set, the user state will never again be null.

  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => {
    setUser({
      name: "Miki",
      email: "a@a.com",
    });
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
        {/* Since we've asserted the type as AuthUser, we don't need to check whether it contains the name and email properties */}
        {/* TS will know that we're rendering an empty AuthUser object, and won't complain */}
        <span>username: {user.name}</span>{" "}
        <span style={{ marginLeft: "20px" }}>email: {user?.email} </span>
      </p>
    </div>
  );
};

export default User2;
