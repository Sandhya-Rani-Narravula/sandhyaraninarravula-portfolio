import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";

import "./Contact.css";
import "react-toastify/dist/ReactToastify.css";

const Contact = (props) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        const { name, email, subject, message } = formData;

        if (!name || !email || !subject || !message) {
            return toast.error("Please complete all fields.");
        }

        if (!process.env.REACT_APP_EMAILJS_SERVICE_ID || 
            !process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 
            !process.env.REACT_APP_EMAILJS_PUBLIC_API) {
            return toast.error("EmailJS credentials are missing.");
        }

        setLoading(true);

        const emailParams = {
            from_name: name,
            from_email: email,
            subject,
            message,
        };

        emailjs
            .send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                emailParams,
                process.env.REACT_APP_EMAILJS_PUBLIC_API
            )
            .then(
                () => {
                    setLoading(false);
                    toast.success("Email sent successfully! 🚀");
                    setFormData({ name: "", email: "", subject: "", message: "" });
                },
                (error) => {
                    setLoading(false);
                    console.error("EmailJS Error:", error);
                    toast.error("Failed to send email. Please try again.");
                }
            );
    };

    return (
        <section className="contact container section" id="contact">
            <h2 className="section__title">Get In Touch</h2>

            <div className="contact__container grid">
                <div className="contact__info">
                    <h3 className="contact__title">Let's talk about everything!</h3>
                    <p className="contact__details">
                        Don't like forms? Send me an email. 👋
                    </p>
                </div>

                <form onSubmit={submitHandler} className="contact__form">
                    <div className="contact__form-group">
                        <div className="contact__form-div">
                            <input
                                type="text"
                                name="name"
                                className="contact__form-input"
                                placeholder="Insert your name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="contact__form-div">
                            <input
                                type="email"
                                name="email"
                                className="contact__form-input"
                                placeholder="Insert your email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="contact__form-div">
                        <input
                            type="text"
                            name="subject"
                            className="contact__form-input"
                            placeholder="Insert your subject"
                            value={formData.subject}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <textarea
                            name="message"
                            cols="30"
                            rows="10"
                            className="contact__form-input"
                            placeholder="Write your message"
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <button type="submit" className="btn" disabled={loading}>
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </form>

                <ToastContainer position="top-right" theme={props.theme} />
            </div>
        </section>
    );
};

export default Contact;
