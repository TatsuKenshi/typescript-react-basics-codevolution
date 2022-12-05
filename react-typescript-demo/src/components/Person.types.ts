// type PersonProps = {
//   name: {
//     first: string;
//     last: string;
//   };
// };

// for the sake of reusability, we can also break types into smaller units, and have them contain each other. Smth like this:

export type Name = {
  first: string;
  last: string;
};

type PersonProps = {
  name: Name;
};

// now, we can export and use the Name type independent of the PersonProps.

export default PersonProps;
