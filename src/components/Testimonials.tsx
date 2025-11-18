export default function Testimonials(){
  return (
    <div id="testimonials" className="mt-12">
      <h3 className="text-2xl font-semibold text-center">What people say about me</h3>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {[1,2,3].map(i=> (
          <div key={i} className="p-4 bg-[#081226] rounded-xl border border-slate-800 text-slate-300">
            <p className="italic">"Samuel did a fantastic job delivering a clean and fast UI."</p>
            <p className="mt-3 font-semibold">John Doe</p>
            <p className="text-xs text-slate-400">Client</p>
          </div>
        ))}
      </div>
    </div>
  )
}