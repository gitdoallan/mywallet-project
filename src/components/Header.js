import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email, expensesTotal, currency } = this.props;
    return (
      <header>
        <div>
          Hello,
          <span data-testid="email-field">{ email }</span>
        </div>
        <div data-testid="total-field">{ expensesTotal.total.toFixed(2) }</div>
        <div data-testid="header-currency-field">{ currency }</div>
      </header>
    );
  }
}

const mapStateToProps = ({
  user: { email }, wallet: { expensesTotal,
    currency } }) => ({ email, expensesTotal, currency });

Header.propTypes = {
  email: propTypes.string.isRequired,
  currency: propTypes.string.isRequired,
  expensesTotal: propTypes.shape({
    total: propTypes.number.isRequired,
  }),
};

Header.defaultProps = {
  expensesTotal: { total: 0, ask: 0 },
};

export default connect(mapStateToProps)(Header);
