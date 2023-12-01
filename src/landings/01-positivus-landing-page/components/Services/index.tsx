import './styles.scss'
import ServicesItem from './SevicesItem.tsx'
import { servicesList } from './data.ts'

export default function Services() {
    return (
        <div id="services-list">
            {servicesList.map((s) => (
                <ServicesItem {...s} />
            ))}
        </div>
    )
}
