import './styles.scss'
import { testimonials } from './data.ts'
import { useEffect, useRef } from 'react'

export default function Testimonials() {
    const nextBtn = useRef<HTMLButtonElement>(null)
    const list = useRef<HTMLDivElement>(null)
    const wrapper = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const tItems = document.querySelectorAll('blockquote.testimonials-item')
        // const widthsList: number[] = Array.from(tItems).map(
        //     (n) => n.offsetWidth
        // )

        let selected = 0
        let width = tItems[0].offsetWidth
        const gap = 50

        function select() {
            setSize()
            list!.current!.style.marginLeft =
                wrapper!.current!.offsetWidth / 2 -
                width / 2 -
                gap * selected -
                width * selected +
                'px'
        }

        function setSize() {
            width = Math.min(606, wrapper!.current!.offsetWidth - 60)
            tItems.forEach(
                (t) =>
                    (t.style.width =
                        Math.min(606, wrapper!.current!.offsetWidth - 60) +
                        'px')
            )
        }

        select()
        window.addEventListener('resize', select)

        nextBtn!.current!.onclick = function () {
            selected++
            select()
        }

        return () => {
            window.removeEventListener('resize', select)
        }
    }, [])

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
            <button ref={nextBtn}>Next</button>
        </div>
    )
}
