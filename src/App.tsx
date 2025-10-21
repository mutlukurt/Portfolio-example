import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code2, Palette, Zap, Database, Globe, Terminal } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, inventory management, and real-time analytics.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, team workspaces, and advanced filtering.',
      tech: ['TypeScript', 'React', 'Supabase', 'Tailwind'],
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Real-time data visualization platform with customizable widgets and automated reporting features.',
      tech: ['React', 'D3.js', 'Express', 'MongoDB'],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#'
    }
  ];

  const skills = [
    { name: 'Frontend Development', icon: Code2, description: 'React, TypeScript, Next.js' },
    { name: 'UI/UX Design', icon: Palette, description: 'Figma, Tailwind CSS, Responsive Design' },
    { name: 'Performance', icon: Zap, description: 'Optimization, Core Web Vitals, SEO' },
    { name: 'Backend', icon: Database, description: 'Node.js, PostgreSQL, REST APIs' },
    { name: 'Web Technologies', icon: Globe, description: 'HTML5, CSS3, JavaScript ES6+' },
    { name: 'Dev Tools', icon: Terminal, description: 'Git, Docker, CI/CD, Testing' }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a
              href="#home"
              className="text-2xl font-bold text-white hover:text-emerald-400 transition-colors"
              onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            >
              Portfolio
            </a>

            <div className="hidden md:flex items-center gap-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium capitalize transition-colors ${
                    activeSection === section
                      ? 'text-emerald-400'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left py-2 text-sm font-medium capitalize transition-colors ${
                    activeSection === section
                      ? 'text-emerald-400'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </nav>
      </header>

      <main>
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
          <div className="container mx-auto px-6 py-20">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                Hello, I'm <span className="text-emerald-400">Your Name</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-8 animate-fade-in-delay">
                Full-Stack Web Developer & UI/UX Enthusiast
              </p>
              <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto animate-fade-in-delay-2">
                I craft beautiful, performant web experiences that solve real problems.
                Passionate about clean code, modern design, and creating solutions that make a difference.
              </p>
              <div className="flex flex-wrap justify-center gap-4 animate-fade-in-delay-3">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-emerald-500/50"
                >
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3 border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 font-semibold rounded-lg transition-all transform hover:scale-105"
                >
                  Get In Touch
                </button>
              </div>
              <div className="flex justify-center gap-6 mt-12 animate-fade-in-delay-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-emerald-400 transition-colors transform hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github size={28} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-emerald-400 transition-colors transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={28} />
                </a>
                <a
                  href="mailto:your.email@example.com"
                  className="text-slate-400 hover:text-emerald-400 transition-colors transform hover:scale-110"
                  aria-label="Email"
                >
                  <Mail size={28} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-12">
              About Me
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-slate-50 rounded-2xl p-8 md:p-12 shadow-lg">
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  I'm a passionate web developer with a keen eye for design and a commitment to creating
                  exceptional digital experiences. With expertise spanning frontend and backend development,
                  I bring ideas to life through clean, efficient code.
                </p>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  My journey in web development began with a fascination for how technology can solve
                  real-world problems. Since then, I've worked on diverse projects ranging from e-commerce
                  platforms to data visualization tools, always prioritizing user experience and performance.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source
                  projects, or sharing knowledge with the developer community. I believe in continuous learning
                  and staying at the forefront of web development trends.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-20 bg-slate-50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-12">
              Skills & Expertise
            </h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 border border-slate-200"
                  >
                    <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-emerald-600" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{skill.name}</h3>
                    <p className="text-slate-600">{skill.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-12">
              Featured Projects
            </h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <article
                  key={index}
                  className="bg-slate-50 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
                    >
                      View Project <ExternalLink size={16} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Let's Work Together
            </h2>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-xl text-slate-300 mb-12 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                <a
                  href="mailto:your.email@example.com"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-emerald-500/50"
                >
                  <Mail size={20} />
                  Send Email
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 font-semibold rounded-lg transition-all transform hover:scale-105"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
              </div>
              <div className="flex justify-center gap-6">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-emerald-400 transition-colors transform hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github size={32} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-emerald-400 transition-colors transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={32} />
                </a>
                <a
                  href="mailto:your.email@example.com"
                  className="text-slate-400 hover:text-emerald-400 transition-colors transform hover:scale-110"
                  aria-label="Email"
                >
                  <Mail size={32} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 text-slate-400 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Mutlu Kurt. Licensed under MIT License.
            </p>
            <div className="flex gap-6">
              <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="text-sm hover:text-emerald-400 transition-colors">
                Home
              </a>
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="text-sm hover:text-emerald-400 transition-colors">
                About
              </a>
              <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} className="text-sm hover:text-emerald-400 transition-colors">
                Projects
              </a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="text-sm hover:text-emerald-400 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
