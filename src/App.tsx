import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Code2,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Monitor,
  Phone,
  Rocket,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

import certificate1 from "./c1.jpg";
import certificate2 from "./c2.jpg";
import certificate3 from "./c3.jpg";
import certificate4 from "./c4.jpg";
import certificate5 from "./c5.jpg";

type Project = {
  title: string;
  description: string;
  tags: string[];
  category: string;
  github: string;
  demo: string;
};

type Certificate = {
  title: string;
  issuer: string;
  date: string;
  credential: string;
};

const profile = {
  name: "Pushpita Das Proma",
  shortName: "Pushpita",
  role: "EEE Student • Technology Enthusiast",
  university: "Jamalpur Science and Technology University",
  department: "Department of Electrical & Electronic Engineering",
  location: "Bangladesh",
  email: "pushpitaproma925@gmail.com",
  phone: "+880 1819938521",
  github: "https://github.com/pushpitaproma925-jpg",
  linkedin: "https://www.linkedin.com/in/pushpita-das-proma-a29087344?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  instagram: "https://www.instagram.com/me_promaa?stkn=NDM1dDhnZDl0cXEw",
  cv: "/cv.pdf",
};

const projects: Project[] = [
  {
    title: "Smart Energy Meter + IoT",
    description:
      "A concept for monitoring electrical energy consumption and sending useful usage data through an IoT-enabled system.",
    tags: ["IoT", "ESP32", "Energy", "EEE"],
    category: "Engineering",
    github: "https://github.com/yourusername",
    demo: "#contact",
  },
  {
    title: "Solar MPPT Charge Controller",
    description:
      "A solar charging project focused on extracting maximum available power from a photovoltaic source under changing conditions.",
    tags: ["MPPT", "Solar", "Power Electronics"],
    category: "Engineering",
    github: "https://github.com/yourusername",
    demo: "#contact",
  },
  {
    title: "Transformer Health Monitoring",
    description:
      "A proposed monitoring system for tracking transformer operating conditions and supporting early detection of abnormal behavior.",
    tags: ["Transformer", "Sensors", "Monitoring"],
    category: "Engineering",
    github: "https://github.com/yourusername",
    demo: "#contact",
  },
  {
    title: "Developer Portfolio",
    description:
      "A responsive personal portfolio built to present academic work, engineering projects, skills, achievements and certificates.",
    tags: ["React", "TypeScript", "Tailwind"],
    category: "Web",
    github: "https://github.com/yourusername",
    demo: "#home",
  },
  {
    title: "Railway Regenerative Braking Concept",
    description:
      "A conceptual railway energy-saving model using regenerative braking, local energy buffering and smart control ideas.",
    tags: ["Railway", "Energy", "Innovation"],
    category: "Research",
    github: "https://github.com/yourusername",
    demo: "#contact",
  },
  {
    title: "Digital Electronics Projects",
    description:
      "A collection of digital logic and electronics learning projects covering gates, Boolean algebra, K-maps and practical circuits.",
    tags: ["Digital Logic", "Circuits", "Electronics"],
    category: "Academic",
    github: "https://github.com/yourusername",
    demo: "#contact",
  },
];

const certificates: Certificate[] = [
  {
    title: "Certificate 01",
    issuer: "Introduction to MS Excel by Microsoft",
    year: "2026",
    image: certificate1,
  },
  {
    title: "Certificate 02",
    issuer: "IEEE Research Membership",
    year: "2026",
    image: certificate2,
  },
  {
    title: "Certificate 03",
    issuer: "IEEE 3 days Hands on Training Program",
    year: "2026",
    image: certificate3,
  },
  {
    title: "Certificate 04",
    issuer: "Intrduction To Cybersecurity Awareness by HP",
    year: "2026",
    image: certificate4,
  },
  {
    title: "Certificate 05",
    issuer: "Critical Thinking of AI Era by HP",
    year: "2026",
    image: certificate5,
  },
];

const skills = [
  { name: "HTML & CSS", level: "Advanced Beginner", icon: Code2 },
  { name: "JavaScript", level: "Intermediate", icon: Code2 },
  { name: "React & TypeScript", level: "Learning", icon: Monitor },
  { name: "Tailwind CSS", level: "Learning", icon: Sparkles },
  { name: "C / C++", level: "Academic", icon: Code2 },
  { name: "Python", level: "Learning", icon: Code2 },
  { name: "MATLAB / Simulation", level: "Academic", icon: Zap },
  { name: "COMSOL / PSpice", level: "Academic", icon: BriefcaseBusiness },
];

const education = [
  {
    year: "Current",
    title: "B.Sc. in Electrical & Electronic Engineering",
    place: "Jamalpur Science and Technology University",
    description:
      "Building a strong foundation in electrical machines, power systems, electronics, digital logic, programming and engineering analysis.",
  },
  {
    year: "University Journey",
    title: "Academic + Technical Development",
    place: "EEE • Projects • Presentations • Programming",
    description:
      "Combining engineering study with software development, simulation, project building and technical communication.",
  },
];

const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Education", "education"],
  ["Projects", "projects"],
  ["Skills", "skills"],
  ["Achievements", "achievements"],
  ["Certificates", "certificates"],
  ["Contact", "contact"],
];

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <p className="section-label mb-3 text-xs font-bold uppercase text-sky-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-7 text-slate-400">{text}</p>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Engineering", "Web", "Research", "Academic"];
  const visibleProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const goTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-slate-200">
      {/* NAVBAR */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <button
            onClick={() => goTo("home")}
            className="group flex items-center gap-3"
          >
            <img
            src="/portfolio.jpg"
            alt={profile.name}
            className="h-10 w-10 rounded-full border-2 border-sky-400 object-cover"
          />
            <span className="hidden text-left sm:block">
              <span className="block text-sm font-bold text-white">
                {profile.name}
              </span>
              <span className="text-xs text-slate-500">Portfolio</span>
            </span>
          </button>

          <nav className="hidden items-center gap-5 lg:flex">
            {navItems.map(([label, id]) => (
              <button
                key={id}
                onClick={() => goTo(id)}
                className="text-sm font-medium text-slate-400 transition hover:text-white"
              >
                {label}
              </button>
            ))}
          </nav>

          <a
            href={profile.cv}
            className="hidden items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-semibold text-sky-300 transition hover:bg-sky-400/20 md:flex"
          >
            <Download size={16} />
            Download CV
          </a>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="rounded-lg p-2 text-slate-300 lg:hidden"
            aria-label="Open menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-white/10 bg-slate-950 px-5 py-5 lg:hidden"
            >
              <div className="mx-auto flex max-w-7xl flex-col gap-4">
                {navItems.map(([label, id]) => (
                  <button
                    key={id}
                    onClick={() => goTo(id)}
                    className="text-left text-sm font-semibold text-slate-300"
                  >
                    {label}
                  </button>
                ))}
                <a
                  href={profile.cv}
                  className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-sky-400 px-4 py-2 text-sm font-bold text-slate-950"
                >
                  <Download size={16} />
                  Download CV
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* HERO */}
      <main>
        <section
          id="home"
          className="grid-bg relative flex min-h-screen items-center px-5 pb-20 pt-32 sm:px-8"
        >
          <div className="absolute left-1/2 top-28 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.25fr_.75fr]">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-sm font-semibold text-sky-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                Open to learning & opportunities
              </div>

              <p className="mb-3 text-lg font-medium text-slate-400">
                Hello, I&apos;m
              </p>

              <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
                {profile.name}
                <span className="block gradient-text">Engineer in Progress.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
                {profile.role}. I&apos;m building my foundation across
                engineering, software, problem-solving and technology while
                turning ideas into meaningful projects.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <button
                  onClick={() => goTo("projects")}
                  className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-6 py-3 font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-300"
                >
                  Explore My Work
                  <ArrowUpRight size={18} />
                </button>
                <a
                  href={profile.cv}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-bold text-white transition hover:bg-white/10"
                >
                  <Download size={18} />
                  Download CV
                </a>
              </div>

              <div className="mt-9 flex items-center gap-4">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 p-3 text-slate-400 transition hover:border-sky-400/40 hover:text-sky-300"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 p-3 text-slate-400 transition hover:border-sky-400/40 hover:text-sky-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="rounded-full border border-white/10 p-3 text-slate-400 transition hover:border-sky-400/40 hover:text-sky-300"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
                <span className="ml-1 hidden text-sm text-slate-500 sm:block">
                  Let&apos;s build something meaningful.
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative mx-auto w-full max-w-md"
            >
              <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-r from-sky-500/20 to-indigo-500/20 blur-3xl" />
              <div className="glass relative overflow-hidden rounded-[2rem] p-5 shadow-2xl">
                <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-slate-800 via-slate-900 to-sky-950">
                  {/* Replace this placeholder with your photo:
                      <img src="/profile.jpg" alt={profile.name} className="h-full w-full object-cover" />
                  */}
                  <div className="flex h-full flex-col items-center justify-center px-8 text-center">
                    <div className="mb-5 flex h-28 w-28 items-center justify-center rounded-full border border-sky-300/30 bg-sky-400/10 text-4xl font-black text-sky-300">
                      {profile.shortName}
                    </div>
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-400">
                      EEE • Technology • Growth
                    </p>
                    <h2 className="mt-3 text-2xl font-black text-white">
                      Building today,
                      <br />
                      engineering tomorrow.
                    </h2>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="01 • About Me"
              title="More than a degree."
              text="A short professional introduction that tells visitors what you study, what you care about and where you're heading."
            />
            <div className="grid gap-6 lg:grid-cols-[1.15fr_.85fr]">
              <div className="glass rounded-3xl p-8 sm:p-10">
                <p className="text-lg leading-8 text-slate-300">
                  I am an Electrical & Electronic Engineering student with a
                  growing interest in technology, software development,
                  engineering innovation and practical problem solving.
                </p>
                <p className="mt-5 leading-8 text-slate-400">
                  My goal is to combine engineering knowledge with modern
                  digital skills to build useful, efficient and impactful
                  solutions. I enjoy learning through projects, experimentation
                  and continuous improvement.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    ["Focus", "Engineering + Technology"],
                    ["Learning", "Web Development + Programming"],
                    ["Approach", "Project-Based Learning"],
                    ["Goal", "Create Useful Solutions"],
                  ].map(([key, value]) => (
                    <div
                      key={key}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                    >
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        {key}
                      </p>
                      <p className="mt-1 font-semibold text-white">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass rounded-3xl p-8 sm:p-10">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-sky-400/10 p-3 text-sky-300">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      Based in
                    </p>
                    <p className="font-bold text-white">{profile.location}</p>
                  </div>
                </div>

                <div className="my-8 h-px bg-white/10" />

                <h3 className="text-xl font-bold text-white">
                  What I&apos;m building toward
                </h3>
                <div className="mt-5 space-y-4">
                  {[
                    "Strong engineering fundamentals",
                    "Modern software & programming skills",
                    "Research and practical project experience",
                    "A professional global career profile",
                  ].map((item) => (
                    <div key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-400" size={19} />
                      <span className="text-slate-400">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="bg-white/[0.02] px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-5xl">
            <SectionHeading
              eyebrow="02 • Education"
              title="Academic journey"
              text="Show your formal education while also highlighting the practical skills you are developing alongside your degree."
            />

            <div className="relative ml-3 border-l border-sky-400/20 pl-8">
              {education.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative mb-8 last:mb-0"
                >
                  <span className="absolute -left-[43px] top-2 flex h-6 w-6 items-center justify-center rounded-full border-4 border-slate-950 bg-sky-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-950" />
                  </span>
                  <div className="glass rounded-3xl p-7">
                    <p className="text-sm font-bold text-sky-400">{item.year}</p>
                    <h3 className="mt-2 text-xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 font-medium text-slate-400">{item.place}</p>
                    <p className="mt-4 leading-7 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="03 • Selected Work"
              title="Projects that show how I think."
              text="Projects are the strongest proof of practical ability. Replace these starter projects with your real work as you build it."
            />

            <div className="mb-10 flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    filter === category
                      ? "bg-sky-400 text-slate-950"
                      : "border border-white/10 bg-white/5 text-slate-400 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <motion.div layout className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {visibleProjects.map((project) => (
                  <motion.article
                    layout
                    key={project.title}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="group glass flex flex-col rounded-3xl p-6 transition hover:-translate-y-1 hover:border-sky-400/30"
                  >
                    <div className="mb-6 flex items-center justify-between">
                      <div className="rounded-2xl bg-sky-400/10 p-3 text-sky-300">
                        <Rocket size={22} />
                      </div>
                      <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-500">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-3 flex-1 leading-7 text-slate-500">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 flex gap-3 border-t border-white/10 pt-5">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-white"
                      >
                        <Github size={17} />
                        GitHub
                      </a>
                      <a
                        href={project.demo}
                        className="ml-auto inline-flex items-center gap-1 text-sm font-bold text-sky-400 hover:text-sky-300"
                      >
                        Details
                        <ChevronRight size={17} />
                      </a>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="bg-white/[0.02] px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="04 • Skills"
              title="Tools I use and skills I'm building."
              text="Keep this section honest and update the skill level as your abilities grow."
            />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="glass rounded-2xl p-5 transition hover:-translate-y-1 hover:border-sky-400/30"
                  >
                    <Icon className="text-sky-400" size={22} />
                    <h3 className="mt-5 font-bold text-white">{skill.name}</h3>
                    <p className="mt-1 text-sm text-slate-500">{skill.level}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section id="achievements" className="px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="05 • Achievements"
              title="Milestones worth remembering."
              text="Add academic results, competitions, presentations, leadership activities, hackathons and other meaningful milestones here."
            />

            <div className="grid gap-5 md:grid-cols-3">
              {[
                {
                  icon: GraduationCap,
                  title: "Academic Growth",
                  text: "Document strong semesters, relevant coursework and academic milestones as your university journey progresses.",
                },
                {
                  icon: Award,
                  title: "Technical Activities",
                  text: "Showcase presentations, technical events, competitions, workshops and project-based achievements.",
                },
                {
                  icon: BriefcaseBusiness,
                  title: "Career Development",
                  text: "Add internships, volunteering, leadership, freelance work and other professional experiences.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="glass rounded-3xl p-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-300">
                      <Icon />
                    </div>
                    <h3 className="mt-6 text-xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-7 text-slate-500">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CERTIFICATES */}
         <section
          id="certificates"
          className="border-y border-slate-800 bg-slate-900/30 py-24"
        >
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-14">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-400">
                Certificates
              </p>

              <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">
                Certifications & Learning
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                A collection of certifications, courses and learning
                achievements that demonstrate my continuous development.
              </p>
            </div>

            {/* FIVE CERTIFICATE CARDS */}
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {certificates.map((certificate, index) => (
                <article
                  key={certificate.image}
                  className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 transition duration-300 hover:-translate-y-1 hover:border-sky-400/40"
                >
                  {/* Certificate Image */}
                  <button
                    type="button"
                    onClick={() => setSelectedCertificate(certificate)}
                    className="block w-full cursor-pointer overflow-hidden text-left"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                      <img
                        src={certificate.image}
                        alt={certificate.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />

                      {/* Hover overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-slate-950/0 transition duration-300 group-hover:bg-slate-950/50">
                        <span className="scale-90 rounded-full bg-white px-5 py-2 text-sm font-bold text-slate-950 opacity-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100">
                          View Certificate
                        </span>
                      </div>

                      {/* Number */}
                      <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-slate-950/80 text-sm font-black text-sky-400 backdrop-blur">
                        0{index + 1}
                      </div>
                    </div>
                  </button>

                  {/* Certificate Information */}
                  <div className="p-6">
                    <h3 className="text-xl font-black text-white">
                      {certificate.title}
                    </h3>

                    <p className="mt-2 text-slate-400">
                      {certificate.issuer}
                    </p>

                    <div className="mt-5 flex items-center justify-between">
                      <span className="rounded-full bg-sky-400/10 px-3 py-1 text-xs font-bold text-sky-400">
                        {certificate.year}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          setSelectedCertificate(certificate)
                        }
                        className="text-sm font-bold text-slate-400 transition hover:text-sky-400"
                      >
                        View →
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>


        {/* CONTACT */}
        <section id="contact" className="px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-[2rem] border border-sky-400/20 bg-gradient-to-br from-sky-500/10 via-indigo-500/5 to-transparent p-8 sm:p-12">
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-sky-400/10 blur-3xl" />
              <div className="relative grid gap-10 lg:grid-cols-[1.2fr_.8fr]">
                <div>
                  <p className="section-label text-xs font-bold uppercase text-sky-400">
                    07 • Contact
                  </p>
                  <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">
                    Let&apos;s connect.
                  </h2>
                  <p className="mt-5 max-w-xl leading-8 text-slate-400">
                    Whether it&apos;s a project, internship, collaboration,
                    research opportunity or simply a professional connection,
                    feel free to reach out.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={`mailto:${profile.email}`}
                      className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-5 py-3 font-bold text-slate-950"
                    >
                      <Mail size={18} />
                      Email Me
                    </a>
                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 font-bold text-white"
                    >
                      <Linkedin size={18} />
                      LinkedIn
                    </a>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/10 p-4 transition hover:bg-white/5"
                  >
                    <Mail className="text-sky-400" />
                    <span>
                      <span className="block text-xs text-slate-500">Email</span>
                      <span className="font-semibold text-white">{profile.email}</span>
                    </span>
                  </a>
                  <a
                    href={`tel:${profile.phone}`}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/10 p-4 transition hover:bg-white/5"
                  >
                    <Phone className="text-sky-400" />
                    <span>
                      <span className="block text-xs text-slate-500">Phone</span>
                      <span className="font-semibold text-white">{profile.phone}</span>
                    </span>
                  </a>
                  <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/10 p-4">
                    <MapPin className="text-sky-400" />
                    <span>
                      <span className="block text-xs text-slate-500">Location</span>
                      <span className="font-semibold text-white">{profile.location}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-bold text-white">{profile.name}</p>
            <p className="mt-1 text-sm text-slate-500">
              Engineering • Technology • Continuous Learning
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full p-2 text-slate-500 hover:text-white"
            >
              <Github size={19} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full p-2 text-slate-500 hover:text-white"
            >
              <Linkedin size={19} />
            </a>
            <a
              href={profile.instagram}
              target="_blank"
              rel="noreferrer"
              className="rounded-full p-2 text-slate-500 hover:text-white"
            >
              <Instagram size={19} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full p-2 text-slate-500 hover:text-white"
            >
              <MessageCircle size={19} />
            </a>
          </div>

          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;