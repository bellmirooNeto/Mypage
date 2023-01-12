import styles from '../styles/Card.module.css'

export default function Card (props) {
    return (
        <div className={styles.Card}>
            <div className={styles.Header}>
                <span className={styles.Title}>{props.title}</span>
            </div>
            <div className={styles.Content}>
                {props.children}
            </div>
        </div>
    )
}