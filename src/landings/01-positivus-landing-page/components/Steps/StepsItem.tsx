import { IStep } from './data.ts'
import plus from '../../assets/plus.svg'
import minus from '../../assets/minus.svg'
import './styles.scss'
import { useState } from 'react'

export default function StepsItem({ id, title, text }: IStep) {
    const [visible, setVisibility] = useState(false)

    const visibleClass = visible ? ' opened' : ''

    return (
        <div className={`steps-item main-border${visibleClass}`}>
            <div className="steps-item__top">
                <div className="steps-item__container">
                    <div className="steps-item__number">{id}</div>
                    <div className="steps-item__title">{title}</div>
                </div>
                <button onClick={() => setVisibility((v) => !v)}>
                    <img src={visible ? minus : plus} />
                </button>
            </div>
            <hr />
            <p>{text}</p>
        </div>
    )
}
