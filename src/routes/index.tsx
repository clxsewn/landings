import { pages, pagesPaths } from './data.tsx'

const routes = pagesPaths.map((p) => {
    const El = pages[p].component

    return {
        path: p,
        element: <El />,
    }
})

export default routes
