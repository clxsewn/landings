import { createBrowserRouter } from 'react-router-dom'
import LandingConstructor from './LandingConstructor.tsx'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <h1>Main</h1>,
    },
    {
        path: '/p/:id',
        element: <LandingConstructor />,
    },
    {
        path: '*',
        element: <h1>Not found</h1>,
    },
])
