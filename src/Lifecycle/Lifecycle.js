import React, {Component} from 'react'
class Lifecycle extends Component {
constructor() {
super()
this.state = { cycle : 0}
console.log("constructor")

// setInterval(
//   () => this.setState({cycle: this.state.cycle + 1}),
//   1

// )
}  

componentDidUpdate(prevProps, prevState)
{
  console.log("component did update")
  console.log("prevProps:", prevProps)
  console.log("prevState", prevState)
  this.setState({cycle : this.state.cycle + 1})


}

componentDidMount()
{
console.log("component did mount")
this.setState({cycle : this.state.cycle + 1})
}

render() {
  console.log("render")
  return (
    <div>
      <h1>Lifecycle</h1>
      Cycle: {this.state.cycle}<br />
      <button onClick={() => this.setState({cycle : this.state.cycle + 1})}>+1</button>
    </div>
  )
}

}

export default Lifecycle;
