import React, {Component} from 'react'
import Message from './Message'
class SecretMessage extends Component {
constructor() {
super()
this.state = {
  showSecret : false
}
}  
secretMessage()
{
  // if(this.state.showSecret)
  // {
    return <p>Secret message</p>
  // }

  // return
}
render() {
  return (
    <div>
      <h1>Secret Message</h1><br/>
      <button onClick={() => this.setState({showSecret : !this.state.showSecret})}>
      {this.state.showSecret ? "Hide!" : "Show!"}</button>
      {/* {this.state.showSecret ? this.secretMessage() : null} */}
      {/* {this.state.showSecret ? <Message /> : null} */}
      {/* {this.secretMessage()} */}
      {!this.state.showSecret || <Message />}
           
    </div>
  )
}

}

export default SecretMessage;
