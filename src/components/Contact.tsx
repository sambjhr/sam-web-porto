"use client"

import React, { useState } from "react";
import { Mail, Phone } from "lucide-react";

export default function Contact() {
  const email = "sambjhr.work@gmail.com";
  const phone = "+62 812-8101-5918";

  // form state (simple)
  const [name, setName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<null | "idle" | "sending" | "sent" | "error">(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    // ---- MOCK / client-side only behavior ----
    // Replace this with EmailJS / serverless function as needed.
    try {
      // simulate async send
      await new Promise((res) => setTimeout(res, 900));
      setStatus("sent");
      setName("");
      setFromEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <div id="contact" className="mt-12 mb-24 flex justify-center">
      <div className="w-full max-w-lg">
        <div className="text-center mb-6">
          <p className="text-3xl text-slate-300 font-medium">Get in touch</p>
          <h4 className="mt-4 text-lg md:text-xl font-semibold text-slate-100">
            What's next? Feel free to reach out to me if you're looking for a developer,
            have a query, or simply want to connect.
          </h4>
        </div>

        {/* Card */}
        <div className="bg-[#0d1114] border border-slate-800 rounded-2xl p-6 shadow-[0_10px_30px_rgba(2,6,23,0.6)]">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-center text-sm font-semibold text-slate-300 mb-2">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Your name"
                className="w-full bg-[#081018] border border-slate-700 rounded-md px-4 py-3 text-slate-100 outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-center text-sm font-semibold text-slate-300 mb-2">Email</label>
              <input
                type="email"
                value={fromEmail}
                onChange={(e) => setFromEmail(e.target.value)}
                required
                placeholder="you@example.com"
                className="w-full bg-[#081018] border border-slate-700 rounded-md px-4 py-3 text-slate-100 outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-center text-sm font-semibold text-slate-300 mb-2">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={6}
                placeholder="Write your message..."
                className="w-full bg-[#081018] border border-slate-700 rounded-md px-4 py-3 text-slate-100 outline-none resize-vertical focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Send */}
            <div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-emerald-400 hover:bg-emerald-300 text-black font-semibold rounded-md py-3 transition"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </div>

            {/* optional contact quick info (matches your previous layout) */}
            <div className="pt-3 border-t border-slate-800 mt-2 text-slate-300">
              <div className="flex items-center justify-center gap-3 mt-3">
                <div className="p-2 rounded bg-[#071022] border border-slate-800">
                  <Mail size={18} />
                </div>
                <div className="text-sm">{email}</div>
              </div>

              <div className="flex items-center justify-center gap-3 mt-3">
                <div className="p-2 rounded bg-[#071022] border border-slate-800">
                  <Phone size={18} />
                </div>
                <div className="text-sm">{phone}</div>
              </div>
            </div>

            {/* status message */}
            {status === "sent" && (
              <div className="text-center text-emerald-400 font-medium">Message sent — thank you!</div>
            )}
            {status === "error" && (
              <div className="text-center text-rose-400 font-medium">Something went wrong. Try again.</div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}