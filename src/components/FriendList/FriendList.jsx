import PropTypes from 'prop-types'
import styles from './FriendList.module.css'

export const FriendList = ({ friends }) => {
	return (
		<ul className={styles.friend_list}>
            {friends.map(({id, isOnline, avatar, name}) => (
				<li className={styles.item} key={id}>
					{ isOnline ? <span className={styles.true}></span> : <span className={styles.false}></span>}
                    <img
                        className="avatar"
                        src={avatar}
                        alt="User avatar"
                        width="48"
                    />
                    <p className="name">{name}</p>
                </li>
            ))}
        </ul>
    );
};

FriendList.propTypes = {
	id: PropTypes.number,
	avatar: PropTypes.string,
	name: PropTypes.string,
	isOnline: PropTypes.bool
}
