import React, { useState, useEffect } from 'react';
import { Home, Briefcase, User } from 'lucide-react';

// Mock data for the portfolio projects
const mockProjects = [
  {
    id: 1,
    title: 'E-commerce Platform Redesign',
    description: 'A full-stack overhaul of a major online retail platform, focusing on performance, mobile-first design, and seamless checkout flow.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    link: '#project-1',
  },
  {
    id: 2,
    title: 'AI-Powered Content Generator',
    description: 'Developed a machine learning model integrated via an API to generate optimized, long-form articles based on user prompts.',
    tech: ['Python', 'TensorFlow', 'Flask', 'Next.js'],
    link: '#project-2',
  },
  {
    id: 3,
    title: 'Internal Analytics Dashboard',
    description: 'Built a real-time data visualization dashboard for internal teams to track KPIs, reducing reporting time by 40%.',
    tech: ['Angular', 'D3.js', 'Firebase', 'TypeScript'],
    link: '#project-3',
  },
];

// --- Sub-Components ---

const NavigationItem = ({ icon: Icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center space-x-2 px-4 py-2 transition-all duration-200 rounded-full text-sm font-medium
      ${isActive
        ? 'bg-blue-600 text-white shadow-lg'
        : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600'
      }
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
    `}
  >
    <Icon size={18} />
    <span className="hidden sm:inline">{label}</span>
  </button>
);

const ProjectCard = ({ project }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
    <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
    <p className="text-gray-600 mb-4">{project.description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {project.tech.map((t) => (
        <span key={t} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
          {t}
        </span>
      ))}
    </div>
    <a
      href={project.link}
      className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
    >
      View Details &rarr;
    </a>
  </div>
);

// --- Page Views ---

const HomePage = () => (
  <div className="text-center py-16 px-4">
    <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-4">
      Hello, I'm Preethika Prasad.
    </h1>
    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
      A USC MSCS Student focused on building scalable, accessible, and high-performance web applications.
    </p>
    <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-blue-700 transition-colors duration-300">
      View My Work
    </button>
    <img
      src="https://placehold.co/1200x500/2563EB/ffffff?text=Portfolio+Hero+Image"
      alt="Abstract digital graphic representing software development"
      className="mt-12 rounded-xl shadow-2xl border-4 border-white mx-auto max-w-full h-auto"
      onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/1200x500/2563EB/ffffff?text=Portfolio+Hero+Image"; }}
      style={{ maxWidth: '900px' }}
    />
  </div>
);

const ProjectsPage = () => (
  <div className="py-12 px-4">
    <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-2">Featured Projects</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {mockProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </div>
);

const AboutPage = () => (
  <div className="py-12 px-4">
    <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-2">About Me</h2>
    <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col lg:flex-row items-start lg:space-x-8">
      <img
        src="https://placehold.co/150x150/0f172a/ffffff?text=Profile"
        alt="Profile Photo Placeholder"
        className="w-32 h-32 rounded-full object-cover mb-6 lg:mb-0 shadow-md"
        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/150x150/0f172a/ffffff?text=Profile"; }}
      />
      <div className="flex-1">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">My Journey in Tech (USC MSCS)</h3>
        <p className="text-gray-600 mb-4">
          I am currently pursuing a Master of Science in Computer Science at **USC (University of Southern California)**. My academic focus is on scalable cloud architectures and responsive front-end development. My passion lies in solving complex problems and delivering elegant solutions that enhance user experience. I am proficient in modern JavaScript frameworks (React, Angular), backend technologies (Node.js, Python), and leveraging cloud services (AWS, Google Cloud).
        </p>
        <p className="text-gray-600">
          When I'm not coding, I enjoy hiking, open-source contributions, and playing chess. Feel free to connect!
        </p>
        <a
          href="mailto:preethika.prasad@example.com"
          className="mt-6 inline-block bg-green-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600 transition-colors"
        >
          Contact Me
        </a>
      </div>
    </div>
  </div>
);

// --- Main App Component ---

const App = () => {
  const [activeView, setActiveView] = useState('Home');

  // Simple function to render the correct page view based on state
  const renderView = () => {
    switch (activeView) {
      case 'Home':
        return <HomePage />;
      case 'Projects':
        return <ProjectsPage />;
      case 'About':
        return <AboutPage />;
      default:
        return <HomePage />;
    }
  };

  useEffect(() => {
    document.title = `${activeView} | Preethika Prasad Portfolio`;
  }, [activeView]);

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased flex flex-col">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-10 bg-white shadow-md">
        <div className="container mx-auto max-w-7xl px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold text-blue-600">
            P. P. Dev
          </h1>
          <nav className="flex space-x-2 md:space-x-4">
            <NavigationItem
              icon={Home}
              label="Home"
              isActive={activeView === 'Home'}
              onClick={() => setActiveView('Home')}
            />
            <NavigationItem
              icon={Briefcase}
              label="Projects"
              isActive={activeView === 'Projects'}
              onClick={() => setActiveView('Projects')}
            />
            <NavigationItem
              icon={User}
              label="About"
              isActive={activeView === 'About'}
              onClick={() => setActiveView('About')}
            />
            {/* GitHub Link (Updated) */}
            <a
              href="https://github.com/preethika-prasad-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 transition-all duration-200 rounded-full text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.827-.012-1.623-2.78 0-3.37-1.353-3.37-1.353-.455-1.152-1.11-1.458-1.11-1.458-.908-.618.069-.605.069-.605 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.342 1.088 2.913.829.092-.64.359-1.088.636-1.338-2.22-.253-4.555-1.116-4.555-4.938 0-1.09.39-1.984 1.029-2.685-.103-.253-.446-1.272.098-2.646 0 0 .84-.27 2.75 1.025A9.222 9.222 0 0112 6.845c.773 0 1.54.103 2.26.305 1.909-1.295 2.748-1.025 2.748-1.025.546 1.373.202 2.392.098 2.646.64.701 1.028 1.595 1.028 2.685 0 3.834-2.339 4.686-4.566 4.929.369.317.675.925.675 1.868 0 1.338-.012 2.419-.012 2.747 0 .268.18.578.688.482C21.137 20.19 24 16.438 24 12.017 24 6.484 19.522 2 14 2h-2z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow container mx-auto max-w-7xl px-4 py-8">
        {renderView()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-auto py-6">
        <div className="container mx-auto max-w-7xl text-center text-sm">
          &copy; {new Date().getFullYear()} Preethika Prasad. Built with React and deployed on Netlify.
        </div>
      </footer>
    </div>
  );
};

export default App;
