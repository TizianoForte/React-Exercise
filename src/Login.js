import React from "react";

export class Login extends React.Component {
  state = {
    username: "",
    password: "",
    remember: false,
  };

  handleInputChange = (event) => {
    const valule = event.target.valule;
    const name = event.target.name;
    const type = event.target.type;
    const checked = event.target.checked;

    this.setState({
      [name]:type === 'checkbox' ? checked : valule,
    });
  };

  componentDidUpdate() {
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <label>Username :</label>
        <input
          name="username"
          value={this.state.username}
          onChange={this.handleInputChange}
        ></input><br></br>
        <label>Password :</label> 
        <input
          name="password"
          type="password"
          valule={this.state.password}
          onChange={this.handleInputChange}
        ></input><br></br>
        <label>Remember Me:</label>
        <input
          name="remember"
          type="checkbox"
          value={this.state.remember}
          onChange={this.handleInputChange}
        ></input>
      </div>
    )
  }
}

export default Login;


//Nella console del broswer continua a darmi undefined sia il nome che la passw il flag invece funziona.