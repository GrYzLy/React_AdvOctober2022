import React, {Component} from 'react'

const Profile = (props) => {
  return (
      <div>
        <h1>Profile</h1>
        <h2>{props.user != null ? props.user.name : null}</h2>
        <h2><img src={props.user != null ? props.user.image : null}/></h2>
        <h2>{props.user != null ? props.user.age : null}</h2>
      </div>
  )
  
}



export default Profile;
