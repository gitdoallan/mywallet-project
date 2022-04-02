import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class WalletTable extends React.Component {
  render() {
    const { expenses } = this.props;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((e) => (
              <tr key={ e.id }>
                <td>{e.description}</td>
                <td>{e.tag}</td>
                <td>{e.method}</td>
                <td>{(+e.value).toFixed(2)}</td>
                <td>{e.exchangeRates[e.currency].name}</td>
                <td>{(+e.exchangeRates[e.currency].ask).toFixed(2)}</td>
                <td>{(+e.value * +e.exchangeRates[e.currency].ask).toFixed(2)}</td>
                <td>Real</td>
                <td>Editar</td>
                <td>Excluir</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = ({ wallet }) => wallet;

WalletTable.propTypes = {
  expenses: propTypes.arrayOf(propTypes.shape({
    id: propTypes.number.isRequired,
    description: propTypes.string.isRequired,
    value: propTypes.oneOfType([propTypes.string, propTypes.number]),
    currency: propTypes.string.isRequired,
    method: propTypes.string.isRequired,
    tag: propTypes.string.isRequired,
  })).isRequired,
};

export default connect(mapStateToProps)(WalletTable);
