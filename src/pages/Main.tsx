import { pagesPaths } from '../data.tsx'
import Card from '../components/Card'

export default function Main() {
    return (
        <div>
            {pagesPaths.map((p) => (
                <Card key={p} path={p} />
            ))}
        </div>
    )
}
