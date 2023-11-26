import './styles.scss'
import { TEmployee } from '../EmployeeCard/data.ts'
import linkedinIcon from './../../assets/linkedin-icon.svg'

export default function EmployeeCard({
    name,
    position,
    experience,
    img,
    linkedin,
}: TEmployee) {
    return (
        <div className="employee custom-border">
            <div className="employee-main">
                <div className="employee-main-left"></div>
                <div className="employee-main-right">
                    <a href={linkedin} className="linkedin-wrapper">
                        <img src={linkedinIcon} alt="linkedin" />
                    </a>
                    <h4>{name}</h4>
                    <p>{position}</p>
                </div>
            </div>
            <hr />
            <p>{experience}</p>
        </div>
    )
}
