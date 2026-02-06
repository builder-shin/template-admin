'use client';

import PageContainer from '@/components/layout/page-container';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { BadgeCheck } from 'lucide-react';

export default function ExclusivePage() {
  return (
    <PageContainer>
      <div className='space-y-6'>
        <div>
          <h1 className='flex items-center gap-2 text-3xl font-bold tracking-tight'>
            <BadgeCheck className='h-7 w-7 text-green-600' />
            전용 공간
          </h1>
          <p className='text-muted-foreground'>
            환영합니다! 이 페이지에는 프로 요금제 조직을 위한 전용 기능이
            포함되어 있습니다.
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
    </PageContainer>
  );
}
