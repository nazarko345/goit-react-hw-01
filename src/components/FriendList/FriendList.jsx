import css from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem.jsx';

export default function FriendList({ friends }) {
  return (
    <ul className={css.FriendList}>
      {friends.map((friend) => (
        <li className={css.FriendListItem} key={friend.id}>
          <FriendListItem
            info={friend}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}
