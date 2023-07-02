import React, {Component} from 'react'

import Profile  from './Profile'
class FetchApi extends Component {
constructor() {
super()

this.state = {
  data : null
}
}

loadProfiles()
{
  fetch('http://localhost:39635/Profile')
  .then(response => response.json())
  .then(data => this.setState({data:data}))
}

componentDidMount()
{
  this.loadProfiles()
}

render() {
  console.log(this.state.data)
  return (
    <div>
      <h1>Fetch Api</h1>
      {this.state.data != null ? <Profile user={this.state.data} /> : null}

      {/* <div>
        <h1>Profile</h1>
        <h2>{this.state.data != null ? this.state.data.name : null}</h2>
        <h2><img src={this.state.data != null ? this.state.data.image : null}/></h2>
        <h2>{this.state.data != null ? this.state.data.age : null}</h2>


      </div> */}
    </div>
  )
}

}

export default FetchApi;
