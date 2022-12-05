import { useContext } from "react";
import { ComponentUserContext } from "./ComponentUserContext";

const ComponentUser = () => {
  const userContext = useContext(ComponentUserContext);

  const handleLogin = () => {
    // if (userContext) {
    //   userContext.setUser({
    //     name: "Miki",
    //     email: "a@a.com",
    //   });
    // }

    userContext.setUser({
      name: "Miki",
      email: "a@a.com",
    });
  };

  const handleLogout = () => {
    // if (userContext) {
    //   userContext.setUser(null);
    // }

    userContext.setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      {/* <p>User name is {userContext?.user?.name}</p> */}
      {/* <p>User email is {userContext?.user?.email}</p> */}
      <p>User name is {userContext.user?.name}</p>
      <p>User email is {userContext.user?.email}</p>
    </div>
  );
};

export default ComponentUser;

// the commented lines rely on type checking:
// export const ComponentUserContext = createContext<ComponentUserContextType | null>(null);

// their alternatives rely on type assertion:
// export context ComponentUserContext = createContext({} as ComponentUserContextType);
