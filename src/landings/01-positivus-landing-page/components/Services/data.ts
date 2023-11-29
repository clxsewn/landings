import { IServicesItemProps } from '../../components/Services/SevicesItem.tsx'
import img1 from '../../assets/services/01.png'
import img2 from '../../assets/services/02.png'
import img3 from '../../assets/services/03.png'
import img4 from '../../assets/services/04.png'
import img5 from '../../assets/services/05.png'
import img6 from '../../assets/services/06.png'

export const servicesList: IServicesItemProps[] = [
    {
        type: 'gray',
        mainTextBg: 'green',
        text: 'Search engine optimization',
        imgSrc: img1,
    },
    {
        type: 'green',
        mainTextBg: 'white',
        text: 'Pay-per-click advertising',
        imgSrc: img2,
    },
    {
        type: 'dark',
        mainTextBg: 'white',
        text: 'Social Media Marketing',
        imgSrc: img3,
    },
    {
        type: 'gray',
        mainTextBg: 'green',
        text: 'Email Marketing',
        imgSrc: img4,
    },
    {
        type: 'green',
        mainTextBg: 'white',
        text: 'Content Creation',
        imgSrc: img5,
    },
    {
        type: 'dark',
        mainTextBg: 'green',
        text: 'Analytics and Tracking',
        imgSrc: img6,
    },
]
