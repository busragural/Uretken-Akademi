import React, { Component } from 'react'

import Loading from './Loading';
import axios from 'axios'

export default class Users extends Component {

    state={users:[], isLoaded:false}
    componentDidMount() {
        setTimeout(() => {
          
          axios.get("https://jsonplaceholder.typicode.com/users").then(
            (result) => {
              this.setState({
                isLoaded: true,
                users: result.data,
              });
            },
            (error) => {
              this.setState({
                isLoaded: true
              });
            }
          );
        }, 1000);
      }

  render() {
   const {isLoaded, users}= this.state;

    
    if(isLoaded ==false ){
        return <div><Loading/></div>
    }
    else{
        return (
            <div>
              {users.map(user => 
                  <li key={user.id}>
                    {user.username} - {user.name}
                  </li>
                  )}
            </div>
          )  
    }
  }
}