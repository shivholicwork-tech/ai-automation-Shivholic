export default function DashboardPage() {
  return <div className="p-8"><h2 className="text-2xl font-semibold">Dashboard</h2><div className="grid md:grid-cols-4 gap-4 mt-6">{['Leads','Messages','Workflows','Revenue'].map((k)=> <div key={k} className="rounded-xl border border-white/10 bg-white/5 p-4">{k}</div>)}</div></div>;
}
