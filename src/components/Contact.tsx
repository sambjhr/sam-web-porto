"use client"

import React, { useState } from "react";
import { Mail, Phone } from "lucide-react";

export default function Contact() {
  const email = "sambjhr.work@gmail.com";
  const phone = "+62 812-8101-5918";
  const waNumber = "6281281015918";

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = `Halo Samuel, Saya ${name.trim()}\n${message.trim()}`;
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;

    window.open(waUrl, "_blank", "noopener,noreferrer");
    setName("");
    setMessage("");
  }

  return (
    <div id="contact" className="mt-12 mb-24 flex justify-center">
      <div className="w-full max-w-lg">
        <div className="text-center mb-[21px]">
          <h3 className="text-gr-title text-gray-800 dark:text-slate-300 font-semibold">Get in touch</h3>
          <span className="section-accent mt-2 mx-auto" />
          <p className="mt-[13px] text-gr-body text-gray-500 dark:text-slate-400">
            What's next? Feel free to reach out to me if you're looking for a developer,
            have a query, or simply want to connect.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white dark:bg-[#0d1114] border border-gray-200 dark:border-slate-800 rounded-2xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_10px_30px_rgba(2,6,23,0.6)]">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="contact-name" className="block text-center text-gr-small font-semibold text-gray-700 dark:text-slate-300 mb-2">Name</label>
              <input
                id="contact-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Your name"
                className="w-full bg-gray-50 dark:bg-[#081018] border border-gray-300 dark:border-slate-700 rounded-md px-4 py-3 text-gray-900 dark:text-slate-100 placeholder-gray-400 dark:placeholder-slate-600 outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="contact-message" className="block text-center text-gr-small font-semibold text-gray-700 dark:text-slate-300 mb-2">Message</label>
              <textarea
                id="contact-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={6}
                placeholder="Write your message..."
                className="w-full bg-gray-50 dark:bg-[#081018] border border-gray-300 dark:border-slate-700 rounded-md px-4 py-3 text-gray-900 dark:text-slate-100 placeholder-gray-400 dark:placeholder-slate-600 outline-none resize-vertical focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Send */}
            <div>
              <button
                type="submit"
                className="w-full text-gr-small bg-emerald-400 hover:bg-emerald-300 text-black font-semibold rounded-md py-3 transition"
              >
                Send Message
              </button>
            </div>

            <div className="pt-3 border-t border-gray-200 dark:border-slate-800 mt-2 text-gray-600 dark:text-slate-300">
              <div className="flex items-center justify-center gap-3 mt-3">
                <div className="p-2 rounded bg-gray-100 dark:bg-[#071022] border border-gray-200 dark:border-slate-800">
                  <Mail size={18} />
                </div>
                <div className="text-gr-small">{email}</div>
              </div>

              <div className="flex items-center justify-center gap-3 mt-3">
                <div className="p-2 rounded bg-gray-100 dark:bg-[#071022] border border-gray-200 dark:border-slate-800">
                  <Phone size={18} />
                </div>
                <div className="text-gr-small">{phone}</div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
