import './styles.scss'

export default function Card() {
    return (
        <div className="card">
            <div className="card-photo"></div>
            <div className="card-name">
                <h6></h6>
                <p className="p4"></p>
            </div>
            <div className="card-info">
                <div className="card-time">
                    <p className="p2"></p>
                    <p className="p4"></p>
                </div>
                <div className="card-eth">
                    <p className="p2"></p>
                    <p className="p4"></p>
                </div>
            </div>
        </div>
    )
}
