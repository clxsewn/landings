import './styles.scss'
import { TEmployee } from '../EmployeeCard/data.ts'

export default function EmployeeCard({
    name,
    position,
    experience,
    img,
    linkedin,
}: TEmployee) {
    return (
        <div className="employee">
            <div className="employee-main">
                <div className="employee-main-left"></div>
                <div className="emloyee-main-right">
                    <div className="employee-linkedin"></div>
                    <h4>{name}</h4>
                    <p>{position}</p>
                </div>
            </div>
            <hr />
            <p>{experience}</p>
        </div>
    )
}
