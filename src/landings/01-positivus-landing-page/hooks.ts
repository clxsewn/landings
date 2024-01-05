import { useState, useEffect } from 'react'

export function useWindowWidth() {
    const [windowWidth, setWindowWidth] = useState(1920)

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth)
        }
        handleResize()

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    return windowWidth
}

export function useControlState(initValue: number, min: number, max: number) {
    const [value, setValue] = useState(initValue)

    function _setValue(_val: number) {
        if (min <= _val && _val <= max) setValue(_val)
    }

    const prev = () => _setValue(value - 1)
    const next = () => _setValue(value + 1)
    const set = (_val: number) => _setValue(_val)

    return { value, prev, next, set }
}
