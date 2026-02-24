import React from 'react';

function formatExperienceSince(startDate: Date, now = new Date()) {
  const startTotalMonths = startDate.getFullYear() * 12 + startDate.getMonth();
  let nowTotalMonths = now.getFullYear() * 12 + now.getMonth();

  if (now.getDate() < startDate.getDate()) {
    nowTotalMonths -= 1;
  }

  const totalMonths = Math.max(0, nowTotalMonths - startTotalMonths);
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (months === 0) return `${years} yrs`;
  return `${years} yrs ${months} mos`;
}

const projects = [
  {
    title: 'UPI Onboarding & Payments – Paytm',
    period: '2024 – Present',
    description:
      'Revamped UPI onboarding and payment journeys at Paytm using Rive animations and tight WebView–Native integration for smooth, reliable flows.',
    tech: ['React', 'Rive', 'WebView', 'UPI'],
    role: 'Senior Software Developer at Paytm'
  },
  {
    title: 'CreditAssist – Credit Health Platform',
    period: '2023 – 2024',
    description:
      'Designed and built a credit‑score improvement platform from scratch, including UX experiments, tracking click events, and guiding users through personalized journeys.',
    tech: ['React', 'Node.js', 'REST APIs'],
    role: 'Software Developer at PayMe India'
  },
  {
    title: 'Loan Management System',
    period: '2022 – 2023',
    description:
      'Developed a React‑based loan management system for clients to manage applications, approvals, and repayments with automated testing workflows for reliability.',
    tech: ['React', 'Jest', 'Node.js'],
    role: 'Software Developer at PayMe India'
  },
  {
    title: 'CRM (ReactJS + GraphQL)',
    period: '2021 – 2022',
    description:
      'Built a SaaS admin CRM portal in React and integrated GraphQL APIs for fast, efficient data fetching and a smooth admin experience.',
    tech: ['React', 'GraphQL', 'TypeScript'],
    role: 'Software Developer at PayMe India'
  },
  {
    title: 'Digital Signature Email Service',
    period: 'Backend microservice',
    description:
      'Developed a secure and efficient REST API that digitally signs documents and delivers them to users via email.',
    tech: ['Node.js', 'AWS SES', 'AWS S3', 'Express'],
    role: 'Backend Microservice'
  },
  {
    title: 'E‑Mandate API',
    period: 'Backend microservice',
    description:
      'Built a REST API to enable automated EMI deductions every month using the Razorpay payment gateway.',
    tech: ['Node.js', 'Razorpay API', 'Express'],
    role: 'Backend Microservice'
  }
];

const experiences = [
  {
    company: 'Paytm',
    role: 'Senior Software Developer',
    period: 'November 2024 – Present',
    summary:
      'Working on UPI user onboarding and payment journeys with a focus on smooth UX, reliable integrations, and production stability.',
    bullets: [
      'Revamped the complete UPI user onboarding journey using Rive animations, covering phone number mapping, UPI ID creation, and VPA‑linked payment flows.',
      'Worked closely on WebView–Native integration to ensure smooth transitions, faster load times, and a seamless user experience.',
      'Added key functionalities in AutoPay Mandate and UPI Lite flows.',
      'Developed integration test cases for implemented features to ensure proper error reporting across all flows.',
      'Improved error handling and logging to make debugging easier and user experiences more reliable.'
    ]
  },
  {
    company: 'PayMe India',
    role: 'Software Developer',
    period: 'August 2021 – October 2024',
    summary:
      'Built and shipped multiple production‑grade fintech products, from credit‑score platforms to loan management tools and CRMs.',
    bullets: [
      'Designed and implemented CreditAssist, a credit‑health platform that guides users through improving their credit profile.',
      'Developed a React‑based loan management system to manage applications, approvals, and repayments with robust automated tests.',
      'Built a SaaS CRM admin portal in React with GraphQL integrations for efficient data fetching and smooth admin workflows.',
      'Created a referral web app for the PayMe product so users can invite friends, track lead statuses, and withdraw earnings.',
      'Collaborated closely with product, design, and QA to ship features end‑to‑end and keep core flows stable in production.'
    ]
  }
];

const skills = [
  { name: 'React', level: 'Advanced' },
  { name: 'Next.js', level: 'Advanced' },
  { name: 'JavaScript (ESNext)', level: 'Advanced' },
  { name: 'TypeScript', level: 'Advanced' },
  { name: 'Node.js', level: 'Intermediate' },
  { name: 'GraphQL', level: 'Advanced' },
  { name: 'Git / GitHub / Bitbucket', level: 'Advanced' },
  { name: 'AWS (SES, S3, Secrets Manager)', level: 'Intermediate' },
  { name: 'Docker & Nginx', level: 'Intermediate' },
];

const App: React.FC = () => {
  const experience = formatExperienceSince(new Date(2021, 5, 1));
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNavLinkClick = (id: string) => {
    handleScrollTo(id);
    setIsNavOpen(false);
  };

  const handleContactClick = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsNavOpen(false);
  };

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <div className="app">
      <header className="nav">
        <div className="container nav-inner">
          <div className="logo">
            Pramod <span>Singh</span>
          </div>
          <button
            className={`nav-toggle ${isNavOpen ? 'nav-toggle-open' : ''}`}
            onClick={toggleNav}
            aria-label="Toggle navigation"
            aria-expanded={isNavOpen}
          >
            <span />
            <span />
            <span />
          </button>
          <nav className={`nav-links ${isNavOpen ? 'nav-links-open' : ''}`}>
            <button className="nav-link" onClick={() => handleNavLinkClick('about')}>
              About
            </button>
            <button className="nav-link" onClick={() => handleNavLinkClick('projects')}>
              Projects
            </button>
            <button className="nav-link" onClick={() => handleNavLinkClick('experience')}>
              Experience
            </button>
            <button className="nav-link" onClick={() => handleNavLinkClick('skills')}>
              Skills
            </button>
            <button className="nav-link" onClick={() => handleNavLinkClick('contact')}>
              Contact
            </button>
          </nav>
        </div>
      </header>

      <main>
        <section id="hero">
          <div className="container hero">
            <div>
              <div className="hero-tag">
                <span className="hero-tag-dot" />
                Senior Software Developer · Paytm
              </div>
             
              <h1 className="hero-heading">
                Building reliable payment & credit
                <br />
                <span>experiences with React & Node</span>
              </h1>
              <p className="hero-body">
                I&apos;m Pramod, Senior Software Developer focused on fintech and digital payments. I have built UPI VPA creation systems, including custom VPA generation, validation logic, bank integrations, and production-grade payment flows. My expertise lies in developing scalable credit journeys, UPI integrations, and internal platforms using React, Node.js, and modern web technologies. I prioritize performance, security, and clean architecture to deliver systems that are both user-friendly and operationally reliable.
              </p>
              <div className="hero-meta">
                <span>React / Node.js / Microservices / Payments / AWS / SES </span>
                <span>Based in India</span>
                <span>Open to exciting opportunities</span>
              </div>
              <div className="hero-actions">
                <button className="btn btn-primary" onClick={handleContactClick}>
                  Contact me
                </button>
                <a
                  className="btn btn-outline"
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo('projects');
                  }}
                >
                  View projects
                </a>
              </div>
            </div>

            <aside className="hero-card">
              <div className="hero-card-top">
                <div>
                  <div className="hero-card-name">Pramod Singh</div>
                 
                </div>
                <div className="hero-card-badge">Senior Software Developer</div>
              </div>
              <div className="hero-card-role">Payments & Credit · React / Node.js</div>


              <div className="hero-card-rows">
                <div className="hero-card-row">
                  <div>
                    <div className="hero-card-label">Experience</div>
                    <div className="hero-card-value">{experience}</div>
                  </div>
                  <div>
                    <div className="hero-card-label">Focus</div>
                    <div className="hero-card-value">UPI, Lending, CRM</div>
                  </div>
                </div>

                <div className="hero-card-row hero-card-row-tech">
                  <div>
                    <div className="hero-card-label hero-card-label-strong">Technology</div>
                    <div className="pill-row">
                      <span className="pill">React Js</span>
                      <span className="pill">TypeScript</span>
                      <span className="pill">Node Js</span>
                      <span className="pill">Microservices</span>
                      <span className="pill">AWS</span>
                      <span className="pill">Next Js</span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section id="about">
          <div className="container">
            <h2 className="section-title">About</h2>
            <p className="section-subtitle">
              A bit about who I am, how I work, and what I like building.
            </p>
            <div className="grid grid-2">
              <div className="card">
                <div className="card-header">
                  <div>
                    <div className="card-title">Background</div>
                  <div className="card-meta">Engineer with payments & lending experience</div>
                  </div>
                </div>
                <p className="card-body">
                  I&apos;m a B.Tech graduate from IIIT Una (Computer Science, 2017–2021) and I&apos;ve
                  been building production systems in fintech ever since. I enjoy taking complex
                  financial flows—like UPI onboarding, mandates, and loan journeys—and turning them
                  into clear, guided experiences backed by solid engineering.
                </p>
                <div className="tag-row">
                  <span className="tag">Clean UI</span>
                  <span className="tag">Reusable components</span>
                  <span className="tag">Performance</span>
                  <span className="tag">Collaboration</span>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <div>
                    <div className="card-title">What I&apos;m looking for</div>
                    <div className="card-meta">Roles & work style</div>
                  </div>
                </div>
                <p className="card-body">
                  I&apos;m interested in roles where I can own key user journeys end‑to‑end,
                  collaborate closely with product and design, and work on systems that require both
                  clean UX and strong backend integrations—especially in payments, lending, or other
                  high‑impact domains.
                </p>
                <div className="tag-row">
                  <span className="tag">Frontend / React roles</span>
                  <span className="tag">Remote or hybrid</span>
                  <span className="tag">Long‑term collaboration</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects">
          <div className="container">
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle">
              A selection of work that shows how I think about UI, data, and production‑ready flows.
            </p>

            <div className="grid grid-2">
              {projects.map((project) => (
                <article className="card" key={project.title}>
                  <div className="card-header">
                    <div>
                      <div className="card-title">{project.title}</div>
                      <div className="card-meta">
                        {project.period} • {project.role}
                      </div>
                    </div>
                  </div>
                  <p className="card-body">{project.description}</p>
                  <div className="tag-row">
                    {project.tech.map((t) => (
                      <span className="tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience">
          <div className="container">
            <h2 className="section-title">Experience</h2>
            <p className="section-subtitle">
              Roles and responsibilities that best represent the kind of work I do.
            </p>

            <div className="grid grid-2">
              {experiences.map((exp) => (
                <article className="card" key={exp.company}>
                  <div className="card-header">
                    <div>
                      <div className="card-title">{exp.company}</div>
                      <div className="card-meta">
                        {exp.role} • {exp.period}
                      </div>
                    </div>
                  </div>
                  <p className="card-body">{exp.summary}</p>
                  <ul className="experience-list">
                    {exp.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="container">
            <h2 className="section-title">Skills</h2>
            <p className="section-subtitle">
              Tools and technologies I&apos;m comfortable shipping production work with.
            </p>

            <div className="card">
              <div className="skills-grid">
                {skills.map((skill) => (
                  <div className="skill-chip" key={skill.name}>
                    <span>{skill.name}</span>
                    <span className="skill-level">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="container">
            <h2 className="section-title">Contact</h2>
            <p className="section-subtitle">
              Have a role, idea, or project in mind? Reach out and let&apos;s talk.
            </p>

            <div className="contact-grid">
              <aside className="contact-side">
                <h3>Direct contact</h3>
                <p>
                  Prefer to reach out directly? Here are the best places to find me online. I&apos;m
                  usually quick to respond.
                </p>
                <ul className="contact-list">
                  <li>
                    <span className="contact-label">Phone</span>
                    <a className="contact-value" href="tel:+918959747704">
                      +91 89597 47704
                    </a>
                  </li>
                  <li>
                    <span className="contact-label">Email</span>
                    <a className="contact-value" href="mailto:pramodsinghiit2016@gmail.com">
                      pramodsinghiit2016@gmail.com
                    </a>
                  </li>
                  <li>
                    <span className="contact-label">GitHub</span>
                    <a
                      className="contact-value"
                      href="https://github.com/Ekaiva"
                      target="_blank"
                      rel="noreferrer"
                    >
                      github.com/Ekaiva
                    </a>
                  </li>
                  <li>
                    <span className="contact-label">LinkedIn</span>
                    <a
                      className="contact-value"
                      href="https://www.linkedin.com/in/pramodsingh11/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      linkedin.com/in/pramodsingh11/
                    </a>
                  </li>
                </ul>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} Pramod Singh
      </footer>
    </div>
  );
};

export default App;
