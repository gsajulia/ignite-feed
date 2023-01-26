import styles from "./Sidebar.module.css";

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1674736646936-a858cfda0b46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
                alt="profile background"
            />

            <div className={styles.profile}>
                <strong> Julia Santi </strong>
                <span> Web developer</span>
            </div>

            <footer>
                <a href="#"> Editar seu perfil</a>
            </footer>
        </aside>
    );
}
