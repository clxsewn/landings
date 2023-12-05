import { steps } from './data.ts'
import StepsItem from '@/01-positivus-landing-page/components/Steps/StepsItem.tsx'

export default function Steps() {
    return (
        <div>
            {steps.map((s) => (
                <StepsItem {...s} />
            ))}
        </div>
    )
}
