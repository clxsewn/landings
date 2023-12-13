import { TEmployee } from './data.ts'

import linkedinIcon from './../../assets/linkedin-icon.svg'
import mask from './../../assets/photo-mask.svg'

export default function EmployeeCard({
    name,
    position,
    experience,
    img,
    linkedin,
}: TEmployee) {
    return (
        <div className="employee main-border">
            <div className="employee-main">
                <div className="employee-main-left">
                    <img src={mask} alt="mask" />
                </div>
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
