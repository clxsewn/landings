import './styles.scss'
import { testimonials } from './data.ts'
import { useEffect, useRef, useState } from 'react'
import { useControlState, useWindowWidth } from '@/01-positivus/hooks.ts'

export default function Testimonials() {
    const list = useRef<HTMLDivElement>(null)
    const wrapper = useRef<HTMLDivElement>(null)

    const windowWidth = useWindowWidth()
    const {
        value: selected,
        prev,
        next,
        set,
    } = useControlState(0, 0, testimonials.length - 1)
    const [offsets, setOffsets] = useState<number[]>([])

    useEffect(() => {
        const divs: HTMLDivElement[] = Array.from(
            document.querySelectorAll('blockquote.testimonials-item')
        )

        setOffsets(
            divs
                .map((n: HTMLDivElement) => n.offsetWidth)
                .map((w: number, id) => {
                    return (
                        wrapper!.current!.offsetWidth / 2 -
                        w / 2 -
                        50 * id - // 50 is gap
                        w * id
                    )
                })
        )
    }, [windowWidth])

    useEffect(() => {
        list!.current!.style.transform = `translateX(${offsets[selected]}px)`
    }, [selected, offsets])

    return (
        <div ref={wrapper} className="testimonials">
            <div ref={list} className="testimonials-list">
                {testimonials.map((t) => {
                    return (
                        <blockquote key={t.id} className="testimonials-item">
                            <p className="testimonials-text">{t.text}</p>
                            <div className="testimonials-author">
                                <p className="testimonials-name">{t.author}</p>
                                <p className="testimonials-position">
                                    {t.position}
                                </p>
                            </div>
                        </blockquote>
                    )
                })}
            </div>
            <div className="testimonials-controls">
                <button
                    className="testimonials-arrow"
                    onClick={prev}
                    disabled={selected === 0}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M22 13.5C22.8284 13.5 23.5 12.8284 23.5 12C23.5 11.1716 22.8284 10.5 22 10.5L22 13.5ZM0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939341 10.9393ZM22 10.5L2 10.5L2 13.5L22 13.5L22 10.5Z"
                            fill="white"
                        />
                    </svg>
                </button>
                <div className="testimonials-navigation-stars">
                    {testimonials.map((t, id) => (
                        <button
                            key={t.id}
                            disabled={selected === id}
                            onClick={() => set(id)}
                        >
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z" />
                            </svg>
                        </button>
                    ))}
                </div>
                <button
                    className="testimonials-arrow"
                    onClick={next}
                    disabled={selected === testimonials.length - 1}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5L2 10.5ZM23.0607 13.0607C23.6464 12.4749 23.6464 11.5251 23.0607 10.9393L13.5147 1.3934C12.9289 0.807613 11.9792 0.807613 11.3934 1.3934C10.8076 1.97919 10.8076 2.92893 11.3934 3.51472L19.8787 12L11.3934 20.4853C10.8076 21.0711 10.8076 22.0208 11.3934 22.6066C11.9792 23.1924 12.9289 23.1924 13.5147 22.6066L23.0607 13.0607ZM2 13.5L22 13.5L22 10.5L2 10.5L2 13.5Z"
                            fill="white"
                        />
                    </svg>
                </button>
            </div>
        </div>
    )
}
