import { useState } from 'react'
import { IStep } from './data.ts'
import plus from '../../assets/plus.svg'
import minus from '../../assets/minus.svg'

export default function StepsItem({ title, text }: IStep) {
    const [visible, setVisibility] = useState(false)

    const visibleClass = visible ? ' opened' : ''

    const openHandle = () => setVisibility((v) => !v)

    return (
        <li
            className={`steps-item-wrapper main-border${visibleClass}`}
            onClick={openHandle}
        >
            <span className="steps-item__title">{title}</span>
            <button>
                <img src={visible ? minus : plus} className="unselectable" />
            </button>
            <hr />
            <p>{text}</p>
        </li>
    )
}
