import { Mail, Phone } from 'lucide-react'

export default function Contact(){
  const email = 'sambjhr.work@gmail.com'
  const phone = '+62 812-8101-5918'

  return (
    <div id="contact" className="mt-12 mb-24 text-center">
      <div className="max-w-3xl mx-auto">
        <p className="text-3xl text-slate-300">Get in touch</p>

        <h4 className="mt-6 text-2xl md:text-3xl font-semibold text-slate-100">
          What's next? Feel free to reach out to me if you're looking for a developer,
          have a query, or simply want to connect.
        </h4>

        <div className="mt-10 space-y-8 py-6">
          {/* Email */}
          <div className="flex items-center justify-center gap-4">
            <div className="p-3 rounded-md bg-[#071022] border border-slate-800">
              <Mail size={26} />
            </div>
            <p className="text-2xl md:text-3xl font-semibold">{email}</p>
          </div>

          {/* Phone */}
          <div className="flex items-center justify-center gap-4 py-6">
            <div className="p-3 rounded-md bg-[#071022] border border-slate-800">
              <Phone size={26} />
            </div>
            <p className="text-2xl md:text-3xl font-semibold">{phone}</p>
          </div>
        </div>
      </div>
    </div>
  )
}