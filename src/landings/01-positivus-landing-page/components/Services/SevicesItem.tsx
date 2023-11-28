import './styles.scss'

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
    return (
        <div className={`service service-${type} custom-border`}>
            <div className="service__left">
                <h3>{text}</h3>
                <div>
                    <p>Learn more</p>
                </div>
            </div>
            <img src={imgSrc} alt="" />
        </div>
    )
}
