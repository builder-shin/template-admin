'use client';

import PageContainer from '@/components/layout/page-container';
import { workspacesInfoContent } from '@/config/infoconfig';

export default function WorkspacesPage() {
  return (
    <PageContainer
      pageTitle='워크스페이스'
      pageDescription='워크스페이스를 관리하고 전환합니다'
      infoContent={workspacesInfoContent}
    >
      <div className='text-muted-foreground p-8 text-center'>
        워크스페이스 관리 기능이 비활성화되었습니다.
      </div>
    </PageContainer>
  );
}
