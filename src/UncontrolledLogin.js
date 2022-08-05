import React from "react";

export class UncontrolledLogin extends React.Component {
  submit = (event) => {
    event.preventDefault();

    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const remember = event.target.elements.remember.checked;

    console.log({ username, password, remember });
  };

  render() {
    return (
      <div>
        <h3>Uncontrolled Login</h3>

        <form onSubmit={this.submit}>
          <label>Username</label>
          <input name="username"></input>

          <label>Password</label>
          <input name="password" type="password"></input>

          <label>Remember me</label>
          <input name="remember" type="checkbox"></input>

          <button name="login" type="submit">
            Login
          </button>
          <button name="reset" type="reset">
            Reset
          </button>
        </form>
      </div>
    );
  }
}
