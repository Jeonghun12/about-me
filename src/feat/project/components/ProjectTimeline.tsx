import { projects } from '../../../data/projects';
import styles from './ProjectTimeline.module.css';
import { Link } from 'react-router';

export function ProjectTimeline({ compact = false }: { compact?: boolean }) {
  const sorted = [...projects].sort((a, b) => b.startDate.localeCompare(a.startDate));
  const years = [...new Set(sorted.map(project => project.startDate.slice(0, 4)))];
  if (compact) {
    return <section id="projects" aria-labelledby="projects-title" className={`container ${styles.section}`}>
      <div className={styles.heading}><h2 id="projects-title">Project Timeline</h2><p>경험의 흐름</p></div>
      <ol className={`${styles.timeline} ${styles.compact}`}>
        {years.map(year => <li key={year} className={styles.item}>
          <span className={styles.dot} aria-hidden="true" />
          <span className={styles.year}>{year}</span>
          <Link className={styles.overviewLink} to="/projects" aria-label={`${year}년 ${sorted.filter(project => project.startDate.startsWith(year)).map(project => project.title).join(', ')} 프로젝트 보기`}>
            <span>{sorted.filter(project => project.startDate.startsWith(year)).map(project => project.title).join(' / ')}</span><span aria-hidden="true">→</span>
          </Link>
        </li>)}
      </ol>
    </section>;
  }
  return <section id="projects" aria-labelledby="projects-title" className={`container ${styles.section}`}>
    <div className={styles.heading}><h2 id="projects-title">Project Timeline</h2><p>경험의 흐름</p></div>
    <ol className={styles.timeline}>{sorted.map(project => <li key={project.slug} className={styles.item}>
      <span className={styles.dot} aria-hidden="true"/><div className={styles.year}>{project.startDate.slice(0, 4)}</div><div className={styles.detail}>
        <div className={styles.titleRow}><h3>{project.status === 'published' && project.href ? <a href={project.href}>{project.title} <span aria-hidden="true">↗</span></a> : project.title}</h3>{project.status === 'draft' && <span className={styles.status}>정리 중</span>}</div>
        <p className={styles.summary}>{project.summary}</p><p className={styles.period}>{project.period}</p>
      </div>
    </li>)}</ol>
  </section>;
}
