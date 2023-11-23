import './styles.scss'
import { pagesNum, pagesPaths } from '../../data.tsx'
import { Link } from 'react-router-dom'
import { pathToLandings } from '../../router.tsx'

function getPagePathById(id: number): string {
    if (id >= pagesNum) return pathToLandings + pagesPaths[0]
    if (id < 0) return pathToLandings + pagesPaths[pagesNum - 1]
    return pathToLandings + pagesPaths[id]
}

export default function Manipulator({ id }: { id: string }) {
    const number = pagesPaths.indexOf(id)

    return (
        <div id="manipulator">
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
