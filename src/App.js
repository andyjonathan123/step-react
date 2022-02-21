import React, { Component } from "react"
import axios from 'axios'




class App extends Component {
  constructor () {
    super()
    
    this.state = {
      user : []


    }
  }

  getUser = async () => {
    let response = await axios.get('https://jsonplaceholder.typicode.com/users/1')
    this.setState({
      user : response.data
    })
  }

  componentDidMount(){
    this.getUser()
  }
  render() {
    
    return (
      <div>
        <p>Perkenalkan Nama saya adalah {this.state.user.name} </p>
        <p>Perkenalkan Nama saya adalah {this.state.user.username} </p>
        
      </div>
    );
  }
}
export default App;
