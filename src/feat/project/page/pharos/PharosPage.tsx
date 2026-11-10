import { Link } from 'react-router';
import styles from './PharosPage.module.css';

const sections = [
  {
    id: 'problem', number: '01', title: '문제',
    description: '전체 데이터를 조회한 뒤 브라우저에서 검색·정렬·페이징을 처리하던 화면에서, 조회량이 증가하며 15~20초의 지연이 발생하는 경우가 기록되었습니다.',
  },
  {
    id: 'analysis', number: '02', title: '분석과 선택',
    description: '필요한 페이지의 데이터만 요청하도록 조회 흐름을 바꾸는 방향을 잡았습니다. 당시 비교한 대안과 선택 근거는 실제 작업 내용을 확인해 보완할 예정입니다.',
  },
  {
    id: 'action', number: '03', title: '구현',
    description: '검색 조건·페이지·정렬 정보를 API에 전달하고, 반환된 현재 페이지를 표시하도록 구성했습니다. 입력 중인 필터와 적용된 조건을 분리하고, 정렬을 바꾸면 첫 페이지로 이동하도록 흐름을 정리했습니다.',
  },
  {
    id: 'result', number: '04', title: '결과와 한계',
    description: '서버에서 처리한 페이지 결과를 표시하는 구조로 변경했습니다. 개선 후 응답 시간과 전송량은 아직 검증된 수치가 없어, 측정 조건과 결과를 확보한 뒤 추가할 예정입니다.',
  },
];

export function PharosPage() {
  return (
    <article className={`container ${styles.page}`}>
      <Link to="/projects" className={styles.back}>← 프로젝트 목록</Link>
      <header className={styles.header}>
        <p className="eyebrow">PHAROS / SAMPLE CASE STUDY</p>
        <h1>데이터 조회 흐름을<br />다시 설계하다<span>.</span></h1>
        <p className={styles.lead}>통계·이력 화면의 검색, 정렬, 페이지 이동을 정리한 경험입니다.</p>
        <dl className={styles.metadata}>
          <div><dt>프로젝트</dt><dd>Pharos</dd></div>
          <div><dt>담당 영역</dt><dd>통계·이력 조회 화면</dd></div>
          <div><dt>기술</dt><dd>React · TypeScript</dd></div>
        </dl>
      </header>

      <p className={styles.notice}>샘플 페이지입니다. 기존 작업 기록을 바탕으로 구성했으며, 담당 범위·화면·성과 자료는 추가 확인 후 보완합니다.</p>

      <figure className={styles.preview}>
        <div aria-hidden="true" className={styles.flow}>
          <div><small>BEFORE</small><strong>전체 데이터 조회</strong><span>브라우저에서 검색·정렬·페이징</span></div>
          <span className={styles.arrow}>→</span>
          <div><small>AFTER</small><strong>현재 페이지 조회</strong><span>조회 조건을 API에 전달</span></div>
        </div>
        <figcaption>조회 구조 개념도 — 전체 데이터 조회에서 조건에 맞는 페이지 조회로 전환</figcaption>
      </figure>

      <nav aria-label="문제 해결 과정" className={styles.navigation}>
        {sections.map(section => <a key={section.id} href={`#${section.id}`}>{section.number} {section.title}</a>)}
      </nav>

      {sections.map(section => (
        <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`} className={styles.section}>
          <span className={styles.number} aria-hidden="true">{section.number}</span>
          <div><h2 id={`${section.id}-title`}>{section.title}</h2><p>{section.description}</p></div>
        </section>
      ))}

      <div className={styles.bottom}><Link className="text-link" to="/projects">← 프로젝트 목록으로 돌아가기</Link></div>
    </article>
  );
}
