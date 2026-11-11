"use client";

import { useState } from "react";

interface Skill {
  name: string;
  level: string;
  category: "Frontend" | "Tools";
}

export default function Home() {
  // State untuk menyimpan filter kategori yang sedang dipilih
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  // State untuk menyimpan status apakah email baru saja disalin
  const [copied, setCopied] = useState<boolean>(false);

  const skills: Skill[] = [
    { name: "TypeScript & JavaScript", level: "Menengah", category: "Frontend" },
    { name: "Next.js & React", level: "Menengah", category: "Frontend" },
    { name: "Tailwind CSS & HTML", level: "Mahir", category: "Frontend" },
    { name: "Git & GitHub", level: "Mahir", category: "Tools" },
  ];

  // Menyaring daftar skill berdasarkan kategori yang dipilih pengguna
  const filteredSkills =
    selectedCategory === "Semua"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  // Fungsi untuk menyalin email ke clipboard
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("andikagalih.assyaira@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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

        {/* Bagian Daftar Skill + Tombol Filter Interaktif */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <h2 className="text-lg font-semibold text-slate-200">
              Tech Stack Utama
            </h2>

            {/* Tombol Tab Filter */}
            <div className="flex gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800">
              {["Semua", "Frontend", "Tools"].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition cursor-pointer ${
                    selectedCategory === category
                      ? "bg-emerald-500 text-slate-950 font-semibold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Daftar Skill Hasil Filter */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {filteredSkills.map((skill) => (
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
            href="https://github.com/Andika-G"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold px-5 py-2.5 rounded-xl transition"
          >
            Lihat Profil GitHub
          </a>

          <button
            onClick={handleCopyEmail}
            className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium px-5 py-2.5 rounded-xl transition cursor-pointer"
          >
            {copied ? "Email Tersalin! ✓" : "Salin Email"}
          </button>
        </div>
      </div>
    </main>
  );
}
