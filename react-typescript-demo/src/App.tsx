import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Button from "./components/Button";
import Input from "./components/Input";
import Container from "./components/Container";
import LoggedIn from "./components/state/LoggedIn";
import User from "./components/state/User";
import User2 from "./components/state/User2";
import Counter from "./components/reducer & context/Counter";
import ThemeContextProvider from "./components/reducer & context/context type inference/ThemeContext";
import Box from "./components/reducer & context/context type inference/Box";
import ComponentUser from "./components/reducer & context/context future value/ComponentUser";
import ComponentUserContextProvider from "./components/reducer & context/context future value/ComponentUserContext";
import { ClassCounter } from "./components/class/ClassCounter";
import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    { first: "Bruce", last: "Wayne" },
    { first: "Clark", last: "Kent" },
    { first: "Diana", last: "Prince" },
  ];

  return (
    <div className="App">
      <Greet name="Miki" isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="success" />
      <Heading>Placeholder text</Heading>
      <Button
        handleClick={(event, id) => {
          console.log("You", "clicked", "me");
        }}
      />
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar>
      <Input
        value=""
        handleChange={(event) => {
          console.log(event.target);
        }}
      />
      <Container
        styles={{ border: "1px solid black", padding: "1rem", margin: "1rem" }}
      />
      <LoggedIn />
      <User />
      <User2 />
      <Counter />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <ComponentUserContextProvider>
        <ComponentUser />
      </ComponentUserContextProvider>
      <ClassCounter message="The counter value is " />
      <Private isLoggedIn={true} component={Profile} />
    </div>
  );
}

export default App;
