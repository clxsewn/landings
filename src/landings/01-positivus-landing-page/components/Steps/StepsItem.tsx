import { useState } from 'react'
import { IStep } from './data.ts'
import plus from '../../assets/plus.svg'
import minus from '../../assets/minus.svg'

export default function StepsItem({ id, title, text }: IStep) {
    const [visible, setVisibility] = useState(false)

    const visibleClass = visible ? ' opened' : ''

    const openHandle = () => setVisibility((v) => !v)

    return (
        <div
            className={`steps-item main-border${visibleClass}`}
            onClick={openHandle}
        >
            <div className="steps-item__top">
                <div className="steps-item__container">
                    <div className="steps-item__number">{id}</div>
                    <div className="steps-item__title">{title}</div>
                </div>
                <button>
                    <img
                        src={visible ? minus : plus}
                        className="unselectable"
                    />
                </button>
            </div>
            <hr />
            <p>{text}</p>
        </div>
    )
}
