import { Suspense } from "react";
import { prisma } from "@/lib/prisma";

async function ProjectList() {
  const projects = await prisma.project.findMany();

  return (
    <div className="space-y-4">
      {projects.map((item) => (
        <div
          key={item.id}
          className="bg-slate-900 border border-slate-800 p-5 rounded-xl"
        >
          <h2 className="text-xl font-semibold text-emerald-400">
            {item.title}
          </h2>
          <p className="text-slate-400 mt-1">{item.description}</p>
          <span className="inline-block mt-3 text-xs bg-slate-800 px-3 py-1 rounded-full">
            {item.techStack}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          Daftar Proyek Saya (Dari MySQL)
        </h1>

        <Suspense
          fallback={<p className="text-slate-400">Memuat data proyek...</p>}
        >
          <ProjectList />
        </Suspense>
      </div>
    </main>
  );
}