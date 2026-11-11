interface Skill {
  name: string;
  level: string;
}

export default function Home() {
  const skills: Skill[] = [
    { name: "TypeScript & JavaScript", level: "Menengah" },
    { name: "Next.js & React", level: "Menengah" },
    { name: "Tailwind CSS & HTML", level: "Mahir" },
    { name: "Git & GitHub", level: "Mahir" },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
        {/* Bagian Profil Utama */}
        <div className="mb-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800">
            Siap Magang Web Developer
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold mt-4 text-white">
            Halo, Saya Andika Galih
          </h1>
          <p className="text-slate-400 mt-2 leading-relaxed">
            Calon Web Developer yang berfokus pada pengembangan aplikasi web modern menggunakan TypeScript, Next.js, dan Tailwind CSS.
          </p>
        </div>

        {/* Bagian Daftar Skill */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-slate-200 mb-3">
            Tech Stack Utama
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center justify-between bg-slate-800/60 border border-slate-700/60 px-4 py-3 rounded-xl"
              >
                <span className="font-medium text-slate-200">{skill.name}</span>
                <span className="text-xs text-slate-400">{skill.level}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bagian Tombol Aksi */}
        <div className="flex flex-wrap gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold px-5 py-2.5 rounded-xl transition"
          >
            Lihat Profil GitHub
          </a>
        </div>
      </div>
    </main>
  );
}
