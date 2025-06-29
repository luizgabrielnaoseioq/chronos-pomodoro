import styles from "./styles.module.css";

export function Footer() {
    return <footer className={styles.footer}>
        <a href="">Entenda como funciona a técnica pomodoro</a>
        <a href="">Chronos Pomodoro &copy; {new Date().getFullYear()} - Desenvolvido por <a href="https://nazaxinfotech.com.br">Nazax Info Tech</a></a>
    </footer>;
}
