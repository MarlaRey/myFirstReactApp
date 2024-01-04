import styles from './Header.module.scss'

export const Header = () => {
    return <header className={`${styles.headerWrapper} ${styles.headerFun}`}>
        <h1>Min<span> lækre</span> restaurant</h1>
        </header>
}