/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'
import { RootLayout } from '@components/layout'

const HomePage = lazy(() => import('@pages/home/HomePage'))
const AboutPage = lazy(() => import('@pages/about/AboutPage'))
const EducationPage = lazy(() => import('@pages/education/EducationPage'))
const ProjectsPage = lazy(() => import('@pages/projects/ProjectsPage'))
const ProjectDetailPage = lazy(
  () => import('@pages/projects/ProjectDetailPage'),
)
const ContactPage = lazy(() => import('@pages/contact/ContactPage'))
const NotFoundPage = lazy(() => import('@pages/not-found/NotFoundPage'))
const ErrorPage = lazy(() => import('@pages/error/ErrorPage'))

export const routes: RouteObject[] = [
  {
    element: <RootLayout />,
    // Catches thrown errors / responses from any descendant route, including
    // chunk-load failures and unexpected render-time exceptions.
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/education', element: <EducationPage /> },
      { path: '/projects', element: <ProjectsPage /> },
      { path: '/projects/:slug', element: <ProjectDetailPage /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]
