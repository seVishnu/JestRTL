import { GreetProp } from "./greet.types";
const Greet = (props: GreetProp) => {
  return <div>Hello {props.name ? props.name : "guest"}</div>;
};

export default Greet;
