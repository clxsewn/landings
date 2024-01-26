import './styles/main.scss'
import './styles/globals.scss'
import './styles/fonts.scss'
import Logo from '@/02-prohouse/components/Logo.tsx'
import Card from './components/Card'

export default function Landing2() {
    return (
        <>
            <header className="container">
                <div className="header__left">
                    <div className="header__logo">
                        <Logo />
                        <span>ProHouse</span>
                    </div>
                    <nav>
                        <a href="#">Marketplace</a>
                        <a href="#">About Us</a>
                        <a href="#">Developers</a>
                    </nav>
                </div>
                <div className="header__right">
                    <button className="btn btn-24">Connect Wallet</button>
                </div>
            </header>
            <main>
                <section id="hero" className="container">
                    <div className="main">
                        <h1 className="title">
                            Future of real estate investing
                        </h1>
                        <p className="text">
                            Our real estate is virtual property you can purchase
                            on a metaverse platform
                        </p>
                        <button className="btn btn-32">Explore</button>
                    </div>
                    <div className="features">
                        <div className="item">
                            <h2>12K+</h2>
                            <p>properties</p>
                        </div>
                        <div className="item">
                            <h2>10K+</h2>
                            <p>auction</p>
                        </div>
                        <div className="item">
                            <h2>12K+</h2>
                            <p>developers</p>
                        </div>
                    </div>
                    <div className="cards"></div>
                </section>
                <section id="companies">Companies</section>
                <section id="discover">Discover</section>
                <section id="developers">Developers</section>
                <section id="join">Join</section>
                <section id="subscribe">Subscribe</section>
            </main>
            <footer></footer>
        </>
    )
}
