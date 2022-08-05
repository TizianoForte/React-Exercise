
import React from "react";

export class Login extends React.Component {
  state = {
    username: "",
    password: "",
    remember: false,
    disabled: true
  };

  handleSetChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const type = event.target.type;
    const checked = event.target.checked;


    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  componentDidUpdate(){
    console.log(this.state)
  }


  onLogin = () => {
    this.setState({
      username: this.state.username,
      password: this.state.password
    })
  }

  resetAll = () => {
    this.setState({
      username: '',
      password:'',
      remember: false,
      disabled: true
    })
  }



  render() {
    return (
      <div>
        <label>Username</label>
        <input
          name="username"
          value={this.state.username}
          onChange={this.handleSetChange}
        ></input>

        <label>Password</label>
        <input
          name="password"
          type="password"
          value={this.state.password}
          onChange={this.handleSetChange}
        ></input>

        <label>Remember me</label>
        <input
          name="remember"
          type="checkbox"
          checked={this.state.remember}
          onChange={this.handleSetChange}
        ></input>
        <br/>
        <button name="login" disabled={!(this.state.username && this.state.password)} onClick={this.onLogin}>Login</button>
        <button name="reset" onClick={this.resetAll}>Reset</button>
      </div>
    );
  }
}

export default Login