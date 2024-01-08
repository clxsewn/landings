import { Link } from 'react-router-dom'
import { pagesNum, pagesPaths } from '../../routes/data.tsx'
import { pathToLandings } from '../../router.tsx'
import './styles.scss'

function getPagePathById(id: number): string {
    if (id >= pagesNum) return pathToLandings + pagesPaths[0]
    if (id < 0) return pathToLandings + pagesPaths[pagesNum - 1]
    return pathToLandings + pagesPaths[id]
}

export default function Manipulator({ id }: { id: string }) {
    const number = pagesPaths.indexOf(id)

    return (
        <div id="manipulator">
            <Link to="/">All</Link>
            <Link to={getPagePathById(number - 1)} className="manipulator-btn">
                &lt;
            </Link>
            {number + 1} / {pagesNum}
            <Link to={getPagePathById(number + 1)} className="manipulator-btn">
                &gt;
            </Link>
        </div>
    )
}
