import { employees } from './data.ts'
import EmployeeCard from './EmployeeCard.tsx'

import './styles.scss'

export default function Employees() {
    return (
        <div className="employees-list">
            {employees.map((e) => (
                <EmployeeCard key={e.name} {...e} />
            ))}
        </div>
    )
}
