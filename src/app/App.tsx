import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { LoadingCat } from '@components/loading'
import { AppErrorBoundary } from './AppErrorBoundary'
import { router } from './router'

export default function App() {
  return (
    <AppErrorBoundary>
      <Suspense fallback={<LoadingCat />}>
        <RouterProvider router={router} />
      </Suspense>
    </AppErrorBoundary>
  )
}
