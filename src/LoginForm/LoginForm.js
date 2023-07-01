import React, {Component} from 'react'
class LoginForm extends Component {
constructor() {
super()
this.state = {
  username : "",
  password : "",
  passwordConfirmation : "",
  email : "",
  errors : []
}

this.validatePasswordOnBlur = this.validatePasswordOnBlur.bind(this)

}  

validateNotEmpty(field, value)
{
  if(value.length <= 0)
  {
    return `${field} must be filled out!`
  }
}
validateUsernameOnBlur(event)
{
  console.log(event.target.value)
  
  const username = event.target.value
  const errors = this.state.errors

  let validate_result = this.validateNotEmpty("Username", username)
  if(validate_result)
  {
    this.setState({username : ""})

    if(!errors.includes(validate_result))
    {
      errors.push(validate_result)
    }
  }

  this.setState({username, errors})
}

validatePasswordOnBlur(event)
{
  const password = event.target.value
  const errors = this.state.errors

  let validate_result = this.validateNotEmpty("Password", password)
  if(validate_result)
  {
    this.setState({password : ""})
    if(!errors.includes(validate_result))
    {
      errors.push(validate_result)
    }
  }

  this.setState({password,errors})
}

validatePasswordConfirmation(password, passwordConfirmation)
{
  if(passwordConfirmation !== password)
  {
    return "Password must match!"
  }
}

validatePasswordConfirmationOnBlur(event)
{
  const passwordConfirmation = event.target.value
  const errors = this.state.errors
  let validate_result = this.validatePasswordConfirmation(this.state.password, passwordConfirmation)
  if(validate_result)
  {
    this.setState({passwordConfirmation : ""})
    if(!errors.includes(validate_result))
    {
      errors.push(validate_result)
    }
  }
}

displayErrors()
{
  return (
    <div>
      {this.state.errors.map((err,i) => <p key={i}>{err}</p>)}
    </div>
  )
}
render() {
  console.log(this)
  return (
    <div>
      <h1>Login form:</h1><br/>
      Username : <input type="text" onBlur={this.validateUsernameOnBlur.bind(this)} /><br />
      Password : <input type="text" onBlur={this.validatePasswordOnBlur}/><br />
      Password confirmation : <input type="text" onBlur={(event) => {this.validatePasswordConfirmationOnBlur(event)}} /><br />
      EMail : <input type="text" />
      <br />
      <button>Submit</button>
      {this.displayErrors()}
    </div>
  )
}

}

export default LoginForm;
