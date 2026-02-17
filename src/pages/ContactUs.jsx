import React, { useState } from "react";
import { Mail, Linkedin, Github, Twitter, MapPin, Phone } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://formspree.io/f/mandanee",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    );

    if (response.ok) {
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-6 md:px-20 py-20">
      <div className="flex flex-col md:flex-row w-full max-w-6xl gap-10">
        
        {/* Left: Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 bg-gray-800 p-8 rounded-xl shadow-lg border border-white/10 flex flex-col gap-4"
        >
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">Get in Touch</h2>
          <p className="text-gray-300 mb-6">
            Have a question, project idea, or just want to say hello? Send me a message!
          </p>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
          ></textarea>

          <button
            type="submit"
            className="mt-4 bg-yellow-400 text-gray-900 font-semibold px-6 py-2 rounded-lg hover:bg-yellow-500 transition-all duration-300"
          >
            {submitted ? "Sent!" : "Send Message"}
          </button>
        </form>

        {/* Right: Info & Social Links */}
        <div className="flex-1 flex flex-col justify-between gap-6">
          {/* Social */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold text-yellow-400 mb-4">Connect with Me</h3>
            <div className="flex justify-center md:justify-start gap-6 mb-6">
              <a href="mailto:vish.k1395@gmail.com" target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition">
                <Mail size={30} />
              </a>
              <a href="https://www.linkedin.com/in/vishalkmr1395/" target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition">
                <Linkedin size={30} />
              </a>
              <a href="https://github.com/vishalkmr1395" target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition">
                <Github size={30} />
              </a>
              <a href="https://twitter.com/vishalkmr13951" target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition">
                <Twitter size={30} />
              </a>
            </div>
          </div>

          {/* Contact Info with icons */}
          <div className="text-gray-300 space-y-3">
            <div className="flex items-center gap-2">
              <MapPin size={20} className="text-yellow-400" />
              <span>USA</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={20} className="text-yellow-400" />
              <span>vish.k1395@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={20} className="text-yellow-400" />
              <span></span>
            </div>
            <div>
              <span className="font-semibold">Availability:</span> I Usually respond within 24 hours
            </div>
          </div>

          {/* Skills / Services */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Skills & Services</h3>
            <ul className="flex flex-wrap gap-4 justify-center md:justify-start">
              <li className="bg-gray-800 px-4 py-2 rounded-lg border border-white/10 hover:bg-gray-700 transition">Product Management</li>
              <li className="bg-gray-800 px-4 py-2 rounded-lg border border-white/10 hover:bg-gray-700 transition">A/B Experimentation</li>
              <li className="bg-gray-800 px-4 py-2 rounded-lg border border-white/10 hover:bg-gray-700 transition">System Design</li>
              <li className="bg-gray-800 px-4 py-2 rounded-lg border border-white/10 hover:bg-gray-700 transition">Database Design</li>
              <li className="bg-gray-800 px-4 py-2 rounded-lg border border-white/10 hover:bg-gray-700 transition">API Design</li>
              <li className="bg-gray-800 px-4 py-2 rounded-lg border border-white/10 hover:bg-gray-700 transition">Vibe Coding</li>
              <li className="bg-gray-800 px-4 py-2 rounded-lg border border-white/10 hover:bg-gray-700 transition">Distributed Systems</li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
