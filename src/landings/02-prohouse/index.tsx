import logo from './assets/logo.svg'
import './styles/main.scss'
import Logo from '@/02-prohouse/components/Logo.tsx'

export default function Landing2() {
    return (
        <>
            <header className="container">
                <div className="header__left">
                    <div className="header__logo">
                        <Logo />
                    </div>
                    <nav>111</nav>
                </div>
                <div className="header__right"></div>
            </header>
        </>
    )
}
