import styles from "./Profile.module.css";
import PropTypes from 'prop-types'

export const Profile = ({ avatar, username, tag, location, stats }) => {
	const statsData = [
		{ statsKey: 'Followers', amount: stats.followers },
		{ statsKey: 'Views', amount: stats.views },
		{ statsKey: 'Likes', amount: stats.likes }
	]
    return (
        <div className={styles.profile}>
            <div className={styles.description}>
                <img
                    src={avatar}
                    alt="User avatar"
                    className={styles.avatar}
                />
                <p className={styles.name}>{username}</p>
                <p className={styles.tag}>@{tag}</p>
                <p className={styles.location}>{location}</p>
            </div>

			<ul className={styles.stats}>
				{statsData.map(data => {
					return (<li key={data.statsKey}>
						<span className={styles.label}>{data.statsKey }</span>
						<span className={styles.quantity}>{data.amount}</span>
					</li>)
				})}
            </ul>
        </div>
    );
};

Profile.propTypes = {
	username: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	avatar: PropTypes.string.isRequired,
	stats: PropTypes.shape({followers: PropTypes.number, views: PropTypes.number, likes: PropTypes.number})
}