import styles from './NavBar.module.css';

function NavBar() {
  return (
    <div className={styles.navbarContainer}>
        <h1>LOGO</h1>
        <div >
            <ul className={styles.menuContainer}>
                <li>Home</li>
                <li>Menu</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar