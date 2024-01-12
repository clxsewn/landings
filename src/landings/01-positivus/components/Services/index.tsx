import styles from './styles.module.scss'
import ServicesItem from './SevicesItem.tsx'
import { servicesList } from './data.ts'

export default function Services() {
    return (
        <div className={styles.servicesList}>
            {servicesList.map((s) => (
                <ServicesItem key={s.text} {...s} />
            ))}
        </div>
    )
}
