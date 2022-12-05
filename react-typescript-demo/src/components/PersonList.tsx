import { Name } from "./Person.types";

type PersonListProps = {
  // names: {
  //   first: string;
  //   last: string;
  // }[];

  // instead of having names defined as an array of objects with first and last properties (both strings),
  // we can define names as the Name array we imported at the top
  names: Name[];
};

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h2 key={name.first}>
            {name.first} {name.last}{" "}
          </h2>
        );
      })}
    </div>
  );
};

export default PersonList;
