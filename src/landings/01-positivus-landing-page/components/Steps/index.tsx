import { steps } from './data.ts'
import StepsItem from './StepsItem.tsx'

export default function Steps() {
    return (
        <div>
            {steps.map((s) => (
                <StepsItem {...s} />
            ))}
        </div>
    )
}
