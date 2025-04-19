import css from './FriendListItem.module.css';

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
      <p className={css[isOnline ? 'Online' : 'Offline']}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </>
  );
}
