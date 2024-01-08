import './styles.scss'
import { Link } from 'react-router-dom'
import { pathToLandings } from '../../router.tsx'

interface CardProps {
    path: string
}

export default function Card({ path }: CardProps) {
    return (
        <div className="card">
            <Link to={pathToLandings + path}></Link>
        </div>
    )
}
