import React from 'react'

interface Pages {
    [path: string]: {
        title: string
        component: ReturnType<typeof React.lazy>
        prefix: string
    }
}

export const pages: Pages = {
    '01-positivus': {
        title: 'Positivus',
        component: React.lazy(() => import('@/01-positivus')),
        prefix: 'l1',
    },
    '02-prohouse': {
        title: 'ProHouse',
        component: React.lazy(() => import('@/02-prohouse')),
        prefix: 'l2',
    },
    '03-landing': {
        title: 'Landing #3',
        component: React.lazy(() => import('@/03-landing')),
        prefix: 'l3',
    },
}

export const pagesPaths = Object.keys(pages)

export const pagesNum = pagesPaths.length
