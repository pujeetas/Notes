import { GithubFilled, LinkedinFilled, MailFilled } from "@ant-design/icons";
import { useState } from "react";
import "../ContactStyle.css";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-info">
          <h1 className="contact-title">Get in Touch</h1>
          <p className="contact-subtitle">I'd like to hear from you!</p>
          <p className="contact-description">
            If you have any inquiries or just want to say hi, please use the
            contact form!
          </p>

          <div className="contact-details">
            <div className="email-info">
              <span className="email-icon">✉</span>
              <span className="email-address">contact@productivityapp.com</span>
            </div>

            <div className="social-icons">
              <span className="social-icon">
                <LinkedinFilled />
              </span>
              <span className="social-icon">
                <MailFilled />
              </span>
              <span className="social-icon">
                <GithubFilled />
              </span>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
