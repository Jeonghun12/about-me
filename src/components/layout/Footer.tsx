import { profile } from '../../data/profile';
import styles from './Footer.module.css';

export function Footer() {
  return <footer className={`container ${styles.footer}`}><p><strong>{profile.wordmark}<span>.</span></strong><span className={styles.divider}>/</span>Frontend Developer</p><a href="#main" aria-label="현재 페이지 맨 위로 이동">Back to top ↑</a></footer>;
}
