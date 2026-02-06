'use client';

import PageContainer from '@/components/layout/page-container';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { useOrganization } from '@clerk/nextjs';
import { PricingTable } from '@clerk/nextjs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info } from 'lucide-react';
import { billingInfoContent } from '@/config/infoconfig';

export default function BillingPage() {
  const { organization, isLoaded } = useOrganization();

  return (
    <PageContainer
      isloading={!isLoaded}
      access={!!organization}
      accessFallback={
        <div className='flex min-h-[400px] items-center justify-center'>
          <div className='space-y-2 text-center'>
            <h2 className='text-2xl font-semibold'>선택된 조직이 없습니다</h2>
            <p className='text-muted-foreground'>
              결제 정보를 보려면 조직을 선택하거나 새로 만드세요.
            </p>
          </div>
        </div>
      }
      infoContent={billingInfoContent}
      pageTitle='결제 및 요금제'
      pageDescription={`${organization?.name}의 구독 및 사용 한도를 관리합니다`}
    >
      <div className='space-y-6'>
        {/* Info Alert */}
        <Alert>
          <Info className='h-4 w-4' />
          <AlertDescription>
            요금제와 구독은 Clerk Billing을 통해 관리됩니다. 요금제를 구독하여
            기능과 한도를 확장하세요.
          </AlertDescription>
        </Alert>

        {/* Clerk Pricing Table */}
        <Card>
          <CardHeader>
            <CardTitle>이용 가능한 요금제</CardTitle>
            <CardDescription>
              조직의 필요에 맞는 요금제를 선택하세요
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='mx-auto max-w-4xl'>
              <PricingTable for='organization' />
            </div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
