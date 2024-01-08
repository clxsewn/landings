import { Suspense } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import Manipulator from '../components/Manipulator'

export default function LandingLayout() {
    const { id } = useParams()
    console.log(useParams())

    return (
        <>
            <Manipulator id={id!} />
            <div id="landing">
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </div>
        </>
    )
}
