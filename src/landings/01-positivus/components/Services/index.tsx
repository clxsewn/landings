import './styles.scss'
import ServicesItem from './SevicesItem.tsx'
import { servicesList } from './data.ts'

export default function Services() {
    return (
        <div className="services-list">
            {servicesList.map((s) => (
                <ServicesItem key={s.text} {...s} />
            ))}
        </div>
    )
}
