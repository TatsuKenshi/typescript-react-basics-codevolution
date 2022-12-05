import { useState } from "react";

const LoggedIn = () => {
  // TS can determine the state's initial value's type,
  // and infer (enforce) it throughout the component
  // thus, we can't have string methods, assign number values, etc

  // because isLogged in is typed as boolean,
  // the setIsLogged setter function is typed as
  // React.Dispatch<React.SetStateAction<boolean>>

  // Type inference works good for simple states with known initial values and types like string, number, boolean
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <br />
      <br />
      <button onClick={handleLogout}>Logout</button>
      <div>user is {isLoggedIn ? "logged in" : "logged out"}</div>
    </div>
  );
};

export default LoggedIn;
