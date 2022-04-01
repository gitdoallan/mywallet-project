import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email, expenses, currency } = this.props;
    return (
      <header>
        <div>Hello, <span data-testid="email-field">{ email }</span></div>
        <div data-testid="total-field">{ +expenses }</div>
        <div data-testid="header-currency-field">{ currency }</div>
      </header>
    );
  }
}

const mapStateToProps = ({ user: { email }, wallet: { expenses, currency } }) => ({ email, expenses, currency });

export default connect(mapStateToProps)(Header);
