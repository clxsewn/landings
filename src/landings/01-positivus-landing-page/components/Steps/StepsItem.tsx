import { IStep } from './data.ts'

export default function StepsItem({ id, title, text }: IStep) {
    return (
        <div>
            {id} {title} {text}
        </div>
    )
}
