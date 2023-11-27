import './styles.scss'

interface IServiceThemes {
    [name: string]: {
        backgroundColor: string
        arrowColor: string
        additionalColor: string
    }
}

const serviceThemes: IServiceThemes = {
    gray: {
        backgroundColor: 'var(--gray-color)',
        arrowColor: 'var(--green-color)',
        additionalColor: 'var(--dark-color)',
    },
    dark: {
        backgroundColor: 'var(--dark-color)',
        arrowColor: 'var(--dark-color)',
        additionalColor: '#fff',
    },
    green: {
        backgroundColor: 'var(--green-color)',
        arrowColor: 'var(--green-color)',
        additionalColor: 'var(--dark-color)',
    },
}

export interface IServicesItemProps {
    type: string
    text: string
    mainTextBg: string
    imgSrc: string
}

export default function ServicesItem({
    type,
    text,
    mainTextBg,
    imgSrc,
}: IServicesItemProps) {
    const stl = serviceThemes[type]
    return (
        <div
            className="service"
            style={{ backgroundColor: stl.backgroundColor }}
        >
            <h3>{text}</h3>
        </div>
    )
}
