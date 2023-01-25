import PropTypes from 'prop-types'

export const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">
            {friends.map(({id, isOnline, avatar, name}) => (
                <li className="item" key={id}>
                    <span className="status">{isOnline}</span>
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
