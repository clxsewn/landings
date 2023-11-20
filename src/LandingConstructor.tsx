import Manipulator from './components/Manipulator'
import { useNavigate, useParams } from 'react-router-dom'
import { pages } from './data.tsx'
import { useEffect } from 'react'

export default function LandingConstructor() {
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (id && !(id in pages)) {
            console.log('redirect')
            navigate('/')
        }
    }, [])

    if (!id || (id && !(id in pages))) return <></>

    const landing = pages[id].element

    return (
        <>
            <Manipulator id={id} />
            <div id="landing">{landing}</div>
        </>
    )
}
