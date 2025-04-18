import css from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead className="thead">
        <tr className="trHead">
          <th className="th">Type</th>
          <th className="th">Amount</th>
          <th className="th">Currency</th>
        </tr>
      </thead>

      <tbody className="tbody">
        {items.map((item, index) => {
          return (
            <tr className="trBody" key={index}>
              <td className="td">{item.type}</td>
              <td className="td">{item.amount}</td>
              <td className="td">{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
