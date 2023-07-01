
function Greeting(props) {
  console.log(props)
  return (
    <div>
      <h1 style={props.style}>Hi! {props.name}</h1>
    </div>
  );
}

export default Greeting;
