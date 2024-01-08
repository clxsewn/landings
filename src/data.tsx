import { ReactElement } from 'react'
import Landing1 from './landings/01-positivus'
import Landing2 from './landings/02-prohouse'
import Landing3 from './landings/Land3'

interface Pages {
    [path: string]: {
        title: string
        element: ReactElement
    }
}

export const pages: Pages = {
    '01-positivus': {
        title: 'Positivus',
        element: <Landing1 />,
    },
    '02-prohouse': {
        title: 'ProHouse',
        element: <Landing2 />,
    },
    'land-3': {
        title: 'Landing 3',
        element: <Landing3 />,
    },
}

export const pagesPaths = Object.keys(pages)

export const pagesNum = pagesPaths.length
