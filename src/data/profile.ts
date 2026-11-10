import type { Profile } from '../types/portfolio';

export const profile: Profile = {
  wordmark: 'JH',
  title: '안녕하세요,\n프론트엔드 개발자입니다.',
  description: '화면의 동작부터 데이터 흐름까지 고민합니다.',
  image: '/images/profile-placeholder.svg',
  imageAlt: '프로필 사진을 위한 임시 이미지',
  strengths: ['데이터 중심 UI', '공통 컴포넌트', 'API 연동'],
  // 실제 연락처를 입력하면 Contact 영역에 링크가 표시됩니다.
};
