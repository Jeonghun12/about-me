import { ProjectTimeline } from '../components/ProjectTimeline';

export function ProjectsPage() {
  return (<>
    
    <div className="container page-heading">
      <p className="eyebrow">Projects</p>
        <h1>경험을 쌓고,<br />더 나은 흐름을 만듭니다<span>.</span></h1>
        <p>참여한 프로젝트와 그 안에서의 역할을 소개합니다.</p>
    </div>
    <ProjectTimeline />
    
    
</>);
}
