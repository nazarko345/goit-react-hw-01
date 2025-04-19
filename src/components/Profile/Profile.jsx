import css from './Profile.module.css';

export default function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div className={css.profile}>
      <div className={css.profileBiggerWrapper}>
        <img className={css.profileImg} src={avatar} alt="User avatar" />
        <p className={css.profileTitle}>{name}</p>
        <p className={css.profileSubt}>{tag}</p>
        <p className={css.profileSubt}>{location}</p>
      </div>
      <ul className={css.profileList}>
        <li className={css.profileItem}>
          <span className={css.profileItemSubt}>Followers</span>
          <span className={css.profileItemSubt}>{stats.followers}</span>
        </li>
        <li className={css.profileItem}>
          <span className={css.profileItemSubt}>Views</span>
          <span className={css.profileItemSubt}>{stats.views}</span>
        </li>
        <li className={css.profileItem}>
          <span className={css.profileItemSubt}>Likes</span>
          <span className={css.profileItemSubt}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
