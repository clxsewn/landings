import './styles.scss'

import amazon from '../../assets/companies/amazon.svg'
import dribbble from '../../assets/companies/dribbble.svg'
import hubspot from '../../assets/companies/hubspot.svg'
import notion from '../../assets/companies/notion.svg'
import netflix from '../../assets/companies/netflix.svg'
import zoom from '../../assets/companies/zoom.svg'

export default function Companies() {
    return (
        <section id="companies" className="container">
            <img src={amazon} alt="amazon" />
            <img src={dribbble} alt="dribbble" />
            <img src={hubspot} alt="hubspot" />
            <img src={notion} alt="notion" />
            <img src={netflix} alt="netflix" />
            <img src={zoom} alt="zoom" />
        </section>
    )
}
