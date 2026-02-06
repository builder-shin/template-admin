'use client';

import PageContainer from '@/components/layout/page-container';
import { billingInfoContent } from '@/config/infoconfig';

export default function BillingPage() {
  return (
    <PageContainer
      infoContent={billingInfoContent}
      pageTitle='결제 및 요금제'
      pageDescription='구독 및 사용 한도를 관리합니다'
    >
      <div className='text-muted-foreground p-8 text-center'>
        결제 기능이 비활성화되었습니다.
      </div>
    </PageContainer>
  );
}
