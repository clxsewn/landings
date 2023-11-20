import './styles.scss'
import { pagesNum, pagesPaths } from '../../data.tsx'
import { Link } from 'react-router-dom'

function _gpp(id: number): string {
    if (id >= pagesNum) return pagesPaths[0]
    if (id < 0) return pagesPaths[pagesNum - 1]
    return pagesPaths[id]
}

function getPagePath(id: number): string {
    return `/p/${_gpp(id)}`
}

export default function Manipulator({ id }: { id: string }) {
    const number = pagesPaths.indexOf(id)

    return (
        <div id="manipulator">
            <Link to={getPagePath(number - 1)} className="manipulator-btn">
                &lt;
            </Link>
            {number + 1} / {pagesNum}
            <Link to={getPagePath(number + 1)} className="manipulator-btn">
                &gt;
            </Link>
        </div>
    )
}
