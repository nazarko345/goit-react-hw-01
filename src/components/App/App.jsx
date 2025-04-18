import css from './App.module.css';
import Profile from '../Profile/Profile.jsx';
import FriendList from '../FriendList/FriendList.jsx';
import TransactionHistory from '../TransactionHistory/TransactionHistory.jsx';

import user from '../../userData.json';
import friends from '../../friends.json';
import transactions from '../../transactions.json';

export default function App() {
  return (
    <div className={css.app}>
      <Profile
        name={user.username}
        tag={user.tag}
        location={user.location}
        image={user.avatar}
        stats={user.stats}
      />
      <FriendList friends={friends} />
      
      <TransactionHistory items={transactions} />
    </div>
  );
}
