import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { walletActionCurrencies } from '../actions/index';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import WalletTable from '../components/WalletTable';
import { fetchApiFiltered } from '../helpers/api';

class Wallet extends React.Component {
  async componentDidMount() {
    const { dispatch } = this.props;
    const filteredResults = await fetchApiFiltered();
    dispatch(walletActionCurrencies(filteredResults));
  }

  render() {
    return (
      <div>
        <Header />
        <span>TrybeWallet</span>
        <WalletForm />
        <WalletTable />
      </div>
    );
  }
}

Wallet.propTypes = {
  dispatch: propTypes.func.isRequired,
};

const mapStateToProps = ({ wallet }) => wallet;

export default connect(mapStateToProps)(Wallet);
