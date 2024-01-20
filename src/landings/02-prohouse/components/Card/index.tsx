import './styles.scss'

interface ICardProps {
    imgSrc: string
    name: string
    subname: string
    time: string
    eth: string
}

export default function Card({ imgSrc, name, subname, time, eth }: ICardProps) {
    return (
        <div className="card">
            <div className="card-photo">
                <img src={imgSrc} />
            </div>
            <div className="card-name">
                <h6>{name}</h6>
                <p className="p4">{subname}</p>
            </div>
            <div className="card-info">
                <div className="card-time">
                    <p className="p2">{time}</p>
                    <p className="p4">Remaining Time</p>
                </div>
                <div className="card-eth">
                    <p className="p2">{eth} ETH</p>
                    <p className="p4">Current Bid</p>
                </div>
            </div>
        </div>
    )
}
