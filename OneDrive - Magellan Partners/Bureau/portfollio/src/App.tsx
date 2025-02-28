import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import SkillBadge from './components/SkillBadge';

const LinkForBash = () => {
  window.open("https://github.com/Quentin-James/Squidguard-automation/tree/master", "_blank");
}
const LinkForCsharp = () => {
  window.open("https://github.com/Quentin-James/C-Exerice_Exakis", "_blank");
}
const LinkForAngular = () => {
  window.open("https://github.com/Quentin-James/Angular_Exercice-exakis", "_blank");
}
const LinkForGit = () => {
  window.open("https://github.com/Quentin-James", "_blank");
}
const LinkForLinkedin = () => {
  window.open("https://www.linkedin.com/in/quentin-james-/","_blank");
}
const LinkForMail = () => {
  window.open("mailto:jamesquentin46@gmail.com", "_blank");
}
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">Quentin James</h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-100">Futur DevOps</p>
          <div className="flex justify-center space-x-6 mb-12">
            <a onClick={LinkForGit} className="hover:text-gray-300 transition-colors"><Github size={24} /></a>
            <a onClick={LinkForLinkedin} className="hover:text-gray-300 transition-colors"><Linkedin size={24} /></a>
            <a onClick={LinkForMail} className="hover:text-gray-300 transition-colors"><Mail size={24} /></a>
          </div>
          <a href="#about" className="animate-bounce absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <ChevronDown size={32} />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed">
            I am a dedicated informatics student with a strong passion for development and cloud computing.
             I have experience in building robust web applications using React, where I am currently at a beginner level as I continue to learn and grow in this framework. 
             I possess an intermediate proficiency in Azure technologies, which enhances my understanding of cloud computing solutions. 
             My programming skills extend to C#, where I consider myself intermediate, enabling me to work on backend development projects effectively.
              I have a keen interest in Bash scripting, in which I am also at an intermediate level, allowing me to automate tasks efficiently. 
              Recently, I've become enthusiastic about creating projects with Raspberry Pi, integrating my programming skills and cloud knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            <SkillBadge name="React" level="Beginner" />
            <SkillBadge name="C#" level="Intermediate" />
            <SkillBadge name="PHP" level="Beginner" />
            <SkillBadge name="Azure" level="Intermediate" />
            <SkillBadge name="Bash" level="Intermediate" />
            <SkillBadge name="Angular" level="Beginner" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Squidguard automation"
              description="A bash project for Proxy Squidguard automation"
              image="https://dinahosting.com/blog/upload/2021/05/Que-es-Bash-Script.jpg"
              githubLink="https://github.com/Quentin-James/Squidguard-automation/tree/master"
              onClick={LinkForBash}
            />
            <ProjectCard
              title="Creation of a school web API"
              description="Creation of a web application for a school using C#"
              image="https://pbs.twimg.com/media/EF8rOe4UUAE43D8.jpg:large"
              githubLink="https://github.com/Quentin-James/Squidguard-automation/tree/master"
              onClick={LinkForCsharp}
            />
            <ProjectCard
              title="Front-end School web application"
              description="Creation of front-end web application using Angular"
              image="https://www.angularjswiki.com/angular/angular-14-release/featured.png"
              githubLink="https://github.com/Quentin-James/Squidguard-automation/tree/master"
              onClick={LinkForAngular}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="max-w-lg mx-auto">
            <div className="flex flex-col space-y-4">
              <a href="mailto:jamesquentin46@gmail.com" className="flex items-center justify-center space-x-2 text-gray-600 hover:text-indigo-600 transition-colors">
                <Mail size={20} />
                <span>jamesquentin46@gmail.com</span>
              </a>
              <div className="flex justify-center space-x-6">
                <a href="https://github.com/Quentin-James" className="text-gray-600 hover:text-indigo-600 transition-colors"><Github size={24} /></a>
                <a href="https://www.linkedin.com/in/quentin-james-/" className="text-gray-600 hover:text-indigo-600 transition-colors"><Linkedin size={24} /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <p>© 2025 James Developer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;