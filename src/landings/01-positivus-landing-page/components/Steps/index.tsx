import { steps } from './data.ts'
import StepsItem from './StepsItem.tsx'
import './styles.scss'

export default function Steps() {
    return (
        <ol className="steps-list">
            {steps.map((s) => (
                <StepsItem key={s.id} {...s} />
            ))}
        </ol>
    )
}
