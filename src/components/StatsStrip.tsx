const STATS = [
  { value: "3+", label: "Years Freelancing" },
  { value: "2,500+", label: "Students Trained" },
  { value: "3.78", label: "GPA — BINUS" },
  { value: "4+", label: "IT Projects Delivered" },
];

export default function StatsStrip() {
  return (
    <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
      {STATS.map((stat) => (
        <div
          key={stat.label}
          className="bg-white dark:bg-[#0b1220] rounded-[13px] border border-gray-200 dark:border-slate-700/55 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-[0_8px_24px_rgba(52,211,153,0.08)]"
        >
          <div className="text-2xl font-extrabold text-emerald-500 dark:text-emerald-400">{stat.value}</div>
          <div className="mt-1 text-gr-caption text-gray-500 dark:text-slate-400">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
