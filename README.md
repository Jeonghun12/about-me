# JH. Portfolio

화이트·핑크 포트폴리오입니다. React, TypeScript, Vite, React Router와 CSS Modules로 구성했습니다.

## 페이지

- `/`: 메인 (프로필 → 소개 → 연도별 프로젝트 요약 → 연락처)
- `/profile`: 프로필과 개발 방향
- `/projects`: 프로젝트 타임라인
- `/contact`: 연락처
- 그 외 주소: 페이지 없음 안내

JH 로고는 메인(`/`)으로, 상단 메뉴는 각 개별 페이지로 이동합니다. 메인 타임라인은 연도별 요약을 표시하고 프로젝트 페이지로 연결합니다. 각 페이지의 제목과 활성 메뉴가 갱신되며 브라우저 뒤로가기를 지원합니다.

## 실행

```sh
npm install
npm run dev
```

터미널에 표시되는 로컬 주소를 엽니다. Node.js 22.12 이상을 권장합니다.

```sh
npm run typecheck
npm run build
npm run preview
```

## 콘텐츠 수정

- `src/data/profile.ts`: 소개, 사진, 강점, 이메일과 GitHub URL. 연락처를 입력하면 실제 링크가 나타납니다.
- `src/data/projects.ts`: 타임라인 항목과 기간. `published`와 `href`를 함께 설정하면 프로젝트 링크가 표시됩니다.
- `src/styles/tokens.css`: 핑크 색상, 배경, 공통 너비.
- `src/feat/main/`: 메인 페이지와 소개 섹션.
- `src/feat/profile/`: 프로필 페이지와 프로필 섹션.
- `src/feat/project/`: 프로젝트 페이지와 타임라인.
- `src/feat/contact/`: 컨택트 페이지와 연락처 섹션.
- 각 기능의 `page/`에는 페이지, `components/`에는 컴포넌트와 CSS Modules를 둡니다. 메인은 각 기능의 섹션을 가져와 조합합니다.
- `src/components/layout/`: 공통 Header와 Footer.

프로필 사진은 현재 자리 표시자입니다. 프로젝트 상세 콘텐츠와 연락처는 준비 상태로 표시합니다. 폰트는 우선 시스템 폰트를 사용하며 Pretendard 파일은 아직 포함하지 않았습니다. 프로젝트 상세 페이지와 배포는 다음 단계입니다. 프로젝트 참여 기간은 공개 전 최종 확인이 필요합니다.

배포 시 `/profile`, `/projects`, `/contact` 직접 접속과 새로고침을 위해 정적 호스트에서 미일치 파일 요청을 `index.html`로 전달하는 SPA fallback을 설정해야 합니다. Vite 로컬 개발·미리보기 서버는 해당 동작을 제공합니다.
