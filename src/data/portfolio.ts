// === Biodata & CV ===
export interface Biodata {
  name: string
  title: string
  university: string
  email: string
  phone: string
  location: string
  linkedin?: string
  github?: string
  website?: string
  about: string
  photoUrl: string
}

// === Pendidikan ===
export interface Education {
  institution: string
  degree: string
  field: string
  startYear: number
  endYear?: number
  gpa?: number
  description?: string
}

// === Pengalaman Organisasi & Kepanitiaan ===
export interface OrganizationExperience {
  organization: string
  role: string
  type: 'organisasi' | 'kepanitiaan'
  startDate: string
  endDate?: string
  descriptions: string[]
}

// === Skills ===
export interface SkillItem {
  name: string
  level?: number
  icon?: string
}

export interface SkillCategory {
  category: 'Soft Skills' | 'Hard Skills' | 'Programming Languages'
  items: SkillItem[]
}

// === Interest & Languages ===
export interface Interest {
  name: string
  icon?: string
}

export interface Language {
  name: string
  proficiency: 'Native' | 'Fluent' | 'Intermediate' | 'Beginner'
}

// === Proyek Kuliah ===
export interface Project {
  title: string
  technologies: string[]
  description: string
  link?: string
  imageUrl?: string
  course?: string
}

// === Root Data Structure ===
export interface PortfolioData {
  biodata: Biodata
  education: Education[]
  experiences: OrganizationExperience[]
  skills: SkillCategory[]
  interests: Interest[]
  languages: Language[]
  projects: Project[]
}


// ===================================================================
//  Konten Utama Portofolio
// ===================================================================

export const portfolioData: PortfolioData = {
  // ── Biodata ──────────────────────────────────────────────────────
  biodata: {
    name: 'Michael Ivan Farrelino',
    title: 'Mahasiswa Teknologi Informasi',
    university: 'Universitas Brawijaya',
    email: 'michaelivanf@gmail.com',
    phone: '+62 812-1825-7284',
    location: 'Jakarta, Indonesia',
    linkedin: 'https://linkedin.com/in/michaelivanf',
    github: 'https://github.com/mivanf',
    about:
      'Mahasiswa Teknologi Informasi yang berfokus pada Web Development dan Mobile App Development. ' +
      'Membangun solusi digital yang user-centered menggunakan berbagai bahasa pemrograman dan tools modern. ' +
      'Tertarik belajar hal baru dan berkontribusi dalam proyek kolaboratif.',
    photoUrl: '/profile-placeholder.svg',
  },

  // ── Pendidikan ───────────────────────────────────────────────────
  education: [
    {
      institution: 'Universitas Brawijaya',
      degree: 'Sarjana (S1)',
      field: 'Teknologi Informasi',
      startYear: 2023,
      gpa: 3.83,
      description:
        'Fokus pada bidang rekayasa perangkat lunak dan pengembangan web. Aktif dalam berbagai kegiatan dan organisasi kampus.',
    },
    {
      institution: 'SMA Negeri 14 Jakarta',
      degree: 'SMA',
      field: 'IPA (Ilmu Pengetahuan Alam)',
      startYear: 2020,
      endYear: 2023,
      description: '',
    },
  ],

  // ── Pengalaman Organisasi & Kepanitiaan ──────────────────────────
  experiences: [
    {
      organization: 'Keluarga Mahasiswa Katolik (KMK) FILKOM UB',
      role: 'Head of Public Relations and Multimedia Documentation Design Division',
      type: 'organisasi',
      startDate: 'Jan 2025',
      descriptions: [
        'Managed and coordinated Public Relations and Multimedia Documentation Design tasks, including internal workflow distribution and collaboration with external partners.',
        'Designed and produced official visual assets such as name tags and committee member profile layouts, and coordinated with printing vendors to ensure quality and timely delivery.',
        'Handled internal and external communications, including disseminating official announcements, managing inquiries and invitations, and coordinating media partnerships with other universities.',
      ],
    },
    {
      organization: 'IT FEST FILKOM UB',
      role: 'Member of the Competition Division',
      type: 'kepanitiaan',
      startDate: 'Mar 2024',
      endDate: 'Feb 2025',
      descriptions: [
        'Configured and maintained registration form content to ensure accurate collection of required participant data.',
        'Designed and documented scoring guidelines to support judges in conducting fair and consistent competition assessments.',
        'Served as a supporting Contact Person, coordinating with the Public Relations team to assist participants through official communication groups.',
      ],
    },
    {
      organization: 'Competition of Outstanding Creativity and Exploration (CODE) FILKOM UB',
      role: 'Member of Multimedia Documentation Design Division',
      type: 'kepanitiaan',
      startDate: 'Jul 2024',
      endDate: 'Jun 2025',
      descriptions: [
        'Designed Instagram feed content for event introduction and post-event recap to support digital engagement.',
        'Produced an event after-movie video by editing and compiling documentation footage for publication on Instagram.',
        'Prepared, reviewed, and updated a total of 850 digital certificates across 7 award categories, ensuring accuracy and consistency of participant data.',
      ],
    },
    {
      organization: 'Open House KMK FILKOM UB',
      role: 'Chief Executive',
      type: 'kepanitiaan',
      startDate: 'Sep 2024',
      endDate: 'Aug 2025',
      descriptions: [
        'Led and supervised the overall execution of the event by managing a team of 10 committee members, coordinating cross-division tasks, and monitoring progress through regular coordination meetings.',
        'Planned and managed event operations, including preparing the Event Budget Plan (RAB), preparing quiz prizes, and ensuring all logistical and technical requirements were fulfilled during the event.',
        'Designed and prepared event properties and supporting materials, ensured smooth quiz execution, and documented the event through photo and video production for reporting and publication purposes.',
      ],
    },
    {
      organization: 'Penerimaan Mahasiswa Baru KMK FILKOM UB',
      role: 'Chief Executive',
      type: 'kepanitiaan',
      startDate: 'Sep 2024',
      endDate: 'Aug 2025',
      descriptions: [
        'Led and supervised the overall execution of the event by managing a team of 10 committee members, coordinating cross-division tasks, and monitoring progress through regular coordination meetings.',
        'Planned and managed event operations, including preparing the Event Budget Plan (RAB), securing venue reservations at Malang Creative Center (MCC), and ensuring all preparatory activities were completed on schedule.',
        'Designed and prepared event properties and supporting materials, and documented the event through photo and video production for reporting and publication purposes.',
      ],
    },
    {
      organization: 'House of Technology (HOLOGY) 8.0 FILKOM UB',
      role: 'Member of Equipment Division',
      type: 'kepanitiaan',
      startDate: 'Jun 2025',
      //endDate: 'Jun 2025',
      descriptions: [
        'Coordinated the production and collection of trophies and plaques based on approved designs, and prepared all equipment and event props required for competitions and activities.',
        'Managed venue setup for both indoor and outdoor areas, including arranging the main hall for opening and closing ceremonies, as well as setting up tents and tables.',
        'Handled event logistics during execution, including meal distribution for judges, committee members, and participants, on-call support, and ensuring all equipment was returned to its original condition after the event.',
      ],
    },
  ],

  // ── Skills ───────────────────────────────────────────────────────
  skills: [
    {
      category: 'Programming Languages',
      items: [
        { name: 'TypeScript', level: 4, icon: '🟦' },
        { name: 'JavaScript', level: 5, icon: '🟨' },
        { name: 'Python', level: 4, icon: '🐍' },
        { name: 'Java', level: 3, icon: '☕' },
        { name: 'C++', level: 3, icon: '⚙️' },
        { name: 'SQL', level: 4, icon: '🗄️' },
      ],
    },
    {
      category: 'Hard Skills',
      items: [
        { name: 'Vue.js / React', level: 4, icon: '⚡' },
        { name: 'Node.js', level: 4, icon: '🟢' },
        { name: 'REST API Design', level: 4, icon: '🔌' },
        { name: 'Git & GitHub', level: 5, icon: '🔀' },
        { name: 'Docker', level: 3, icon: '🐳' },
        { name: 'Database Design', level: 4, icon: '📊' },
      ],
    },
    {
      category: 'Soft Skills',
      items: [
        { name: 'Kepemimpinan', level: 4, icon: '👥' },
        { name: 'Komunikasi', level: 5, icon: '💬' },
        { name: 'Problem Solving', level: 5, icon: '🧩' },
        { name: 'Kerja Tim', level: 5, icon: '🤝' },
        { name: 'Manajemen Waktu', level: 4, icon: '⏰' },
        { name: 'Berpikir Kritis', level: 4, icon: '🧠' },
      ],
    },
  ],

  // ── Interests ────────────────────────────────────────────────────
  interests: [
    { name: 'Web Development', icon: '🌐' },
    { name: 'UI/UX Design', icon: '🎨' },
    { name: 'Machine Learning', icon: '🤖' },
    { name: 'Open Source', icon: '💡' },
    { name: 'Cloud Computing', icon: '☁️' },
    { name: 'Competitive Programming', icon: '🏆' },
  ],

  // ── Languages ────────────────────────────────────────────────────
  languages: [
    { name: 'Indonesia', proficiency: 'Native' },
    { name: 'English', proficiency: 'Fluent' },
    { name: 'Japanese', proficiency: 'Beginner' },
  ],

  // ── Proyek Kuliah ────────────────────────────────────────────────
  projects: [
    {
      title: 'Notify',
      technologies: ['Vue.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
      description:
        'Platform e-commerce full-stack dengan fitur keranjang belanja, pembayaran, dan manajemen produk. Mengimplementasikan autentikasi JWT dan REST API.',
      link: 'https://github.com/mivanf/Project-PAM',
      course: 'Pemrograman Web',
    },
    {
      title: 'CEVO - Clean Energy Website',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Netlify', 'GitHub'],
      description:
        'A renewable energy education website in Indonesia featuring news, forums, a marketplace, and daily energy-saving challenges (CEVO Mission).',
      link: 'https://github.com/mIkhsan0/webs',
      course: 'Dasar Desain Antarmuka Pengguna',
    },
    {
      title: 'Galeri MVC - Web Application',
      technologies: ['PHP', 'MySQL', 'XAMPP', 'GitHub'],
      description:
        'An MVC-based gallery application for managing and displaying images along with user metadata.',
      link: 'https://github.com/mivanf/ImageGalleryUTS',
      course: 'Pengembangan Aplikasi Web',
    },
  ],
}
