import { steps } from './data.ts'
import StepsItem from './StepsItem.tsx'
import './styles.scss'

export default function Steps() {
    return (
        <div>
            {steps.map((s) => (
                <StepsItem key={s.id} {...s} />
            ))}
        </div>
    )
}
