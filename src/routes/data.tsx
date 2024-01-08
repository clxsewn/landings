import React from 'react'

interface Pages {
    [path: string]: {
        title: string
        component: ReturnType<typeof React.lazy>
    }
}

export const pages: Pages = {
    '01-positivus': {
        title: 'Positivus',
        component: React.lazy(() => import('../landings/01-positivus')),
    },
    '02-prohouse': {
        title: 'ProHouse',
        component: React.lazy(() => import('../landings/02-prohouse')),
    },
    '03-landing': {
        title: 'Landing #3',
        component: React.lazy(() => import('../landings/03-landing')),
    },
}

export const pagesPaths = Object.keys(pages)

export const pagesNum = pagesPaths.length
