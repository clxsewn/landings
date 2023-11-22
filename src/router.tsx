import { createBrowserRouter } from 'react-router-dom'
import LandingLayout from './pages/LandingLayout.tsx'
import Main from './pages/Main.tsx'

export const pathToLandings = '/p/'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
    },
    {
        path: `${pathToLandings}:id`,
        element: <LandingLayout />,
    },
    {
        path: '*',
        element: <h1>Not found</h1>,
    },
])
