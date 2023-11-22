import './styles.scss'
import { Link } from 'react-router-dom'
import { pages } from '../../data.tsx'
import { pathToLandings } from '../../router.tsx'

interface CardProps {
    path: string
}

export default function Card({ path }: CardProps) {
    const { title } = pages[path]

    return (
        <div className="card">
            <Link to={pathToLandings + path}>{title}</Link>
        </div>
    )
}
