import styles from './IntroSection.module.css';
import { Link } from 'react-router';

export function IntroSection() {
  return (
  
    <section 
      aria-labelledby="intro-title" 
      className={`container ${styles.intro}`}
    >
      <div>
        <h2 id="intro-title">
          복잡한 데이터를,<br/>명확한 경험으로<span>.</span>
        </h2>
        <p>통신 운영·관리 화면을 개발하며<br/>조회 흐름과 공통 UI를 개선합니다.</p>
        <Link 
          className="text-link" 
          to="/projects"
        > 
          프로젝트 보기 <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <div className={styles.line} aria-hidden="true" />
    </section>
  
  );
}
