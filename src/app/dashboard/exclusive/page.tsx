'use client';

import PageContainer from '@/components/layout/page-container';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { useOrganization, Protect } from '@clerk/nextjs';
import { BadgeCheck, Lock } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function ExclusivePage() {
  const { organization, isLoaded } = useOrganization();

  return (
    <PageContainer isloading={!isLoaded}>
      <Protect
        plan='pro'
        fallback={
          <div className='flex h-full items-center justify-center'>
            <Alert>
              <Lock className='h-5 w-5 text-yellow-600' />
              <AlertDescription>
                <div className='mb-1 text-lg font-semibold'>
                  프로 요금제 필요
                </div>
                <div className='text-muted-foreground'>
                  이 페이지는 <span className='font-semibold'>프로</span>{' '}
                  요금제를 사용하는 조직만 이용할 수 있습니다.
                  <br />
                  구독을 업그레이드하려면&nbsp;
                  <a className='underline' href='/dashboard/billing'>
                    결제 및 요금제
                  </a>
                  를 참조하세요.
                </div>
              </AlertDescription>
            </Alert>
          </div>
        }
      >
        <div className='space-y-6'>
          <div>
            <h1 className='flex items-center gap-2 text-3xl font-bold tracking-tight'>
              <BadgeCheck className='h-7 w-7 text-green-600' />
              전용 공간
            </h1>
            <p className='text-muted-foreground'>
              환영합니다,{' '}
              <span className='font-semibold'>{organization?.name}</span>! 이
              페이지에는 프로 요금제 조직을 위한 전용 기능이 포함되어 있습니다.
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>전용 페이지를 방문해 주셔서 감사합니다</CardTitle>
              <CardDescription>
                프로 요금제를 구독 중인 조직에 소속되어 있습니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='text-lg'>좋은 하루 보내세요!</div>
            </CardContent>
          </Card>
        </div>
      </Protect>
    </PageContainer>
  );
}
