import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Download,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Code2,
  Palette,
  Database,
  Terminal,
  GitBranch,
  Briefcase,
  GraduationCap,
  Award,
  Sparkles,
  Heart,
  Utensils,
  KeyRound,
} from "lucide-react";
import portrait from "@/assets/hero-portrait.png";
import { Nav } from "@/components/Nav";
import { ParticleField } from "@/components/ParticleField";
import { CustomCursor } from "@/components/CustomCursor";
import { Loader } from "@/components/Loader";
import { Reveal } from "@/components/Reveal";
import { SmoothScroll } from "@/components/SmoothScroll";

export const Route = createFileRoute("/")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title: "Sumaiya — IT Professional & Engineer" },
      { name: "description", content: "Futuristic portfolio of Sumaiya — IT Engineer, Frontend Developer, UI/UX Designer. React, Supabase, Figma." },
      { property: "og:title", content: "Sumaiya — IT Professional & Engineer" },
      { property: "og:description", content: "Frontend developer & UI/UX designer building immersive digital experiences." },
    ],
  }),
});

const ROLES = ["IT Professional", "Frontend Developer", "UI/UX Designer"];

function Typewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = ROLES[i];
    const speed = del ? 50 : 90;
    const t = setTimeout(() => {
      if (!del) {
        setText(word.slice(0, text.length + 1));
        if (text.length + 1 === word.length) setTimeout(() => setDel(true), 1400);
      } else {
        setText(word.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDel(false);
          setI((i + 1) % ROLES.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);

  return (
    <span className="text-neon">
      {text}
      <span className="animate-blink">|</span>
    </span>
  );
}

const skills = [
  { name: "HTML / CSS / JS / React", value: 80, icon: Code2 },
  { name: "UI/UX Design & Figma", value: 90, icon: Palette },
  { name: "Supabase / API Integration", value: 100, icon: Database },
  { name: "C Programming", value: 60, icon: Terminal },
  { name: "VS Code / Git", value: 80, icon: GitBranch },
];

const experiences = [
  {
    role: "Junior Frontend Developer",
    company: "Zenacle Solutions",
    location: "Chennai, TN — India",
    period: "Jan 2026 – Present",
    points: [
      "Developed web pages and mobile features using modern frontend technologies",
      "Built responsive, user-friendly UI from design specifications",
      "Built mobile-responsive screens and components",
      "Integrated backend services and APIs using Supabase",
      "Debugged and resolved issues across web and mobile platforms",
      "Collaborated with team to deliver functional modules within deadlines",
    ],
  },
  {
    role: "Customer Engagement Specialist",
    company: "Frank & David Labs Pvt Ltd",
    location: "Zynerd, TN — India",
    period: "May 2025 – Dec 2025",
    points: [
      "Managed customer relationships across email, chat, and phone",
      "Collaborated with internal teams to improve customer satisfaction",
    ],
  },
  {
    role: "Front End Development — Internship",
    company: "Codebind Technologies Pvt Ltd",
    location: "TN — India",
    period: "Jun 2024 – Jul 2024",
    points: [
      "Built a responsive food delivery website with HTML, CSS, JavaScript",
      "Applied UI/UX principles in an onsite team environment",
    ],
  },
];

const projects = [
  {
    title: "Heart Health Monitoring System",
    icon: Heart,
    desc: "IoT system monitoring elderly patients' vitals with a real-time dashboard, alert notifications and recommendation logic.",
    tags: ["IoT", "Dashboard", "Alerts"],
  },
  {
    title: "Food Delivery Website",
    icon: Utensils,
    desc: "Responsive food delivery experience with interactive UI components built using HTML, CSS and JavaScript.",
    tags: ["HTML", "CSS", "JS"],
  },
  {
    title: "OTP Generator",
    icon: KeyRound,
    desc: "Secure OTP verification system with real-time validation and resend functionality.",
    tags: ["Auth", "Validation", "JS"],
  },
];

const education = [
  { degree: "B.Tech Information Technology", school: "St. Xavier's Catholic College of Engineering", period: "2021 – 2025", score: "CGPA 8.0" },
  { degree: "HSC", school: "St. Joseph's Convent Hr. Sec. School", period: "—", score: "85%" },
  { degree: "SSLC", school: "St. Joseph's Convent Hr. Sec. School", period: "—", score: "77%" },
];

const certifications = [
  "AWS Academy Graduate — Cloud Architecting",
  "CSS Training Certification — IIT Bombay",
  "JavaScript Training Certification — IIT Bombay",
];

function Portfolio() {
  return (
    <div className="relative min-h-screen gradient-bg text-foreground">
      <SmoothScroll />
      <Loader />
      <CustomCursor />
      <ParticleField />
      <div className="pointer-events-none fixed inset-0 z-0 grid-bg opacity-40" />
      <div className="pointer-events-none fixed -left-40 top-1/4 z-0 h-[500px] w-[500px] rounded-full bg-primary/30 blur-[120px]" />
      <div className="pointer-events-none fixed -right-40 top-2/3 z-0 h-[500px] w-[500px] rounded-full bg-accent/25 blur-[120px]" />

      <Nav />

      <main className="relative z-10">
        {/* HERO */}
        <section id="home" className="relative flex min-h-screen items-center px-6 pt-32">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-widest text-muted-foreground">
                  <Sparkles className="h-3 w-3 text-neon" /> Available for opportunities
                </span>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
                  Hi, I'm <span className="gradient-text">Sumaiya</span>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <h2 className="mt-4 text-xl font-medium text-muted-foreground sm:text-2xl">
                  <Typewriter />
                </h2>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
                  A creative frontend developer and UI/UX designer dedicated to building engaging, functional, and aesthetically refined digital experiences.
                </p>
              </Reveal>
              <Reveal delay={0.4}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground glow-md transition-all hover:glow-lg">
                    View Projects
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a href="/Sumaiya_Resume.pdf" download className="inline-flex items-center gap-2 rounded-full glass-strong px-6 py-3 text-sm font-semibold text-foreground transition-all hover:glow-sm">
                    <Download className="h-4 w-4" /> Download Resume
                  </a>
                  <a href="#contact" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:text-neon">
                    Contact Me
                  </a>
                </div>
              </Reveal>
              <Reveal delay={0.5}>
                <div className="mt-12 flex gap-8 text-sm">
                  <div>
                    <div className="font-display text-3xl font-bold text-neon">1.5</div>
                    <div className="text-muted-foreground text-xs">years exp</div>
                  </div>
                  <div className="h-12 w-px bg-border" />
                  <div>
                    <div className="font-display text-3xl font-bold text-neon">5+</div>
                    <div className="text-muted-foreground text-xs">projects</div>
                  </div>
                  <div className="h-12 w-px bg-border" />
                  <div>
                    <div className="font-display text-3xl font-bold text-neon">3+</div>
                    <div className="text-muted-foreground text-xs">certs</div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Portrait with orbits */}
            <div className="relative mx-auto aspect-square w-full max-w-[460px]">
              <div className="absolute inset-0 animate-pulse-glow rounded-full" />
              <div className="absolute inset-6 rounded-full bg-gradient-to-br from-primary/40 via-accent/30 to-transparent blur-2xl" />
              {/* orbit rings */}
              <div className="absolute inset-0 rounded-full border border-primary/20" />
              <div className="absolute inset-8 rounded-full border border-accent/20" />
              <div className="absolute inset-16 rounded-full border border-primary/10" />
              {/* orbiting dots */}
              {[0, 1, 2].map((k) => (
                <div
                  key={k}
                  className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 animate-orbit rounded-full bg-primary glow-sm"
                  style={{
                    ["--orbit-r" as string]: `${140 + k * 40}px`,
                    animationDuration: `${10 + k * 4}s`,
                    animationDirection: k % 2 ? "reverse" : "normal",
                  }}
                />
              ))}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative h-full w-full"
              >
                <div className="absolute inset-10 overflow-hidden rounded-full glass-strong glow-md">
                  <img src={portrait} alt="Sumaiya" className="h-full w-full object-cover" width={460} height={460} />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <Section id="about" eyebrow="About Me" title="Engineer with a designer's eye">
          <div className="grid gap-8 md:grid-cols-5">
            <Reveal className="md:col-span-3">
              <div className="rounded-3xl glass-strong neon-border p-8 leading-relaxed text-muted-foreground">
                Hardworking and focused IT fresher with a passion for learning new technologies. Ready to take on challenges and grow in a professional environment. Committed to building a successful career in the IT industry. I bring strong communication, teamwork, and problem-solving skills, and I'm eager to apply academic knowledge to real-world projects while continuously improving my technical abilities.
              </div>
            </Reveal>
            <Reveal delay={0.15} className="md:col-span-2">
              <div className="grid h-full grid-cols-2 gap-4">
                {[
                  { k: "Role", v: "IT Engineer" },
                  { k: "Based in", v: "Nagercoil, TN" },
                  { k: "Focus", v: "Frontend & UI/UX" },
                  { k: "Stack", v: "React · Supabase" },
                ].map((c) => (
                  <div key={c.k} className="rounded-2xl glass p-5">
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.k}</div>
                    <div className="mt-2 font-display font-semibold">{c.v}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Section>

        {/* SKILLS */}
        <Section id="skills" eyebrow="Skills" title="A toolkit forged in code">
          <div className="grid gap-5">
            {skills.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.07}>
                <div className="group rounded-2xl glass p-5 transition-transform hover:-translate-y-1">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-primary/15 p-2.5 text-neon glow-sm">
                        <s.icon className="h-5 w-5" />
                      </div>
                      <span className="font-medium">{s.name}</span>
                    </div>
                    <span className="font-display text-sm font-semibold text-neon">{s.value}%</span>
                  </div>
                  <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-muted/40">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full"
                      style={{ background: "linear-gradient(90deg, oklch(0.7 0.25 305), oklch(0.6 0.27 280))", boxShadow: "0 0 12px oklch(0.7 0.25 305 / 0.7)" }}
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* EXPERIENCE */}
        <Section id="experience" eyebrow="Experience" title="Where I've built things">
          <div className="relative">
            <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-primary via-accent to-transparent md:block" />
            <div className="space-y-6">
              {experiences.map((e, i) => (
                <Reveal key={e.role} delay={i * 0.08}>
                  <div className="relative md:pl-14">
                    <div className="absolute left-2 top-6 hidden h-5 w-5 rounded-full bg-primary glow-md md:block" />
                    <div className="rounded-2xl glass-strong p-6 transition-transform hover:-translate-y-1">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <h3 className="font-display text-xl font-semibold">{e.role}</h3>
                          <p className="text-sm text-muted-foreground">
                            {e.company} · {e.location}
                          </p>
                        </div>
                        <span className="rounded-full glass px-3 py-1 text-xs text-neon">{e.period}</span>
                      </div>
                      <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
                        {e.points.map((p) => (
                          <li key={p} className="flex gap-2">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neon" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Section>

        {/* PROJECTS */}
        <Section id="projects" eyebrow="Projects" title="Selected work">
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <ProjectCard p={p} />
              </Reveal>
            ))}
          </div>
        </Section>

        {/* EDUCATION + CERTS */}
        <Section id="education" eyebrow="Education & Certifications" title="The foundation">
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="rounded-2xl glass-strong p-6">
                <div className="mb-5 flex items-center gap-3">
                  <div className="rounded-xl bg-primary/15 p-2.5 text-neon">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl font-semibold">Education</h3>
                </div>
                <div className="space-y-4">
                  {education.map((ed) => (
                    <div key={ed.degree} className="rounded-xl glass p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="font-medium">{ed.degree}</div>
                          <div className="text-sm text-muted-foreground">{ed.school}</div>
                        </div>
                        <span className="text-xs text-neon">{ed.score}</span>
                      </div>
                      <div className="mt-1 text-xs text-muted-foreground">{ed.period}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-2xl glass-strong p-6">
                <div className="mb-5 flex items-center gap-3">
                  <div className="rounded-xl bg-primary/15 p-2.5 text-neon">
                    <Award className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl font-semibold">Certifications</h3>
                </div>
                <div className="space-y-3">
                  {certifications.map((c) => (
                    <div key={c} className="flex items-center gap-3 rounded-xl glass p-4">
                      <Sparkles className="h-4 w-4 shrink-0 text-neon" />
                      <span className="text-sm">{c}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-3 rounded-xl glass p-4">
                  <Briefcase className="h-4 w-4 text-neon" />
                  <span className="text-sm text-muted-foreground">Always learning. Always shipping.</span>
                </div>
              </div>
            </Reveal>
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact" eyebrow="Contact" title="Let's build something brilliant">
          <div className="grid gap-5 md:grid-cols-2">
            {[
              { icon: Mail, label: "Email", value: "sumaiyadot7@gmail.com", href: "https://mail.google.com/mail/?view=cm&fs=1&to=sumaiyadot7@gmail.com" },
              { icon: Phone, label: "Phone", value: "+91 87788 50930", href: "tel:+918778850930" },
              { icon: MapPin, label: "Location", value: "Nagercoil, TN — India" },
              { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/sumaiya-p", href: "https://www.linkedin.com/in/sumaiya-p-8a971529a" },
            ].map((c, i) => (
              <Reveal key={c.label} delay={i * 0.07}>
                <a
                  href={c.href ?? "#"}
                  target={c.href?.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-2xl glass-strong p-5 transition-all hover:-translate-y-1 hover:glow-sm"
                >
                  <div className="rounded-xl bg-primary/15 p-3 text-neon glow-sm transition-all group-hover:glow-md">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</div>
                    <div className="truncate font-medium">{c.value}</div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-3xl glass-strong neon-border p-8 text-center md:flex-row md:text-left">
              <div>
                <h3 className="font-display text-2xl font-semibold">Have a project in mind?</h3>
                <p className="text-sm text-muted-foreground">I'm open to freelance, collaborations and full-time roles.</p>
              </div>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sumaiyadot7@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground glow-md transition-all hover:glow-lg"
              >
                Start a conversation <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </Section>

        {/* FOOTER */}
        <footer className="relative z-10 mt-20 border-t border-border/50 px-6 py-10">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
            <div className="font-display text-sm text-muted-foreground">
              © {new Date().getFullYear()} <span className="gradient-text font-semibold">Sumaiya</span>
            </div>
            <div className="flex gap-3">
              {[
                { i: Linkedin, h: "https://www.linkedin.com/in/sumaiya-p-8a971529a" },
                { i: Mail, h: "https://mail.google.com/mail/?view=cm&fs=1&to=sumaiyadot7@gmail.com" },
                { i: Github, h: "https://github.com/Sumaiyamohideen" },
              ].map((s, idx) => (
                <a
                  key={idx}
                  href={s.h}
                  target={s.h.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="rounded-full glass p-3 text-muted-foreground transition-all hover:text-neon hover:glow-sm"
                >
                  <s.i className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-12 text-center">
            <span className="inline-block rounded-full glass px-4 py-1 text-xs uppercase tracking-[0.25em] text-neon">{eyebrow}</span>
            <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
              <span className="gradient-text">{title}</span>
            </h2>
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

function ProjectCard({ p }: { p: { title: string; icon: typeof Heart; desc: string; tags: string[] } }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  return (
    <div
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        setTilt({ x: y * -8, y: x * 8 });
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{ transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      className="group relative h-full overflow-hidden rounded-3xl glass-strong neon-border p-6 transition-transform duration-300"
    >
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/30 blur-3xl transition-opacity group-hover:opacity-80" />
      <div className="relative">
        <div className="mb-5 inline-flex rounded-2xl bg-primary/15 p-3 text-neon glow-sm">
          <p.icon className="h-6 w-6" />
        </div>
        <h3 className="font-display text-xl font-semibold">{p.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span key={t} className="rounded-full glass px-3 py-1 text-xs text-muted-foreground">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
