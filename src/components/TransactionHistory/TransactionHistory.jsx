import css from './TransactionHistory.module.css';

export default function TransactionHistory({ items}) {
  return (
    <table className={css.table}>
      <thead className={css.thead}>
        <tr className={css.trHead}>
          <th className={css.th}>Type</th>
          <th className={css.th}>Amount</th>
          <th className={css.th}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tbody}>
        {items.map((item) => {
          return (
            <tr className={css.trBody} key={item.id}>
              <td className={css.td}>{item.type}</td>
              <td className={css.td}>{item.amount}</td>
              <td className={css.td}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
