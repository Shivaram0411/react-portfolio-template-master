import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser"; // ✅ Import EmailJS
import "../assets/styles/Contact.scss";

function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null); // Reference for the form
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  // 📧 Send Email Using EmailJS
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setStatus("❌ Please fill in all fields!");
      return;
    }

    if (formRef.current) {
      emailjs
        .sendForm(
          "service_k8khp1u", // 🔹 Replace with your EmailJS Service ID
          "template_9xfemos", // 🔹 Replace with your EmailJS Template ID
          formRef.current,
          "bUXn7F9S5dXTRHqVe" // 🔹 Replace with your EmailJS Public Key
        )
        .then(
          (response) => {
            console.log("✅ SUCCESS!", response.status, response.text);
            setStatus("✅ Message Sent Successfully!");
            setName("");
            setEmail("");
            setMessage("");

            setTimeout(() => setStatus(""), 3000);
          },
          (error) => {
            console.error("❌ FAILED...", error);
            setStatus("❌ Failed to send message. Please try again.");
          }
        );
    }
  };

  return (
    <div id="contact">
      <div className="contact-container">
        <h1>Contact Me</h1>
        <p>Let's collaborate! Feel free to send me a message.</p>

        <form ref={formRef} className="contact-form" onSubmit={sendEmail}>
          <input
            className="input-field"
            type="text"
            name="user_name"
            placeholder="Your Name *"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="input-field"
            type="email"
            name="user_email"
            placeholder="Your Email *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            className="input-field"
            name="message"
            placeholder="Your Message *"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={5}
          />
          <button type="submit" className="send-button">SEND</button>
        </form>

        {status && <p className="status-message">{status}</p>}
      </div>
    </div>
  );
}

export default Contact;
