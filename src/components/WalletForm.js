import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { walletActionExpenses, walletActionExpensesTotal } from '../actions/index';
import { fetchApi } from '../helpers/api';

const INIT_STATE = {
  value: 0,
  description: '',
  currency: 'USD',
  method: 'Cartão de crédito',
  tag: 'Alimentação',
};

class WalletForm extends React.Component {
  constructor() {
    super(); this.state = { ...INIT_STATE, id: 0, exchangeRates: {} };
  }

  componentDidMount() {
    const { id } = this.props; this.setState({ id });
  }

  handleChange = (event) => {
    const { id, value } = event.target; this.setState({ [id]: value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { id } = this.state; const { dispatch } = this.props;
    const result = await fetchApi();
    const expenses = { ...this.state, exchangeRates: result };
    dispatch(walletActionExpenses(expenses));
    const askPrice = expenses.exchangeRates[expenses.currency].ask;
    const expensesConverted = expenses.value * askPrice;
    dispatch(walletActionExpensesTotal({ total: expensesConverted, ask: askPrice }));
    this.setState({ ...INIT_STATE, id: id + 1 });
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <label htmlFor="value">
            Valor
            <input
              onChange={ this.handleChange }
              type="number"
              data-testid="value-input"
              id="value"
              value={ value }
            />
          </label>
          <label htmlFor="description">
            Descrição
            <input
              onChange={ this.handleChange }
              type="text"
              data-testid="description-input"
              id="description"
              value={ description }
            />
          </label>
          <label htmlFor="currency">
            Moeda
            <select
              onChange={ this.handleChange }
              id="currency"
              value={ currency }
            >
              { currencies.map((e) => (
                <option key={ e } value={ e }>{ e }</option>
              ))}
            </select>
          </label>
          <label htmlFor="method">
            Forma de pagamento
            <select
              onChange={ this.handleChange }
              data-testid="method-input"
              id="method"
              value={ method }
            >
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
              <option>Dinheiro</option>
            </select>
          </label>
          <label htmlFor="tag">
            Categoria
            <select
              onChange={ this.handleChange }
              data-testid="tag-input"
              id="tag"
              value={ tag }
            >
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
          <button type="submit">Adicionar despesa</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ wallet }) => wallet;

WalletForm.propTypes = {
  currencies: propTypes.arrayOf(propTypes.string).isRequired,
  dispatch: propTypes.func.isRequired,
  id: propTypes.number.isRequired,
};

export default connect(mapStateToProps)(WalletForm);
