import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { walletActionCurrencies } from '../actions/index';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';

class Wallet extends React.Component {
  async componentDidMount() {
    const { dispatch } = this.props;
    const result = await fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => error);
    const resultsKey = Object.keys(result);
    const filteredResults = resultsKey.filter((element) => element !== 'USDT');
    dispatch(walletActionCurrencies(filteredResults));
  }

  render() {
    return (
      <div>
        <Header />
        <span>TrybeWallet</span>
        <WalletForm />
      </div>
    );
  }
}

Wallet.propTypes = {
  dispatch: propTypes.func.isRequired,
};

const mapStateToProps = ({ wallet }) => wallet;

export default connect(mapStateToProps)(Wallet);
