import './styles.scss'
import illustration from '../../assets/contact-us-illustration.svg'

export default function ContactUs() {
    return (
        <form className="contact-us">
            <div className="contact-us__inputs-wrapper">
                <div className="contact-us__inputs">
                    <div className="contact-us__radios">
                        <label>
                            <input type="radio" name="type" />
                            <span className="contact-us__checkmark"></span>
                            Say Hi
                        </label>
                        <label>
                            <input type="radio" name="type" />
                            <span className="contact-us__checkmark"></span>
                            Get a Quote
                        </label>
                    </div>
                    <label>
                        <div>Name</div>
                        <input type="text" name="name" placeholder="Name" />
                    </label>
                    <label>
                        <div>Email</div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                        />
                    </label>
                    <label>
                        <div>Message</div>
                        <textarea
                            name="message"
                            placeholder="Message"
                            rows={6}
                            required
                        />
                    </label>
                </div>
            </div>
            <div className="contact-us__submit-wrapper">
                <input type="submit" className="btn" value="Send message" />
            </div>
            <img
                className="contact-us__illustration unselectable"
                src={illustration}
            />
        </form>
    )
}
