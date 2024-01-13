import { Suspense } from 'react'
import { Outlet, useOutlet } from 'react-router-dom'
import Manipulator from '../components/Manipulator'
import { pages } from '../routes/data.tsx'

export default function LandingLayout() {
    const id = useOutlet()?.props.children.props.match.route.path

    return (
        <>
            <Manipulator id={id} />
            <div id={pages[id].prefix}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </div>
        </>
    )
}
