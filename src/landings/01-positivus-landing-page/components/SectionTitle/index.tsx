import './styles.scss'

interface STProps {
    heading: string
    subheading: string
}

export default function SectionTitle({ heading, subheading }: STProps) {
    return (
        <div className="section-title">
            <h2 className="section-title__heading">{heading}</h2>
            <p className="section-title__subheading">{subheading}</p>
        </div>
    )
}
