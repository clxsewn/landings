import './globals.scss'
import './main.scss'
import SectionTitle from './components/SectionTitle'

import logo from './assets/logo.svg'
import illustration1 from './assets/illustration-01.svg'
import Companies from './components/Companies'

export default function Landing1() {
    return (
        <div id="container">
            <header id="header">
                <div id="logo">
                    <img id="logo__icon" src={logo} alt="logo" />
                    <div id="logo__text">Positivus</div>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href="#about-us">About us</a>
                        </li>
                        <li>
                            <a href="#services">Services</a>
                        </li>
                        <li>
                            <a href="#case-studies">Use Cases</a>
                        </li>
                        <li>
                            <a href="#our-working-process">Pricing</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <a href="#contact-us" className="outlined">
                                Request a quote
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            <section id="about-us">
                <div id="about-us__left">
                    <h1>Navigating the digital landscape for success</h1>
                    <p>
                        Our digital marketing agency helps businesses grow and
                        succeed online through a range of services including
                        SEO, PPC, social media marketing, and content creation.
                    </p>
                    <button className="btn">Book a consulting</button>
                </div>
                <div id="about-us__right">
                    <img
                        src={illustration1}
                        alt="Illustration"
                        className="unselectable"
                    />
                </div>
            </section>
            <Companies />
            <section id="services">
                <SectionTitle
                    heading="Services"
                    subheading="At our digital marketing agency, we offer a range of services to help bussinesses grow and succeed online. These services include:"
                />
            </section>
            <section id="proposal"></section>
            <section id="case-studies">
                <SectionTitle
                    heading="Case&nbsp;Studies"
                    subheading="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
                />
            </section>
            <section id="our-working-process">
                <SectionTitle
                    heading="Our&nbsp;Working&nbsp;Process"
                    subheading="Step-by-Step Guide to Achieving Your Business Goals"
                />
            </section>
            <section id="team">
                <SectionTitle
                    heading="Team"
                    subheading="Meet the skilled and experienced team behind our successful digital marketing strategies"
                />
            </section>
            <section id="testimonials">
                <SectionTitle
                    heading="Testimonials"
                    subheading="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
                />
            </section>
            <section id="contact-us">
                <SectionTitle
                    heading="Contact&nbsp;Us"
                    subheading="Connect with Us: Let's Discuss Your Digital Marketing Needs"
                />
            </section>
            <footer></footer>
        </div>
    )
}
