'use client';

import SmokeButton from '@/components/button/smoke-button';
import SmokeFilter from '@/components/button/smoke-filter';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <SmokeFilter />
      <SmokeButton onClick={() => router.push('/')} />
    </>
  );
}
