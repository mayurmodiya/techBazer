import Loader from '@/components/others/Loader'
import DashboardPageOne from '@/components/pages/dashboard-pages/DashboardPageOne'
import React, { Suspense } from 'react'

const DashboardPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <main className='w-full'>
      <DashboardPageOne />
    </main>
    </Suspense>
  )
}

export default DashboardPage