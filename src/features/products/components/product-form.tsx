'use client';

import { FormFileUpload } from '@/components/forms/form-file-upload';
import { FormInput } from '@/components/forms/form-input';
import { FormSelect } from '@/components/forms/form-select';
import { FormTextarea } from '@/components/forms/form-textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import { Product } from '@/constants/mock-api';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp'
];

const formSchema = z.object({
  image: z
    .any()
    .refine((files) => files?.length == 1, '이미지는 필수입니다.')
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `최대 파일 크기는 5MB입니다.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      '.jpg, .jpeg, .png, .webp 파일만 허용됩니다.'
    ),
  name: z.string().min(2, {
    message: '상품명은 최소 2자 이상이어야 합니다.'
  }),
  category: z.string(),
  price: z.number(),
  description: z.string().min(10, {
    message: '설명은 최소 10자 이상이어야 합니다.'
  })
});

export default function ProductForm({
  initialData,
  pageTitle
}: {
  initialData: Product | null;
  pageTitle: string;
}) {
  const defaultValues = {
    name: initialData?.name || '',
    category: initialData?.category || '',
    price: initialData?.price || undefined,
    description: initialData?.description || ''
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues
  });

  const router = useRouter();

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Form submission logic would be implemented here
    console.log(values);
    router.push('/dashboard/product');
  }

  return (
    <Card className='mx-auto w-full'>
      <CardHeader>
        <CardTitle className='text-left text-2xl font-bold'>
          {pageTitle}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form
          form={form}
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-8'
        >
          <FormFileUpload
            control={form.control}
            name='image'
            label='상품 이미지'
            description='상품 이미지를 업로드하세요'
            config={{
              maxSize: 5 * 1024 * 1024,
              maxFiles: 4
            }}
          />

          <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
            <FormInput
              control={form.control}
              name='name'
              label='상품명'
              placeholder='상품명을 입력하세요'
              required
            />

            <FormSelect
              control={form.control}
              name='category'
              label='카테고리'
              placeholder='카테고리를 선택하세요'
              required
              options={[
                {
                  label: '뷰티',
                  value: 'beauty'
                },
                {
                  label: '전자제품',
                  value: 'electronics'
                },
                {
                  label: '홈 & 가든',
                  value: 'home'
                },
                {
                  label: '스포츠 & 아웃도어',
                  value: 'sports'
                }
              ]}
            />

            <FormInput
              control={form.control}
              name='price'
              label='가격'
              placeholder='가격을 입력하세요'
              required
              type='number'
              min={0}
              step='0.01'
            />
          </div>

          <FormTextarea
            control={form.control}
            name='description'
            label='설명'
            placeholder='상품 설명을 입력하세요'
            required
            config={{
              maxLength: 500,
              showCharCount: true,
              rows: 4
            }}
          />

          <Button type='submit'>상품 추가</Button>
        </Form>
      </CardContent>
    </Card>
  );
}
