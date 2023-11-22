import { ReactElement } from 'react'
import Landing1 from './landings/01-positivus-landing-page'
import Landing2 from './landings/Land2'
import Landing3 from './landings/Land3'

interface Pages {
    [path: string]: {
        title: string
        element: ReactElement
    }
}

export const pages: Pages = {
    'positivus-landing-page': {
        title: 'Positivus Landing Page',
        element: <Landing1 />,
    },
    'land-2': {
        title: 'Landing 2',
        element: <Landing2 />,
    },
    'land-3': {
        title: 'Landing 3',
        element: <Landing3 />,
    },
}

export const pagesPaths = Object.keys(pages)

export const pagesNum = pagesPaths.length
