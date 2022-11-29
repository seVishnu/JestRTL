type GreetProp = {
  name?: String;
};
const Greet = (props: GreetProp) => {
  return <div>Hello {props.name}</div>;
};

export default Greet;
