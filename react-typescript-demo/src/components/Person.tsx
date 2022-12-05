// type PersonProps = {
//   name: {
//     first: string;
//     last: string;
//   };
// };

// instead of defining props at the top of each file, we can define them in separate files and import as necessary.

// The bigger the project, the more sense it makes to tuck the type props away.

import PersonProps from "./Person.types";

const Person = (props: PersonProps) => {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  );
};

export default Person;
