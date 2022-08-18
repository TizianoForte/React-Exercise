import React from "react";

export class Login extends React.Component {
  state = {
    username: "",
    password: "",
    remember: false,
    disabled : true
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const type = event.target.type;
    const checked = event.target.checked;

    this.setState({
      [name]:type === 'checkbox' ? checked : value,
    });
  };

  componentDidUpdate() {
    console.log(this.state)
  }


  onLogin = () => {
    this.setState({
      username: this.state.username,
      password: this.state.password
    })
  };

  render() {
    const ButtonStyle = {
        backgroundColor: this.state.password.length < 8 ? "red" : "green",
        color: "white",
      };
    
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
        <button style={ButtonStyle} name="login" disabled={!(this.state.username && this.state.password)} onClick={this.onLogin}>Login</button>
      </div>
    )
  }
}

export default Login;