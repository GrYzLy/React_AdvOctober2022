import React, {Component} from 'react'
import Greeting from '../Greeting/Greeting'
class RouterJS extends Component {
constructor() {
super()
}

RouterTo = path => {
  let paths = path.split('/').map(p => p.toLowerCase()).slice(1)
  return paths
}

render() {
  let pathsOuter = this.RouterTo(window.location.pathname)

  
  return (
    <div>
      <h1>RouterJS</h1>
      {window.location.href}
  {window.location.pathname}
  <br />
  {pathsOuter.includes('greetings') ? <Greeting name="Bartosz" /> : null}
    </div>
  )
}

}

export default RouterJS;
