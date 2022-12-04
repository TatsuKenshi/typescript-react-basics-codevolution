type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  return (
    <div>
      {props.isLoggedIn ? (
        <>
          <h2>Welcome {props.name} to the TS tutorial</h2>
          <p>You have {props.messageCount} messages.</p>
        </>
      ) : (
        <h2>Welcome Guest!</h2>
      )}
    </div>
  );
};

export default Greet;
