import css from './FriendListItem.module.css';
import { clsx } from 'clsx';

const Online = 'Online';
const Offline = 'Offline';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <img
        src={avatar}
        className={css.FriendListItemImg}
        alt="Avatar"
        width="48"
      />
      <p className={css.FriendListItemSubt}>{name}</p>
      <p className={clsx(isOnline ? Online : Offline)}>
        {isOnline ? Online : Offline}
      </p>
    </>
  );
}
