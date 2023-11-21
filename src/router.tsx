import { createBrowserRouter } from 'react-router-dom'
import LandingLayout from './LandingLayout.tsx'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <h1>Main</h1>,
    },
    {
        path: '/p/:id',
        element: <LandingLayout />,
    },
    {
        path: '*',
        element: <h1>Not found</h1>,
    },
])
