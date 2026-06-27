import {
  Mail,
  Phone,
  MapPin,
  Github,
  ExternalLink,
  Code,
  Database,
  Brain,
  Users,
  Zap,
  Award,
  Download,
} from "lucide-react";

export default function Portfolio() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  //porjects array

  const projects = [
    {
      title: "Portfolio Website",
      badge: "Personal Project",
      badgeColor: "bg-green-500/10 text-green-500",
      description:
        "Designed and developed a personal portfolio website to showcase skills, projects, and experience. Built with modern web technologies featuring responsive design, smooth navigation, and PDF resume generation functionality.",
      tech: [
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Vite",
        "Lucide Icons",
      ],
      link: "",
      current: true,
    },
    {
      title: "Crochet Store",
      badge: "Full Stack",
      badgeColor: "bg-pink-500/10 text-pink-500",
      description:
        "A modern crochet e-commerce application with product browsing, ordering, admin panel, and Supabase backend.",
      tech: [
        "React Native",
        "Expo",
        "Supabase",
        "TypeScript",
        "Admin Panel",
      ],
      link: "https://crochet-app-iota.vercel.app/",
      current: false,
    },
    {
      title: "NextShop",
      badge: "E-Commerce",
      badgeColor: "bg-secondary/20 text-secondary",
      description:
        "Collaborated on building an e-commerce web application using React.js while improving frontend pages, responsiveness, and performance.",
      tech: [
        "React.js",
        "Frontend",
        "Performance Optimization",
        "Responsive Design",
      ],
      link: "https://vibesta.netlify.app/",
      current: false,
    },
    {
      title: "Java-Based Task Manager",
      badge: "Mini Project",
      badgeColor: "bg-primary/10 text-primary",
      description:
        "Developed a console-based task manager using Java with Object-Oriented Programming concepts.",
      tech: ["Java", "OOP", "Console Application"],
      link: "",
      current: false,
    },
  ];

  const generateResumePDF = () => {
    // Create a new window with resume content for printing/saving as PDF
    const resumeContent = `
      <!DOCTYPE html>
      <html>
      <head>
        
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 40px;
            background: white;
          }
          .header {
            text-align: center;
            border-bottom: 2px solid #2563eb;
            padding-bottom: 20px;
            margin-bottom: 25px;
          }
          .header h1 {
            font-size: 32px;
            color: #1e40af;
            margin-bottom: 8px;
          }
          .header p {
            font-size: 14px;
            color: #666;
          }
          .contact-info {
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
            margin-top: 10px;
          }
          .contact-info a {
            color: #2563eb;
            text-decoration: none;
          }
          .section {
            margin-bottom: 25px;
          }
          .section h2 {
            font-size: 18px;
            color: #1e40af;
            border-bottom: 1px solid #ddd;
            padding-bottom: 5px;
            margin-bottom: 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          .section p, .section li {
            font-size: 14px;
            margin-bottom: 8px;
          }
          .project {
            margin-bottom: 15px;
          }
          .project h3 {
            font-size: 16px;
            color: #333;
            margin-bottom: 5px;
          }
          .project .tech {
            font-size: 12px;
            color: #2563eb;
            margin-top: 5px;
          }
          .skills-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
          }
          .skill-category h4 {
            font-size: 14px;
            color: #444;
            margin-bottom: 5px;
          }
          .skill-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 5px;
          }
          .skill-tag {
            background: #e0e7ff;
            color: #3730a3;
            padding: 2px 8px;
            border-radius: 3px;
            font-size: 12px;
          }
          ul {
            padding-left: 20px;
          }
          .education-item h3 {
            font-size: 16px;
            margin-bottom: 3px;
          }
          .education-item p {
            color: #666;
          }
          @media print {
            body {
              padding: 20px;
            }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Krishna Verma</h1>
          <p>B.Tech Computer Science (AI & ML) | Full-Stack Developer | Problem Solver</p>
          <div class="contact-info">
            <span>📍 Roorkee, Uttarakhand</span>
            <span>📞 +91 8171097466</span>
            <span>✉️ krishnav3rma@gmail.com</span>
            <a href="[github.com](https://github.com/krishnav3rma)">GitHub</a>
          </div>
        </div>

        <div class="section">
          <h2>Objective</h2>
          <p>Motivated and passionate B.Tech (CSE – AI & ML) student seeking an internship opportunity to apply programming, machine learning, and problem-solving skills in a real-world tech environment. Eager to contribute to innovative projects and gain hands-on experience in the industry.</p>
        </div>

        <div class="section">
          <h2>Education</h2>
          <div class="education-item">
            <h3>Bachelor of Technology (B.Tech) - Computer Science and Engineering</h3>
            <p>Specialization: Artificial Intelligence & Machine Learning</p>
            <p>College of Engineering Roorkee</p>
          </div>
        </div>

        <div class="section">
          <h2>Projects</h2>
          
          <div class="project">
            <h3>Portfolio Website</h3>
            <p>Designed and developed a personal portfolio website to showcase skills, projects, and experience. Built with modern web technologies featuring responsive design, smooth navigation, and PDF resume generation functionality.</p>
            <p class="tech">Technologies: React.js, TypeScript, Tailwind CSS, Vite, Lucide Icons</p>
          </div>

          <div class="project">
            <h3>NextShop - E-Commerce Web Application</h3>
            <p>Collaborated on building an e-commerce web application using React.js, focusing on developing and improving the frontend pages for a smooth and user-friendly experience. Contributed to optimizing performance and ensuring the application was responsive and easy to navigate.</p>
            <p class="tech">Technologies: React.js, Frontend Development, Performance Optimization, Responsive Design</p>
          </div>

          <div class="project">
            <h3>Java-Based Task Manager</h3>
            <p>Developed a console-based task manager using Java with Object-Oriented Programming concepts. The application demonstrates strong understanding of OOP principles and clean code practices.</p>
            <p class="tech">Technologies: Java, OOP, Console Application</p>
          </div>
        </div>

        <div class="section">
          <h2>Technical Skills</h2>
          <div class="skills-grid">
            <div class="skill-category">
              <h4>Programming Languages</h4>
              <div class="skill-tags">
                <span class="skill-tag">C</span>
                <span class="skill-tag">C++</span>
                <span class="skill-tag">Java</span>
                <span class="skill-tag">JavaScript</span>
                <span class="skill-tag">Python</span>
              </div>
            </div>
            <div class="skill-category">
              <h4>Frameworks & Libraries</h4>
              <div class="skill-tags">
                <span class="skill-tag">React.js</span>
                <span class="skill-tag">Node.js</span>
              </div>
            </div>
            <div class="skill-category">
              <h4>Tools & Technologies</h4>
              <div class="skill-tags">
                <span class="skill-tag">Git</span>
                <span class="skill-tag">GitHub</span>
                <span class="skill-tag">MySQL</span>
              </div>
            </div>
            <div class="skill-category">
              <h4>Data Structures & Algorithms</h4>
              <div class="skill-tags">
                <span class="skill-tag">Arrays</span>
                <span class="skill-tag">Linked Lists</span>
                <span class="skill-tag">Trees</span>
                <span class="skill-tag">Graphs</span>
                <span class="skill-tag">Hashing</span>
              </div>
            </div>
          </div>
        </div>

        <div class="section">
          <h2>Soft Skills</h2>
          <ul>
            <li>Analytical & Logical Thinking</li>
            <li>Strong Communication Skills</li>
            <li>Team Collaboration</li>
            <li>Fast Learner & Adaptable</li>
            <li>Organized & Detail-Oriented</li>
            <li>Basic knowledge of Agile Methodology</li>
          </ul>
        </div>
      </body>
      </html>
    `;

    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(resumeContent);
      printWindow.document.close();
      printWindow.onload = () => {
        printWindow.print();
      };
    }
  };

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">

            <div className="hidden md:flex gap-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Contact
              </button>
            </div>
            {/* Resume Download Button in Nav */}
            <button
              onClick={generateResumePDF}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
            >
              <Download className="w-4 h-4" />
              Resume
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
                  Welcome to my portfolio
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                Krishna <span className="text-primary">Verma</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                B.Tech Computer Science (AI & ML) | Full-Stack, Web & App Developer | Problem Solver
              </p>
              <div className="flex flex-col gap-3 text-muted-foreground">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Roorkee, Uttarakhand</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <a
                    href="tel:+918171097466"
                    className="hover:text-primary transition-colors"
                  >
                    +91 8171097466
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <a
                    href="mailto:krishnav3rma@gmail.com"
                    className="hover:text-primary transition-colors"
                  >
                    krishnav3rma@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="https://github.com/krishnav3rma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
                <a
                  href="https://vibesta.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-medium"
                >
                  <ExternalLink className="w-5 h-5" />
                  Projects
                </a>
                {/* Download Resume Button */}
                <button
                  onClick={generateResumePDF}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-medium"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl"></div>
                <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 p-12 rounded-2xl border border-primary/20">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-background rounded-lg p-6 border border-border text-center hover:border-primary transition-colors">
                      <div className="text-3xl font-bold text-primary mb-2">
                        3rd Year
                      </div>
                      <p className="text-sm text-muted-foreground">
                        B.Tech CSE Student
                      </p>
                    </div>
                    <div className="bg-background rounded-lg p-6 border border-border text-center hover:border-primary transition-colors">
                      <div className="text-3xl font-bold text-primary mb-2">
                        3
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Projects Built
                      </p>
                    </div>
                    <div className="bg-background rounded-lg p-6 border border-border text-center hover:border-primary transition-colors">
                      <div className="text-3xl font-bold text-primary mb-2">
                        Frontend
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Focused Development
                      </p>
                    </div>
                    <div className="bg-background rounded-lg p-6 border border-border text-center hover:border-primary transition-colors">
                      <div className="text-3xl font-bold text-primary mb-2">
                        Growing
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Skills & Experience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About / Objective Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Objective</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>
          <div className="bg-background rounded-lg p-8 border border-border hover:border-primary/50 transition-colors">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Motivated and passionate B.Tech (CSE – AI & ML) student seeking an
              internship opportunity to apply programming, machine learning, and
              problem-solving skills in a real-world tech environment. Eager to
              contribute to innovative projects and gain hands-on experience in
              the industry.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Projects</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>
          <div className="space-y-6">

            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-muted/30 rounded-lg p-8 border border-border hover:border-primary/50 transition-all hover:shadow-lg"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold">{project.title}</h3>

                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${project.badgeColor}`}
                  >
                    {project.badge}
                  </span>
                </div>

                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-primary/10 text-primary rounded text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {project.current ? (
                  <span className="inline-flex items-center gap-2 text-green-500 font-medium">
                    Currently Viewing
                  </span>
                ) : (
                  project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium"
                    >
                      View Live Project
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )
                )}
              </div>
            ))}
          </div>
        </div>  
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30"
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Education</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>
          <div className="bg-background rounded-lg p-8 border border-border hover:border-primary/50 transition-colors">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Bachelor of Technology (B.Tech)
                </h3>
                <p className="text-lg text-primary font-semibold mb-2">
                  Computer Science and Engineering
                </p>
                <p className="text-muted-foreground mb-2">
                  Specialization: Artificial Intelligence & Machine Learning
                </p>
                <p className="text-muted-foreground">
                  College of Engineering Roorkee
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Skills & Abilities</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Technical Skills</h3>
              </div>
              <div className="bg-muted/30 rounded-lg p-6 border border-border">
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold mb-3">Programming Languages</p>
                    <div className="flex flex-wrap gap-2">
                      {["C", "C++", "Java", "JavaScript", "Python", "TypeScript"].map(
                        (lang) => (
                          <span
                            key={lang}
                            className="px-3 py-1 bg-primary/10 text-primary rounded text-sm"
                          >
                            {lang}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold mb-3">Frameworks & Libraries</p>
                    <div className="flex flex-wrap gap-2">
                      {["React.js", "React Native", "Node.js", "Next.js", "Tailwind CSS", "Vite"].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary rounded text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold mb-3">Other Tools</p>
                    <div className="flex flex-wrap gap-2">
                      {["Git", "GitHub", "MySQL", "VS Code"].map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 bg-primary/10 text-primary rounded text-sm"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* DSA & OOP */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold">DSA & OOP</h3>
              </div>
              <div className="bg-muted/30 rounded-lg p-6 border border-border">
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold mb-3">Data Structures</p>
                    <div className="space-y-2">
                      {[
                        "Arrays & Linked Lists",
                        "Stacks & Queues",
                        "Trees & Graphs",
                        "Hashing",
                        "Sorting & Searching",
                      ].map((ds) => (
                        <div
                          key={ds}
                          className="flex items-center gap-2 text-sm"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span>{ds}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold mb-3">OOP in Java</p>
                    <p className="text-sm text-muted-foreground">
                      Strong understanding and practical implementation of
                      Object-Oriented Programming concepts
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Soft Skills</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Brain className="w-5 h-5" />,
                    title: "Analytical & Logical Thinking",
                  },
                  {
                    icon: <Users className="w-5 h-5" />,
                    title: "Communication Skills",
                  },
                  {
                    icon: <Users className="w-5 h-5" />,
                    title: "Team Collaboration",
                  },
                  {
                    icon: <Zap className="w-5 h-5" />,
                    title: "Fast Learner & Adaptable",
                  },
                  {
                    icon: <Award className="w-5 h-5" />,
                    title: "Organized & Detail-Oriented",
                  },
                  {
                    icon: <Code className="w-5 h-5" />,
                    title: "Agile Methodology (Basic)",
                  },
                ].map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg border border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      {skill.icon}
                    </div>
                    <p className="font-medium">{skill.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-accent/10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-lg text-muted-foreground mb-12">
            I'm always interested in hearing about new opportunities and
            exciting projects. Feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918171097466"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium text-lg"
            >
              <Phone className="w-5 h-5" />
              Call Me
            </a>
            <a
              href="mailto:krishnav3rma@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-background border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-medium text-lg"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <button
              onClick={generateResumePDF}
              className="inline-flex items-center gap-3 px-8 py-4 bg-background border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-medium text-lg"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>
            © 2026 Krishna Verma. All rights reserved. Built with React +
            Vite + Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
