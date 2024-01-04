import styles from './Greeting.module.scss'
export const Greeting = props => {
    return(
        <><div className={styles.greetingWrapper}>
        <h3 className={styles.flipper}>{props.greeting} {props.name}</h3>
        </div>
        </>
    )
}

