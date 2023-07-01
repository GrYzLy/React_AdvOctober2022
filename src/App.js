import Greeting from "./Greeting/Greeting";
import GreetingArrow from "./Greeting/GreetingArrow";
import HelloWorldArrow from "./HelloWorld/HelloWorldArrow";
import HelloWorldClass from "./HelloWorld/HelloWorldClass";
import CounterClass from "./Counter/CounterClass";
function App() {
  
  return (
    <div className="App">
      {/* <HelloWorldClass /> */}
      {/* <HelloWorldArrow /> */}
      {/* <h1 style={{"color": "red"}}>Test</h1> */}

      
      {/* <Greeting name="Bartosz" style={{"color" : "blue"}}/>
      <Greeting name="Kuba" /> */}

      {/* <GreetingArrow name="Bartosz" style={{"color" : "blue"}}/>
      <GreetingArrow name="Kuba" /> */}

      <CounterClass />
    </div>
  );
}

export default App;
