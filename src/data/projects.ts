import type { Project } from '../types/portfolio';

export const projects: readonly Project[] = [
  { slug: 'pharos', title: 'Pharos', startDate: '2026-09-03', period: '2026.09 — 2026.10', summary: '통계·이력 조회 흐름 개선과 공통 확인 UI', status: 'sample', href: '/projects/pharos' },
  { slug: 'phylax', title: 'Phylax', startDate: '2026-04-15', period: '2026.04 —', summary: 'Collector 관리와 상세 편집 화면 개발', status: 'draft' },
  { slug: 'pcf-ems', title: 'PCF EMS', startDate: '2025-03-10', period: '2025.03 — 2026.04', summary: '통신 운영·관리 UI 개발', status: 'draft' },
  { slug: 'nwdaf', title: 'NWDAF', startDate: '2024-08-08', period: '2024.08 — 2025.03', summary: 'React 기반 운영 화면 개발', status: 'draft' },
  { slug: 'pg-ems', title: 'PG EMS', startDate: '2022-09-13', period: '2022.09 — 2024.07', summary: '운영 화면 개발 및 유지보수', status: 'draft' },
];
