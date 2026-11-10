import { profile } from '../../data/profile';
import styles from './Header.module.css';
import { Link, NavLink } from 'react-router';

export function Header() {
  return <header className={`container ${styles.header}`}>
    <Link to="/" className={styles.logo} aria-label="JH 메인 페이지">{profile.wordmark}<span>.</span></Link>
    <nav aria-label="주요 메뉴"><NavLink to="/profile">Profile</NavLink><NavLink to="/projects">Projects</NavLink><NavLink to="/contact">Contact</NavLink></nav>
  </header>;
}
