import styles from "./Statistics.module.css";
import PropTypes from 'prop-types'

export const Statistics = ({ stats, title }) => {
    return (
        <section className={styles.statistics}>
            {title && <h2 className={styles.title}>{title}</h2>}

            <ul className={styles.stat_list}>
                {stats.map(stat => (
                    <li style={{
                            backgroundColor: `#${Math.floor(
                                Math.random() * 16777215
                            ).toString(16)}`,
                        }} className={styles.item}key={stat.id}>
                        <span className={styles.label}>{stat.label}</span>
                        <span className={styles.percentage}>
                            {stat.percentage}%
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

Statistics.propTypes = {
	title: PropTypes.string,
	stats: PropTypes.arrayOf(PropTypes.shape({label: PropTypes.string, percentage: PropTypes.number}))
}
