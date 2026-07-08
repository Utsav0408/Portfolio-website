import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import { AppLayout } from '../layouts/AppLayout.jsx'
import { Loader } from '../components/ui/Loader.jsx'

const HomePage = lazy(() => import('../pages/HomePage.jsx'))
const NotFoundPage = lazy(() => import('../pages/NotFoundPage.jsx'))

export function AppRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  )
}