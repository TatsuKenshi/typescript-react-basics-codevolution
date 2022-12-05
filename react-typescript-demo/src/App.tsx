import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Button from "./components/Button";
import Input from "./components/Input";
import Container from "./components/Container";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    { first: "Bruce", last: "Wayne" },
    { first: "Clark", last: "Kent" },
    { first: "Princess", last: "Diana" },
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
    </div>
  );
}

export default App;
