import { employees } from './data.ts'
import EmployeeCard from './EmployeeCard.tsx'

import './styles.scss'

export default function Employees() {
    return (
        <>
            <div className="employees-list">
                {employees.map((e) => (
                    <EmployeeCard key={e.name} {...e} />
                ))}
            </div>
            <div className="employees__btn-wrapper">
                <button className="btn">See all team</button>
            </div>
        </>
    )
}
