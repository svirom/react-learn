import headerImg from '../assets/quiz-logo.png';
import styles from '../styles/Header.module.scss';

export default function Header() {
  return(
    <header className={styles.header}>
      <img src={headerImg} alt="Logo" />
      <h1>Reactquiz</h1>
    </header>
  );
}