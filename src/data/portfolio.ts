// File: src/data/portfolio.ts

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  impact: string; // Metrik atau poin teknis utama (bikin portofolio terlihat informatif & berbobot)
  techStack: string[];
  link?: string;
  featured: boolean;
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "01",
    title: "Sistem Distribusi & Monitoring MBG",
    category: "Full-Stack Web & Mobile",
    year: "2026",
    description:
      "Platform pelacakan rantai pasok dan distribusi logistik secara real-time dengan arsitektur berlapis.",
    impact: "Menangani validasi data lapangan dengan latensi rendah & skema database terindeks.",
    techStack: ["Laravel", "PostgreSQL", "Flutter", "REST API"],
    link: "https://github.com/username/project-1",
    featured: true,
  },
  {
    id: "02",
    title: "AI Code Review & Architecture Assistant",
    category: "AI Engineering",
    year: "2026",
    description:
      "Prototipe asisten otomatis berbasis LLM untuk memeriksa kepatuhan prinsip SOLID dan Clean Code pada repositori mahasiswa.",
    impact: "Mengurangi waktu pengecekan boilerplate dan mendeteksi anti-pattern secara instan.",
    techStack: ["TypeScript", "Next.js", "Gemini API", "Tailwind CSS"],
    link: "https://github.com/username/project-2",
    featured: true,
  },
  {
    id: "03",
    title: "Biometric Auth Payment Verifier",
    category: "Mobile Security",
    year: "2025",
    description:
      "Implementasi modul autentikasi biometrik (fingerprint & face unlock) pada aplikasi mobile untuk verifikasi transaksi.",
    impact: "Memastikan keamanan sesi pengguna dengan enkripsi token lokal.",
    techStack: ["Flutter", "Dart", "Biometric Storage", "Clean Architecture"],
    link: "https://github.com/username/project-3",
    featured: false,
  },
];