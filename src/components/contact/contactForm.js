import React from "react"
import { Link } from "gatsby"

const ContactForm = () => {
    return (
        <section>
            <div className="row">
                <div className="col-md-6 col-sm-12 contact-form">
                    <h1 className="title"><span>Reach Us</span> Now! </h1>
                    <h2 className="subtitle">We are here assist you.</h2>
                    <form action="">
                        <input type="text" name="name" placeholder="Your Name" />
                        <input type="email" name="e-mail" placeholder="Your E-mail Adress" />
                        <input type="tel" name="phone" placeholder="Your Phone Number" />
                        <textarea name="text" id="" rows="8" placeholder="Your Message"></textarea>
                        <button className="btn btn-outline-info">Get a Call Back</button>
                    </form>
                </div>
                <div className="col-md-6 col-sm-12 map">
                    <div className="row contact-map">
                        <iframe
                            title="test map"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d112061.09262729759!2d77.208022!3d28.632485!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x644e33bc3def0667!2sIndior+Tours+Pvt+Ltd.!5e0!3m2!1sen!2sus!4v1527779731123"
                            style={{ width: "100%", height: "100%", frameborder: "0", border: "0" }}
                        ></iframe>
                    </div>
                    <div className="row contact-info">
                        <h3>Contact Info</h3>
                        <div>
                            <div className="contact-info-item"><i class="far fa-map" style={{ color: "#06d6a0" }}></i><span>address: 463 Lyon Avenueord, Us 01757</span></div>
                            <div className="contact-info-item"><i class="fas fa-envelope-open-text" style={{ color: "#06d6a0" }}></i><span>E-mail: info@kitchen.com</span></div>
                            <div className="contact-info-item"><i class="fas fa-phone-square" style={{ color: "#06d6a0" }}></i><span>Phone Number: + 180 - 123 - 4567</span></div>
                            <div className="contact-social">
                                <Link><i class="fab fa-facebook-f"></i></Link>
                                <Link><i class="fab fa-twitter"></i></Link>
                                <Link><i class="fab fa-google-plus-g"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </section>
    )
}

export default ContactForm