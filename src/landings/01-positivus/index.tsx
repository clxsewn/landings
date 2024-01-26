import './styles/globals.scss'
import './styles/main.scss'
import './styles/sectionMargins.scss'

import logo from './assets/logo.svg'
import burgerMenu from './assets/burder-menu.svg'
import illustration1 from './assets/illustration-01.svg'
import illustration2 from './assets/illustration-02.svg'
import logow from './assets/footer/logo-white.svg'
import linkedinIcon from './assets/footer/linkedin.svg'
import facebookIcon from './assets/footer/facebook.svg'
import twitterIcon from './assets/footer/twitter.svg'

import SectionTitle from './components/SectionTitle'
import Companies from './components/Companies'
import Services from './components/Services'
import Steps from './components/Steps'
import Employees from './components/Employees'
import Testimonials from './components/Testimonials'
import ContactUs from './components/Contact-Us'
import CaseStudies from '@/01-positivus/components/Case-Studies'

export default function Landing1() {
    return (
        <>
            <div className="container">
                <header id="header">
                    <div id="logo">
                        <img id="logo__icon" src={logo} alt="logo" />
                        <div id="logo__text">Positivus</div>
                    </div>
                    <nav>
                        <a href="#about-us">About&nbsp;us</a>
                        <a href="#services">Services</a>
                        <a href="#case-studies">Use&nbsp;Cases</a>
                        <a href="#our-working-process">Pricing</a>
                        <a href="#">Blog</a>
                        <a href="#contact-us" className="outlined">
                            Request&nbsp;a&nbsp;quote
                        </a>
                    </nav>
                    <button id="burger-menu">
                        <img src={burgerMenu} alt="menu" />
                    </button>
                </header>
                <section id="about-us">
                    <h1>Navigating the digital landscape for success</h1>
                    <p>
                        Our digital marketing agency helps businesses grow and
                        succeed online through a range of services including
                        SEO, PPC, social media marketing, and content creation.
                    </p>
                    <button className="btn">Book a consulting</button>
                    <img
                        src={illustration1}
                        alt="Illustration"
                        className="unselectable"
                    />
                </section>
                <Companies />
                <section id="services">
                    <SectionTitle
                        heading="Services"
                        subheading="At our digital marketing agency, we offer a range of services to help bussinesses grow and succeed online. These services include:"
                    />
                    <Services />
                </section>
                <section id="proposal">
                    <div id="proposal__left">
                        <h3>Let's make this happen</h3>
                        <p>
                            Contact us today to learn more about how our digital
                            marketing services can help your business grow and
                            succeed online.
                        </p>
                        <button className="btn">Get your free proposal</button>
                    </div>
                    <div id="proposal__right">
                        <img
                            src={illustration2}
                            alt="illustration"
                            className="unselectable"
                        />
                    </div>
                </section>
                <section id="case-studies">
                    <SectionTitle
                        heading="Case&nbsp;Studies"
                        subheading="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
                    />
                    <CaseStudies />
                </section>
                <section id="our-working-process">
                    <SectionTitle
                        heading="Our&nbsp;Working&nbsp;Process"
                        subheading="Step-by-Step Guide to Achieving Your Business Goals"
                    />
                    <Steps />
                </section>
                <section id="team">
                    <SectionTitle
                        heading="Team"
                        subheading="Meet the skilled and experienced team behind our successful digital marketing strategies"
                    />
                    <Employees />
                </section>
                <section id="testimonials">
                    <SectionTitle
                        heading="Testimonials"
                        subheading="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
                    />
                    <Testimonials />
                </section>
                <section id="contact-us">
                    <SectionTitle
                        heading="Contact&nbsp;Us"
                        subheading="Connect with Us: Let's Discuss Your Digital Marketing Needs"
                    />
                    <ContactUs />
                </section>
            </div>
            <footer>
                <div className="container">
                    <div id="footer-top">
                        <img
                            id="footer-logo"
                            className="unselectable"
                            src={logow}
                            alt="Positivus"
                        />
                        <nav id="footer-nav">
                            <a href="#about-us">About us</a>
                            <a href="#services">Services</a>
                            <a href="#case-studies">Use Cases</a>
                            <a href="#pricing">Pricing</a>
                            <a href="#">Blog</a>
                        </nav>
                        <div id="footer-links">
                            <a href="https://www.linkedin.com/" target="_blank">
                                <img
                                    className="unselectable"
                                    src={linkedinIcon}
                                    alt="linkedin"
                                />
                            </a>
                            <a href="https://www.facebook.com/" target="_blank">
                                <img
                                    className="unselectable"
                                    src={facebookIcon}
                                    alt="facebook"
                                />
                            </a>
                            <a href="https://twitter.com/" target="_blank">
                                <img
                                    className="unselectable"
                                    src={twitterIcon}
                                    alt="twitter"
                                />
                            </a>
                        </div>
                    </div>
                    <div id="footer-middle">
                        <div id="footer-contacts-wrapper">
                            <h4 className="bgc-green">Contact&nbsp;us</h4>
                            <address id="contact-info">
                                <a href="mailto:info@positivus.com">
                                    <p>Email: info@positivus.com</p>
                                </a>
                                <a href="tel:+555-567-8901">
                                    <p>Phone: 555-567-8901</p>
                                </a>
                                <p>
                                    Address: 1234 Main St
                                    <br />
                                    Moonstone City, Stardust State 12345
                                </p>
                            </address>
                        </div>
                        <div id="subscription-form">
                            <input type="email" placeholder="Email" />
                            <input type="submit" value="Subscribe on news" />
                        </div>
                    </div>
                    <hr />
                    <div id="footer-bottom">
                        <span>© 2023 Positivus. All Rights Reserved.</span>
                        <a href="#">Privacy Policy</a>
                    </div>
                </div>
            </footer>
        </>
    )
}
