'use client';

import PageContainer from '@/components/layout/page-container';
import { teamInfoContent } from '@/config/infoconfig';

export default function TeamPage() {
  return (
    <PageContainer
      pageTitle='Team Management'
      pageDescription='Manage your workspace team, members, roles, security and more.'
      infoContent={teamInfoContent}
    >
      <div className='text-muted-foreground p-8 text-center'>
        팀 관리 기능이 비활성화되었습니다.
      </div>
    </PageContainer>
  );
}
