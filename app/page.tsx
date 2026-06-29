import Head from 'next/head';

const siteConfig = {
  name: 'Frenz Edmund Rodolf Evangelista Cubillan',
  role: 'Computer Engineering Graduate',

  intro:
    'I build software, embedded systems, and AI-powered tools. My focus is on creating practical projects that connect hardware and software, from web applications to local LLM systems and automation solutions.',

  resumePdf: '/frenzportfolio/resume.pdf',

  resumeRepo: 'https://github.com/frenzcubillan-hash',
  github: 'https://github.com/frenzcubillan-hash',
  linkedin: 'https://www.linkedin.com/in/feryjfsgg/',
  email: 'frenzcubillan@gmail.com',

  photo: '/frenzportfolio/Profile.jpg'
};

const projects = [
  {
    title: 'Maze Game',
    tag: 'Procedural Generation / Seed-Based / Front-End',
    description: 'A web-based maze game with procedurally generated mazes based on a seed value, built with HTML, CSS, and JavaScript.',
    link: 'https://maze-game-biab.vercel.app/',
  },
  {
    title: 'AI File Analyzer',
    tag: 'LLM / AI / Full-Stack',
    description:
      'A web application for uploading documents and analyzing them with a locally hosted LLM. Built file processing, structured prompting, and response rendering.',
    link: 'https://github.com/frenzcubillan-hash/localfileanalyzer',
  },
  {
    title: 'Personalized Local LLM System',
    tag: 'AI / Fine-Tuning / Local Deployment',
    description:
      'Deployed local LLM pipelines using tools like Ollama and vLLM, explored prompt optimization, and tested lightweight query workflows.',
  },
  {
    title: 'Hawak Kamay Scholarship Portal',
    tag: 'Full-Stack / PHP / MySQL',
    description:
      'A school project built with HTML, CSS, JavaScript, PHP, and MySQL for student, instructor, and admin workflows.',
    link: 'https://github.com/frenzcubillan-hash/hkportal',
    },
  {
    title: 'Automated Piggery Cleaning System',
    tag: 'Embedded / IoT / ESP32-CAM',
    description:
      'An automation thesis project that used ESP32-CAM, local network access, and control logic for monitoring and disinfectant spraying.',
  },
  {
    title: 'Payslip Generator System',
    tag: 'C++ / File Handling / DSA',
    description:
      'A console-based payslip generator with file handling, record management, and calculation logic using pure C++.',
  },
  {
    title: 'UE4 Top-Down Game Prototype',
    tag: 'Game Dev / Blueprint',
    description:
      'An early Unreal Engine 4 prototype focused on character movement, controls, camera handling, and core gameplay logic.',
  },
];

const skills = [
  'C',
  'C++',
  'C#',
  'Python',
  'PHP',
  'MySQL',
  'HTML/CSS',
  'JavaScript',
  'TypeScript',
  'Next.js',
  'React',
  'Node.js',
  'Django',
  'Embedded Systems',
  'IoT',
  'AI / LLMs',
];

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteConfig.name} | Portfolio</title>
        <meta
          name="Description"
          content="Portfolio of a Computer Engineering graduate specializing in software, embedded systems, and AI."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="page">
        <section className="hero section section-spaced">
          <div className="hero-card hero-layout">
            <div className="hero-copy">
              <p className="eyebrow">{siteConfig.role}</p>
              <h1>
                Hi, I&apos;m <span>{siteConfig.name}</span>.
              </h1>
              <p className="lead">{siteConfig.intro}</p>

              <div className="hero-grid">
                <div className="hero-box">
                  <h3>What I do</h3>
                  <p>
                    Full-stack web development, embedded systems, local AI workflows, computer vision,
                    and automation projects.
                  </p>
                </div>
                <div className="hero-box">
                  <h3>My strongest area</h3>
                  <p>
                    Strong foundation in C programming, with hands-on experience across software and
                    hardware projects.
                  </p>
                </div>
              </div>

              <div className="resume-card">
                <div>
                  <p className="resume-label">Resume</p>
                  <h3>Download or view my resume</h3>
                  <p>
                    You can click the resume button to open the PDF directly, or go the resume repo to view my github resume!
                  </p>
                </div>

                <div className="resume-actions">
                  <a className="button-primary" href={siteConfig.resumePdf} target="_blank" rel="noreferrer">
                    View PDF Resume
                  </a>
                  <a className="button-secondary" href={siteConfig.resumeRepo} target="_blank" rel="noreferrer">
                    GitHub Repository
                  </a>
                </div>
              </div>

              <div className="skills-wrap">
                {skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section section-spaced">
          <div className="section-title">
            <p className="eyebrow">Projects & Experience</p>
            <h2>Things I have built</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <a href={project.link} target="_blank" rel="noreferrer">
                <p className="project-tag">{project.tag}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
               </a>
              </article>
            ))}
          </div>

          <div className="experience-card">
            <h3>Experience highlights</h3>
            <ul>
              <li>Built responsive interfaces and backend logic for student and admin systems.</li>
              <li>Worked with MySQL, PHP, Apache, and relational database design.</li>
              <li>Explored local model deployment, prompt engineering, and AI workflows.</li>
              <li>Developed embedded and IoT-based projects using ESP32-CAM and automation logic.</li>
            </ul>
          </div>
        </section>

        <section className="section section-spaced contact-section">
          <div className="section-title">
            <p className="eyebrow">Contact</p>
            <h2>Let&apos;s connect</h2>
          </div>

          <div className="contact-grid">
            <div className="contact-photo-card">
              <img
                className="contact-photo"
                src={siteConfig.photo}
                alt="A photo of Frenz"
              />
            </div>

            <div className="contact-card">
              <p>
                I&apos;m open to opportunities in software development, embedded systems, AI, and
                technical projects.
              </p>

              <div className="contact-links">
                <a href={siteConfig.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a href={`mailto:${siteConfig.email}`}>Email Me</a>
              </div>

              <p className="small-note">
                Check me out and feel free to contact me for collaborations, job opportunities, or just to say hi!
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}