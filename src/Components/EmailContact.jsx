import React, { useState } from 'react';
import { Mail, MapPin, Send, Copy, Check, X } from 'lucide-react';
import { Github, Linkedin } from './Icons.jsx';

const EmailContact = () => {
  const [emailData, setEmailData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [emailStatus, setEmailStatus] = useState("idle");
  const [copied, setCopied] = useState(false);
  const myEmail = "adityakumargoyal06@gmail.com";

  const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

  const handleInputChange = (e) => {
    setEmailData({
      ...emailData,
      [e.target.name]: e.target.value,
    });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(myEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleQuickEmail = () => {
    const subject = encodeURIComponent("Collaboration Opportunity");
    const body = encodeURIComponent(
      `Hi Aditya,\n\nI'm interested in discussing potential collaboration opportunities with you.\n\nBest regards,`
    );
    window.open(`mailto:${myEmail}?subject=${subject}&body=${body}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, subject, message } = emailData;

    if (!name || !email || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    setEmailStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name,
          email,
          subject: subject || "Contact from Portfolio",
          message,
          reply_to: "adityakumargoyal06@gmail.com",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setEmailStatus("sent");
        setEmailData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(result.message || "Failed to send email.");
      }
    } catch (error) {
      console.error("Email send error:", error);
      setEmailStatus("error");
    } finally {
      setTimeout(() => setEmailStatus("idle"), 3000);
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/50 border border-gray-700/60 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/8 via-blue-500/8 to-cyan-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/15 to-blue-500/15 rounded-full blur-2xl"></div>

        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-6 text-white flex items-center">
            <Mail className="w-6 h-6 mr-3 text-purple-400" />
            Contact Information
          </h3>

          <div className="space-y-6">
            <div className="group/item hover:bg-gray-800/40 p-4 rounded-xl transition-all duration-300 border border-transparent hover:border-gray-700/60">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-purple-500/15 border border-purple-500/30 p-3 rounded-xl mr-4 group-hover/item:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Email</div>
                    <div className="text-white font-medium break-all">
                      {myEmail}
                    </div>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className="bg-gray-700 hover:bg-gray-600 p-2 rounded-lg transition-colors duration-300 transform hover:scale-110"
                  title="Copy email"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <div className="group/item hover:bg-gray-800/40 p-4 rounded-xl transition-all duration-300 border border-transparent hover:border-gray-700/60">
              <div className="flex items-center">
                <div className="bg-blue-500/15 border border-blue-500/30 p-3 rounded-xl mr-4 group-hover/item:scale-110 transition-transform duration-300">
                  <Linkedin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">LinkedIn</div>
                  <a
                    href="https://www.linkedin.com/in/aditya-kumar-goyal-1a631328a"
                    className="text-white hover:text-blue-400 transition-colors duration-300 font-medium"
                    target="blank"
                  >
                    Aditya Kumar Goyal
                  </a>
                </div>
              </div>
            </div>

            <div className="group/item hover:bg-gray-800/40 p-4 rounded-xl transition-all duration-300 border border-transparent hover:border-gray-700/60">
              <div className="flex items-center">
                <div className="bg-blue-500/15 border border-blue-500/30 p-3 rounded-xl mr-4 group-hover/item:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Location</div>
                  <a
                    href="https://iiitu.ac.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition-colors duration-300 font-medium"
                  >
                    IIIT Una, Himachal Pradesh
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-700/60">
            <div className="space-y-3">
              <button
                onClick={handleQuickEmail}
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center transform hover:scale-105 shadow-lg hover:shadow-purple-500/30 relative overflow-hidden group/btn"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                <Send className="w-5 h-5 mr-2 relative z-10" />
                <span className="relative z-10">Quick Email</span>
              </button>

              <div className="flex space-x-3">
                <a
                  href="https://www.linkedin.com/in/aditya-kumar-goyal-1a631328a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center transform hover:scale-105"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Aditya100905"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-700 hover:bg-gray-600 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center transform hover:scale-105"
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/50 border border-gray-700/60 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/8 via-blue-500/8 to-purple-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-green-500/15 to-blue-500/15 rounded-full blur-2xl"></div>

        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-6 text-white flex items-center">
            <Send className="w-6 h-6 mr-3 text-green-400" />
            Send Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-400 text-sm mb-2">
                  Name*
                </label>
                <input
                  type="text"
                  name="name"
                  value={emailData.name}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800/60 border border-gray-600/60 rounded-lg px-4 py-3 text-white focus:border-purple-400 focus:outline-none transition-colors duration-300"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2">
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  value={emailData.email}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800/60 border border-gray-600/60 rounded-lg px-4 py-3 text-white focus:border-purple-400 focus:outline-none transition-colors duration-300"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-400 text-sm mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={emailData.subject}
                onChange={handleInputChange}
                className="w-full bg-gray-800/60 border border-gray-600/60 rounded-lg px-4 py-3 text-white focus:border-purple-400 focus:outline-none transition-colors duration-300"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label className="block text-gray-400 text-sm mb-2">
                Message*
              </label>
              <textarea
                name="message"
                value={emailData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full bg-gray-800/60 border border-gray-600/60 rounded-lg px-4 py-3 text-white focus:border-purple-400 focus:outline-none transition-colors duration-300 resize-none"
                placeholder="Tell me about your project or idea..."
                required
              />
            </div>

            <button
              type="submit"
              disabled={emailStatus === "sending"}
              className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 disabled:from-gray-600 disabled:to-gray-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center transform hover:scale-105 disabled:scale-100 shadow-lg hover:shadow-green-500/30 relative overflow-hidden group/btn"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
              {emailStatus === "sending" ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  <span className="relative z-10">Sending...</span>
                </>
              ) : emailStatus === "sent" ? (
                <>
                  <Check className="w-5 h-5 mr-2 relative z-10" />
                  <span className="relative z-10">Message Sent!</span>
                </>
              ) : emailStatus === "error" ? (
                <>
                  <X className="w-5 h-5 mr-2 relative z-10" />
                  <span className="relative z-10">Error - Try Again</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2 relative z-10" />
                  <span className="relative z-10">Send Message</span>
                </>
              )}
            </button>

            <p className="text-gray-400 text-xs text-center">
              Your message will be sent securely using Web3Forms
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailContact;