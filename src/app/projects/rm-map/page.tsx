'use client'

import dynamic from 'next/dynamic'

const LazyMap = dynamic(() => import('@/component/Map'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})

export default function Home() {
  return (
    <main>
      <LazyMap src='' />
    </main>
  )
}
