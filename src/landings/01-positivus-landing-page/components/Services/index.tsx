import './styles.scss'
import ServicesItem from './SevicesItem.tsx'
import { servicesList } from './data.ts'

export default function Services() {
    return (
        <div>
            {servicesList.map((s) => (
                <ServicesItem {...s} />
            ))}
        </div>
    )
}
