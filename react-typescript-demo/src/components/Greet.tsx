type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;
  return (
    <div>
      {props.isLoggedIn ? (
        <>
          <h2>Welcome {props.name} to the TS tutorial</h2>
          <p>You have {messageCount} messages.</p>
        </>
      ) : (
        <h2>Welcome Guest!</h2>
      )}
    </div>
  );
};

export default Greet;
