import React from 'react';
import { connect } from 'react-redux';
import { userAction } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      btnDisabled: true,
      validEmail: false,
      validPass: false,
      emailInput: '',
      passInput: '',
    }
  }

  handleChange = ({ target: { value, name } } ) => {
    const emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const MIN_LENGTH = 6;
    const { validEmail, validPass } = this.state;
    if (name === 'email') {
      this.setState({ emailInput: value });
      if (value.match(emailValidator)) {
        this.setState({ validEmail: true });
      } else {
        this.setState({ validEmail: false });
      }
    }
    if (name === 'password') {
      this.setState({ passInput: value });
      if (value.length >= MIN_LENGTH) {
        this.setState({ validPass: true });
      } else {
        this.setState({ validPass: false });
      }
    }
    if (validEmail && validPass) {
      this.setState({ btnDisabled: false });
    } else {
      this.setState({ btnDisabled: true });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, history } = this.props;
    const { emailInput } = this.state;
    dispatch(userAction(emailInput));
    history.push('/carteira');
  }

  render() {
    const { btnDisabled } = this.state;
    return (
      <div id="login-main">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email"> E-mail:
            <input name="email" data-testid="email-input" type="text" onChange={this.handleChange} />
          </label>
          <br />
          <label htmlFor="password"> Senha: 
            <input name="password" data-testid="password-input" type="password" onChange={this.handleChange} />
          </label>
          <br />
          <button type="submit" disabled={btnDisabled}>Entrar</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({user}) => user;

export default connect(mapStateToProps)(Login);
