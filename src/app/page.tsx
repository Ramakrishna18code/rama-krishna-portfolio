
export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navigation Header */}
      <nav className="bg-gradient-to-r from-blue-600 to-cyan-600 shadow-xl sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-white font-bold text-xl animate-fade-in-up">
              <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm mr-2">PR</span>
              Pedaviti Rama Krishna Reddy
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-white hover:text-cyan-200 transition-all duration-300 relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-200 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#experience" className="text-white hover:text-cyan-200 transition-all duration-300 relative group">
                Experience
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-200 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#projects" className="text-white hover:text-cyan-200 transition-all duration-300 relative group">
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-200 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#skills" className="text-white hover:text-cyan-200 transition-all duration-300 relative group">
                Skills
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-200 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#education" className="text-white hover:text-cyan-200 transition-all duration-300 relative group">
                Education
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-200 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contact" className="text-white hover:text-cyan-200 transition-all duration-300 relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-200 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="text-white hover:text-cyan-200 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 relative overflow-hidden min-h-screen flex items-center">
        {/* Large Background Text - Fixed Visibility */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <div className="text-[12rem] lg:text-[16rem] xl:text-[20rem] font-black text-gray-200 select-none leading-none tracking-tighter opacity-60">
            SOFTWARE
          </div>
          <div className="text-[8rem] lg:text-[12rem] xl:text-[15rem] font-black text-gray-200 select-none leading-none tracking-tighter opacity-50 -mt-8">
            ENGINEER
          </div>
        </div>
        
        {/* Animated Background Elements - Enhanced */}
        <div className="absolute inset-0">
          {/* Main floating orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
          
          {/* Additional floating elements */}
          <div className="absolute top-1/3 left-1/3 w-40 h-40 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-float animation-delay-1000"></div>
          <div className="absolute bottom-1/3 right-1/3 w-60 h-60 bg-gradient-to-l from-cyan-300 to-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-25 animate-float animation-delay-3000"></div>
          
          {/* Geometric shapes with enhanced animations */}
          <div className="absolute top-32 left-1/4 w-8 h-8 border-2 border-blue-400 rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-32 right-1/4 w-6 h-6 bg-cyan-400 rounded-full animate-bounce animation-delay-1000"></div>
          <div className="absolute top-1/2 left-16 w-4 h-16 bg-blue-300 opacity-60 animate-pulse animation-delay-3000 rounded-full"></div>
          <div className="absolute top-1/3 right-20 w-12 h-12 border border-cyan-400 animate-ping animation-delay-2500 rounded-lg"></div>
          
          {/* New animated elements */}
          <div className="absolute top-1/4 right-1/2 w-3 h-3 bg-blue-500 rounded-full animate-ping animation-delay-500"></div>
          <div className="absolute bottom-1/4 left-1/2 w-5 h-5 border-2 border-cyan-400 animate-spin animation-delay-1500"></div>
          <div className="absolute top-3/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 right-1/4 w-6 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 animate-pulse animation-delay-2500"></div>
          
          {/* Floating particles */}
          <div className="absolute top-20 left-1/2 w-1 h-1 bg-blue-400 rounded-full animate-bounce animation-delay-1000"></div>
          <div className="absolute bottom-20 right-1/2 w-1 h-1 bg-cyan-400 rounded-full animate-ping animation-delay-3000"></div>
          <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-blue-300 rounded-full animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Enhanced Animated Profile Picture */}
            <div className="relative mb-8">
              <div className="w-40 h-40 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-500 animate-float">
                <span className="text-white text-5xl font-bold">RK</span>
              </div>
              
              {/* Enhanced Floating Icons with more animations */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center animate-spin-slow hover:animate-bounce">
                <span className="text-2xl">💻</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce hover:animate-pulse">
                <span className="text-2xl">⚡</span>
              </div>
              <div className="absolute top-0 left-0 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full shadow-lg flex items-center justify-center animate-ping animation-delay-1500">
                <span className="text-lg">🚀</span>
              </div>
              <div className="absolute -top-2 left-1/2 w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-md flex items-center justify-center animate-pulse animation-delay-2000 transform -translate-x-1/2">
                <span className="text-sm">✨</span>
              </div>
              
              {/* Multiple Orbiting particles */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute top-0 left-1/2 w-3 h-3 bg-blue-400 rounded-full transform -translate-x-1/2 animate-pulse"></div>
                <div className="absolute top-1/2 right-0 w-2 h-2 bg-cyan-500 rounded-full transform -translate-y-1/2"></div>
              </div>
              <div className="absolute inset-0 animate-spin-slow animation-delay-2000" style={{animationDirection: 'reverse'}}>
                <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-cyan-400 rounded-full transform -translate-x-1/2 animate-bounce"></div>
                <div className="absolute top-1/2 left-0 w-3 h-3 bg-blue-500 rounded-full transform -translate-y-1/2 animate-ping"></div>
              </div>
              <div className="absolute inset-0 animate-spin animation-delay-1000">
                <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-blue-300 rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-cyan-300 rounded-full animate-bounce"></div>
              </div>
              
              {/* Ripple effects */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-300 opacity-30 animate-ping animation-delay-3000"></div>
              <div className="absolute inset-0 rounded-full border border-cyan-300 opacity-20 animate-pulse animation-delay-4000"></div>
            </div>
            
            {/* Enhanced Greeting with Wave Animation */}
            <div className="flex items-center justify-center mb-6 animate-fade-in-up">
              <span className="text-3xl animate-wave">👋</span>
              <span className="ml-4 text-xl text-gray-600 font-medium animate-slide-in-left animation-delay-500">Hello there, I'm</span>
              <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent animate-slide-in-right animation-delay-700">Rama Krishna</span>
            </div>
            
            {/* Enhanced Animated Text with Stagger Effect */}
            <h1 className="text-7xl font-extrabold text-gray-900 mb-6 animate-fade-in-up leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-800 bg-clip-text text-transparent animate-gradient">
                Software Engineer
              </span>
            </h1>
            <div className="text-2xl font-semibold text-blue-600 mb-6 animate-fade-in-up animation-delay-300">
              <span className="inline-block animate-typewriter">ASPiRiNG SALESFORCE ADMiN</span>
              <span className="mx-2">·</span>
              <span className="inline-block animate-typewriter animation-delay-1000">FRONTEND DEVELOPER</span>
            </div>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-600">
              "To work in an organization that provides ample opportunities to enhance my skills and contribute to its success."
            </p>
            
            {/* Animated Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8 animate-fade-in-up animation-delay-900">
              <div className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                <span className="text-2xl mr-2">📍</span>
                <span>Khammam, Telangana, India</span>
              </div>
              <div className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                <span className="text-2xl mr-2">📞</span>
                <span>9618341328</span>
              </div>
              <div className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                <span className="text-2xl mr-2">✉️</span>
                <span>rk4053727@gmail.com</span>
              </div>
            </div>
            
            {/* Enhanced Action Buttons */}
            <div className="flex gap-6 justify-center animate-fade-in-up animation-delay-1200">
              <a href="/Rama_Krishna_CV.pdf" download className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-xl shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <span className="flex items-center">
                  <span className="text-xl mr-2">📄</span>
                  Download CV
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </a>
              <a href="https://linkedin.com/in/rama-krishna-reddy-717b82248" target="_blank" className="group bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-4 px-8 rounded-xl shadow-xl transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center">
                  <span className="text-xl mr-2">💼</span>
                  LinkedIn Profile
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </a>
            </div>

            {/* Enhanced Interactive Elements */}
            <div className="mt-12 flex justify-center animate-fade-in-up animation-delay-1500">
              <div className="grid grid-cols-3 gap-8 items-center">
                {/* Tech Stack Icons with Hover Effects */}
                <div className="group flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300 animate-pulse animation-delay-1000">
                    <span className="text-white text-2xl">⚛️</span>
                  </div>
                  <span className="text-sm text-gray-600 mt-2 group-hover:text-blue-600 transition-colors">React</span>
                </div>
                
                <div className="group flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300 animate-pulse animation-delay-1500">
                    <span className="text-white text-2xl">🟢</span>
                  </div>
                  <span className="text-sm text-gray-600 mt-2 group-hover:text-green-600 transition-colors">Node.js</span>
                </div>
                
                <div className="group flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300 animate-pulse animation-delay-2000">
                    <span className="text-white text-2xl">☁️</span>
                  </div>
                  <span className="text-sm text-gray-600 mt-2 group-hover:text-purple-600 transition-colors">Salesforce</span>
                </div>
              </div>
            </div>

            {/* Floating Achievement Badges */}
            <div className="mt-8 flex justify-center space-x-6 animate-fade-in-up animation-delay-1800">
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-blue-200 animate-float animation-delay-1000">
                <span className="text-sm font-medium text-blue-700">6+ Months Experience</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-cyan-200 animate-float animation-delay-2000">
                <span className="text-sm font-medium text-cyan-700">3+ Projects</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-blue-200 animate-float animation-delay-3000">
                <span className="text-sm font-medium text-blue-700">Full Stack Dev</span>
              </div>
            </div>

            {/* Enhanced Scroll Indicator */}
            <div className="mt-16 animate-bounce">
              <div className="relative">
                <div className="w-6 h-10 border-2 border-blue-600 rounded-full mx-auto flex justify-center">
                  <div className="w-1 h-3 bg-blue-600 rounded-full mt-2 animate-pulse"></div>
                </div>
                {/* Animated arrow pointing down */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce animation-delay-1000">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4 animate-fade-in-up animation-delay-2000">Scroll to explore</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16 animate-pulse">Professional Experience</h2>
          <div className="space-y-12">
            {/* Current Role */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 shadow-xl border-l-4 border-blue-600 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">O</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-600 mb-1">Junior Software Engineer</h3>
                  <h4 className="text-lg text-gray-700">Omyra Technologies Pvt Ltd</h4>
                </div>
              </div>
              <p className="text-gray-600 mb-4 font-semibold">March 2025 – Present (6+ months)</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Promoted from intern to Junior Software Engineer within 3 months
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Contributing to full-stack development with increased responsibilities
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Optimizing CI/CD workflows, improving deployment efficiency
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Participating in code reviews and architectural discussions
                  </li>
                </ul>
              </div>
            </div>

            {/* Salesforce Experience */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">SF</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-700 mb-1">Salesforce Trailhead Experience</h3>
                  <h4 className="text-lg text-gray-600">Aspiring Salesforce Admin</h4>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                    Sales Cloud, Service Cloud, Lightning Experience
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                    Process Builder, Flow, Validation Rules
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                    Data Import/Export, Security Management
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                    Reporting/Dashboards, Automation Tools
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-300 to-cyan-300 transform rotate-6"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4 animate-fade-in-up">Featured Projects</h2>
          <p className="text-center text-gray-600 mb-16 animate-fade-in-up animation-delay-300">Showcasing innovative solutions and technical expertise</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <span className="text-white text-xl">🤖</span>
                </div>
                <h3 className="text-xl font-bold text-blue-600">College Website Chatbot</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">User-friendly web application with integrated chatbox for streamlining FAQs for parents and teachers. Enhanced accuracy through iterative feedback.</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>JavaScript
                </span>
                <span className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>HTML/CSS
                </span>
                <span className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>AI/ML
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">💻</div>
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">📱</div>
                </div>
                <button className="text-blue-600 hover:text-blue-800 font-semibold group-hover:translate-x-1 transition-transform">
                  View Details →
                </button>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <span className="text-white text-xl">🏥</span>
                </div>
                <h3 className="text-xl font-bold text-blue-600">SrivkPharma Website</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">Revamped global clinical-research site with modern, responsive UI and interactive sections on SAS R programming, CDISC standards, and trial management.</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-gradient-to-r from-red-100 to-red-200 text-red-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>HTML5
                </span>
                <span className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>CSS3
                </span>
                <span className="bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>Responsive
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">🌐</div>
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">📊</div>
                </div>
                <a href="https://srivkpharma.com" target="_blank" className="text-blue-600 hover:text-blue-800 font-semibold group-hover:translate-x-1 transition-transform">
                  Visit Site →
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <span className="text-white text-xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-blue-600">Vishwavasu Technologies</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">Full-featured, responsive company profile site with modern styling and design patterns. Ensured cross-browser compatibility and fast rendering.</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-gradient-to-r from-cyan-100 to-cyan-200 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>Tailwind CSS
                </span>
                <span className="bg-gradient-to-r from-pink-100 to-pink-200 text-pink-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>SCSS
                </span>
                <span className="bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>JavaScript
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">⚡</div>
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">🎨</div>
                </div>
                <button className="text-blue-600 hover:text-blue-800 font-semibold group-hover:translate-x-1 transition-transform">
                  View Details →
                </button>
              </div>
            </div>
          </div>

          {/* Project Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2 animate-pulse">3+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2 animate-pulse">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2 animate-pulse">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2 animate-pulse">6+</div>
              <div className="text-gray-600">Months Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Skills
          </h2>
          
          <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-6 justify-items-center max-w-5xl mx-auto">
            {/* HTML5 */}
            <div className="group flex flex-col items-center justify-center w-20 h-20 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <svg className="w-12 h-12 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 32 32">
                <path d="m5.902 27.201-1.902-21.201h24l-1.902 21.201-8.549 2.399z" fill="#e34f26"/>
                <path d="m16 27.858 6.907-1.918 1.625-18.14h-8.532z" fill="#ef652a"/>
                <path d="m16 13.191h-4.09l-.282-3.165h4.372v-3.091h-7.907l.074.829.759 8.518h7.074z" fill="#ebebeb"/>
                <path d="m16 21.958-.014.004-3.442-.929-.22-2.465h-1.549l-.073.818.408 4.578.014.004 6.876-1.91z" fill="#ebebeb"/>
                <path d="m15.989 13.191v3.165h3.648l-.344 3.838-3.304.891v3.283l6.061-1.683.045-.5.692-7.75.072-.809h-.813z" fill="#fff"/>
                <path d="m15.989 7.117v3.091h7.163l.059-.662.135-1.5.074-.929z" fill="#fff"/>
              </svg>
            </div>

            {/* CSS3 */}
            <div className="group flex flex-col items-center justify-center w-20 h-20 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <svg className="w-12 h-12 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 32 32">
                <path d="m5.902 27.201-1.902-21.201h24l-1.902 21.201-8.549 2.399z" fill="#1572b6"/>
                <path d="m16 27.858 6.907-1.918 1.625-18.14h-8.532z" fill="#33a9dc"/>
                <path d="m16 13.191h4.372l.282-3.165h-4.654v-3.091h7.907l-.074.829-.759 8.518h-7.074z" fill="#fff"/>
                <path d="m16.019 21.958-.014.004-3.442-.929-.22-2.465h-1.549l-.073.818.408 4.578.014.004 6.876-1.91z" fill="#ebebeb"/>
                <path d="m19.827 16.151-.344 3.838-3.464.891v3.283l6.061-1.683.045-.5.519-5.829z" fill="#fff"/>
                <path d="m16.011 7.234v3.091h-7.163l-.059-.662-.135-1.5-.074-.929z" fill="#ebebeb"/>
                <path d="m16.011 13.191h-7.074l-.074-.829.168-1.878.074-.829h6.906z" fill="#ebebeb"/>
              </svg>
            </div>

            {/* JavaScript */}
            <div className="group flex flex-col items-center justify-center w-20 h-20 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <svg className="w-12 h-12 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 32 32">
                <rect x="2" y="2" width="28" height="28" fill="#f7df1e"/>
                <path d="m20.809 23.875c.35 0 .678-.087.975-.262.297-.174.55-.412.759-.713.208-.301.313-.654.313-1.058 0-.479-.144-.904-.431-1.275-.287-.371-.695-.742-1.224-1.113-.528-.371-.96-.742-1.296-1.113-.336-.371-.504-.775-.504-1.212 0-.371.117-.675.351-.913.234-.238.546-.357.937-.357.391 0 .729.119.975.357.246.238.369.571.369 1v.175h1.287v-.175c0-.742-.246-1.371-.738-1.887-.492-.517-1.146-.775-1.962-.775-.816 0-1.47.258-1.962.775-.492.516-.738 1.145-.738 1.887 0 .742.158 1.371.475 1.887.317.516.729.971 1.237 1.363.508.392.929.784 1.263 1.175.334.392.501.825.501 1.3 0 .479-.117.871-.351 1.175-.234.305-.546.457-.937.457-.391 0-.729-.152-.975-.457-.246-.305-.369-.696-.369-1.175v-.262h-1.287v.262c0 .742.246 1.454.738 2.137.492.683 1.146 1.025 1.962 1.025zm-7.5.0c.35 0 .678-.175.984-.525.306-.35.459-.79.459-1.32v-6.03h-1.287v6.03c0 .263-.088.488-.263.675-.175.188-.392.282-.651.282-.259 0-.476-.094-.651-.282-.175-.187-.263-.412-.263-.675v-6.03h-1.287v6.03c0 .53.153.97.459 1.32.306.35.634.525.984.525h.516z" fill="#323330"/>
              </svg>
            </div>

            {/* React */}
            <div className="group flex flex-col items-center justify-center w-20 h-20 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <svg className="w-12 h-12 group-hover:rotate-180 transition-transform duration-500" viewBox="0 0 32 32">
                <circle cx="16" cy="16" r="2" fill="#61dafb"/>
                <path d="m16 11c-8.1 0-14.6 2.2-14.6 5s6.5 5 14.6 5 14.6-2.2 14.6-5-6.5-5-14.6-5z" stroke="#61dafb" strokeWidth="1.5" fill="none"/>
                <path d="m16 11c-8.1 0-14.6 2.2-14.6 5s6.5 5 14.6 5 14.6-2.2 14.6-5-6.5-5-14.6-5z" stroke="#61dafb" strokeWidth="1.5" fill="none" transform="rotate(60 16 16)"/>
                <path d="m16 11c-8.1 0-14.6 2.2-14.6 5s6.5 5 14.6 5 14.6-2.2 14.6-5-6.5-5-14.6-5z" stroke="#61dafb" strokeWidth="1.5" fill="none" transform="rotate(120 16 16)"/>
              </svg>
            </div>

            {/* Node.js */}
            <div className="group flex flex-col items-center justify-center w-20 h-20 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <svg className="w-12 h-12 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 32 32">
                <path d="M16 2.5L5 8.5v15l11 6 11-6v-15z" fill="#8cc84b"/>
                <path d="M16 2.5v27l11-6v-15z" fill="#689f38"/>
              </svg>
            </div>

            {/* Tailwind CSS */}
            <div className="group flex flex-col items-center justify-center w-20 h-20 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <svg className="w-12 h-12 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 32 32">
                <path d="M9 13.5C9 10.46 10.46 9 13.5 9c4.56 0 5.28 3.42 7.72 3.96C22.44 13.25 23.54 12.75 25 11.5c0 3.04-1.46 4.5-4.5 4.5-4.56 0-5.28-3.42-7.72-3.96C11.56 11.75 10.46 12.25 9 13.5zm-7 7c0-3.04 1.46-4.5 4.5-4.5 4.56 0 5.28 3.42 7.72 3.96C15.44 20.25 16.54 19.75 18 18.5c0 3.04-1.46 4.5-4.5 4.5-4.56 0-5.28-3.42-7.72-3.96C4.56 18.75 3.46 19.25 2 20.5z" fill="#06b6d4"/>
              </svg>
            </div>

            {/* Sass */}
            <div className="group flex flex-col items-center justify-center w-20 h-20 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <svg className="w-12 h-12 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 32 32">
                <path d="M27.1 17.6c-2.6 0-4.8 0.6-6.6 1.6-0.6-1.3-1.3-2.4-1.4-3.3-0.1-1 0-1.8 0-1.8s0.1-0.4-0.1-0.4-0.3 0.2-0.3 0.5c-0.1 0.4-0.4 1.2-0.6 1.9-0.3 1-2.8 4.5-4.2 6.3-0.5-0.9-0.8-1.7-0.9-2.3-0.1-1 0-1.8 0-1.8s0.1-0.4-0.1-0.4-0.3 0.2-0.3 0.5c-0.1 0.4-0.2 1.2-0.6 1.9-0.4 0.7-3.5 7.9-4.3 9.7-0.4 0.9-0.7 1.6-1 2.1 0 0 0 0 0 0.1-0.2 0.4-0.3 0.6-0.3 0.6v0.1c-0.2 0.3-0.4 0.6-0.5 0.6-0.1 0-0.3-1.3 0.4-3.1 1.4-3.6 4.8-9.1 4.8-9.3 0-0.1 0.5-1.6-0.5-2.4-1-0.8-2.7 0.6-2.8 0.6s-0.3 0.4-0.3 0.4 2.1-8.8-4-8.8c-3.7 0-8.8 4-8.8 7.6 0 3.3 3 5.5 4.1 7.3 1.5 2.4 3.3 4.3 3.3 5.8 0 1.8-1.5 4.4 0.8 4.4 2.9 0 4.2-6.7 4.2-6.7s-1.5 8.2 1.7 8.2c1.2 0 2.4-1.6 2.9-2.4v0c0.3-0.4 0.4-0.7 0.4-0.7v-0.1c0.5-0.8 1.6-2.8 3.2-6 2.1-4.1 4.1-7.4 4.1-7.4s0.2 1.2 0.8 3.1c0.4 1.1 1.1 2.4 1.7 3.6-0.5 0.7-0.8 1.1-0.8 1.1v0.1c-0.3 0.4-0.6 0.8-1 1.2-1.4 1.6-3.1 3.4-3.3 3.9-0.3 0.6-0.2 1 0.3 1.4 0.4 0.3 1.1 0.3 1.8 0.3 1.3-0.1 2.2-0.4 2.6-0.6 0.6-0.2 1.4-0.6 2.1-1.1 1.3-1 2.1-2.4 2-4.2-0.1-1-0.4-1.5-0.8-2.1 0.1-0.2 0.3-0.4 0.4-0.6 2.4-3.5 4.3-7.3 4.3-7.3s0.2 1.2 0.8 3.1c0.3 1 0.9 2.1 1.4 3.1-2.3 1.9-3.7 4.1-4.2 5.5-0.8 2.6-0.2 3.8 1.1 4.1 0.6 0.1 1.4-0.2 2-0.5 0.7-0.2 1.5-0.6 2.3-1.2 1.3-1 2.6-2.4 2.5-4.3-0.1-0.9-0.3-1.3-0.6-1.8 1.8-0.7 4.1-1.1 7.1-0.8 6.4 0.7 7.7 4.4 7.4 6-0.2 1.6-1.4 2.5-1.8 2.8-0.4 0.3-0.5 0.4-0.5 0.6 0.1 0.3 0.2 0.3 0.6 0.2 0.5-0.1 3.1-1.3 3.2-4.1 0.2-3.6-3.3-7.6-9.4-7.5z" fill="#cf649a"/>
              </svg>
            </div>

            {/* Express */}
            <div className="group flex flex-col items-center justify-center w-20 h-20 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <svg className="w-12 h-12 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 32 32">
                <path d="M16 2L30 16 16 30 2 16z" fill="#000"/>
                <path d="M8 12h16M8 16h16M8 20h16" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>

            {/* VS Code */}
            <div className="group flex flex-col items-center justify-center w-20 h-20 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <svg className="w-12 h-12 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 32 32">
                <path d="M24.7 2.3c.9-.2 1.8.1 2.5.7.7.6 1.1 1.5 1.1 2.4v21.2c0 .9-.4 1.8-1.1 2.4-.7.6-1.6.9-2.5.7L7.1 26.5c-.5-.1-.9-.4-1.2-.8L2.6 21c-.5-.8-.5-1.8 0-2.6L5.9 13.8c.3-.4.7-.7 1.2-.8L24.7 2.3z" fill="#007acc"/>
                <path d="M24.7 2.3L7.1 13 2.6 21l3.3 4.7 18.6-3.2V5.5L24.7 2.3z" fill="#0066b2"/>
              </svg>
            </div>

            {/* Git */}
            <div className="group flex flex-col items-center justify-center w-20 h-20 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <svg className="w-12 h-12 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 32 32">
                <path d="M30.428 14.663l-13.095-13.094c-0.35-0.349-0.92-0.349-1.269 0l-2.719 2.718 3.449 3.449c0.371-0.125 0.799-0.041 1.094 0.254 0.297 0.297 0.382 0.725 0.254 1.097l3.324 3.324c0.372-0.128 0.8-0.043 1.097 0.254 0.414 0.414 0.414 1.086 0 1.5s-1.086 0.414-1.5 0c-0.312-0.312-0.389-0.77-0.231-1.148l-3.1-3.1v8.15c0.101 0.05 0.194 0.118 0.274 0.198 0.414 0.414 0.414 1.086 0 1.5s-1.086 0.414-1.5 0-0.414-1.086 0-1.5c0.103-0.103 0.224-0.18 0.354-0.235v-8.234c-0.13-0.055-0.251-0.132-0.354-0.235-0.315-0.315-0.39-0.778-0.227-1.156l-3.404-3.404-8.988 8.987c-0.349 0.35-0.349 0.92 0 1.269l13.094 13.095c0.35 0.349 0.92 0.349 1.269 0l13.025-13.024c0.349-0.349 0.349-0.92 0-1.269z" fill="#f03c2e"/>
              </svg>
            </div>

            {/* GitHub */}
            <div className="group flex flex-col items-center justify-center w-20 h-20 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <svg className="w-12 h-12 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 32 32">
                <path d="M16 2C8.3 2 2 8.3 2 16c0 6.2 4 11.4 9.6 13.3.7.1 1-.3 1-.7v-2.4c-3.9.8-4.7-1.9-4.7-1.9-.6-1.6-1.5-2-1.5-2-1.2-.8.1-.8.1-.8 1.4.1 2.1 1.4 2.1 1.4 1.2 2 3.1 1.4 3.9 1.1.1-.9.5-1.4.9-1.8-2.9-.3-6-1.5-6-6.5 0-1.4.5-2.6 1.3-3.5-.1-.3-.6-1.6.1-3.3 0 0 1.1-.4 3.6 1.3 1-.3 2.1-.4 3.2-.4s2.2.1 3.2.4c2.5-1.7 3.6-1.3 3.6-1.3.7 1.7.2 3 .1 3.3.8.9 1.3 2.1 1.3 3.5 0 5-3.1 6.2-6 6.5.5.4.9 1.2.9 2.4v3.6c0 .4.3.8 1 .7C26 27.4 30 22.2 30 16c0-7.7-6.3-14-14-14z" fill="#181717"/>
              </svg>
            </div>

            {/* PostgreSQL */}
            <div className="group flex flex-col items-center justify-center w-20 h-20 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <svg className="w-12 h-12 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 32 32">
                <path d="M25.8 15.2c0 3.3-2.2 5.8-5.8 5.8s-5.8-2.5-5.8-5.8V8.8c0-3.3 2.2-5.8 5.8-5.8s5.8 2.5 5.8 5.8v6.4z" fill="#336791"/>
                <path d="M20 5c1.7 0 3 1.5 3 3.5v6c0 2-1.3 3.5-3 3.5s-3-1.5-3-3.5v-6c0-2 1.3-3.5 3-3.5z" fill="#fff"/>
                <path d="M16 20v6c0 1.1-.9 2-2 2s-2-.9-2-2v-6h4z" fill="#336791"/>
              </svg>
            </div>

            {/* Figma */}
            <div className="group flex flex-col items-center justify-center w-20 h-20 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <svg className="w-12 h-12 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 32 32">
                <path d="M8 16c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" fill="#19bcfe"/>
                <path d="M8 8c0-2.2 1.8-4 4-4h4v8h-4c-2.2 0-4-1.8-4-4z" fill="#09cf83"/>
                <path d="M16 4h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4V4z" fill="#a259ff"/>
                <path d="M8 24c0-2.2 1.8-4 4-4h4v4c0 2.2-1.8 4-4 4s-4-1.8-4-4z" fill="#f24e1e"/>
                <path d="M20 16c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" fill="#ff7262"/>
              </svg>
            </div>

            {/* Next.js */}
            <div className="group flex flex-col items-center justify-center w-20 h-20 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <svg className="w-12 h-12 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 32 32">
                <circle cx="16" cy="16" r="14" fill="#000"/>
                <path d="M20.4 8.8L12.8 20.4h2.4l1.6-2.4h3.2l.8 2.4h2.4L16.8 8.8h-1.6l-2.4 3.6h1.6l1.2-1.8z" fill="#fff"/>
                <path d="M24 16c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z" stroke="#fff" strokeWidth="2" fill="none"/>
              </svg>
            </div>

            {/* MySQL */}
            <div className="group flex flex-col items-center justify-center w-20 h-20 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <svg className="w-12 h-12 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 32 32">
                <path d="M16 2C8.3 2 2 6.9 2 13v6c0 6.1 6.3 11 14 11s14-4.9 14-11v-6c0-6.1-6.3-11-14-11z" fill="#00618a"/>
                <path d="M16 6c5.5 0 10 2.2 10 5s-4.5 5-10 5-10-2.2-10-5 4.5-5 10-5z" fill="#e48e00"/>
                <path d="M16 16c5.5 0 10-2.2 10-5v4c0 2.8-4.5 5-10 5s-10-2.2-10-5v-4c0 2.8 4.5 5 10 5z" fill="#e48e00"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  About
                </span>
              </h2>
              
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  I'm <span className="font-semibold text-blue-600">Pedaviti Rama Krishna Reddy</span> — a Full Stack Developer and aspiring Salesforce Admin with real-world experience delivering scalable web and software solutions. I recently graduated with a B.Tech in Electronics & Communication Engineering from Swarna Bharathi Institute of Engineering & Technology, Khammam.
                </p>
                
                <p>
                  Over the past year, I've led and built projects across multiple domains — from a pharmacy e-commerce site to a hospital management platform with AI diagnostics — using React.js, Node.js, Express, PostgreSQL, and more. As a Project Manager and Core Developer at Omyra Technologies, I've coordinated full teams, worked directly with clients, and delivered production-ready systems under tight deadlines.
                </p>
                
                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
                  <p className="font-semibold text-blue-800 mb-2">What sets me apart:</p>
                  <p className="text-blue-700">
                    I don't just write code — I own problems end-to-end. From architecture and system design to UI polish and client delivery, I care about making the product reliable, scalable, and simple for users.
                  </p>
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600">6+</div>
                  <div className="text-gray-600 text-sm">Months Experience</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600">3+</div>
                  <div className="text-gray-600 text-sm">Projects Completed</div>
                </div>
              </div>
            </div>
            
            {/* Image/Illustration */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white text-4xl font-bold">RK</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Pedaviti Rama Krishna Reddy</h3>
                  <p className="text-blue-600 font-semibold">Full Stack Developer</p>
                  <p className="text-gray-600">Aspiring Salesforce Admin</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-200 rounded-full opacity-70 animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-cyan-200 rounded-full opacity-70 animate-bounce animation-delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
              Educational Journey
            </span>
          </h2>
          
          <div className="space-y-8">
            <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-blue-300/30 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center mr-6 group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-white text-2xl font-bold">🎓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">B.Tech in Electronics & Communication Engineering</h3>
                  <p className="text-cyan-200">Swarna Bharathi Institute of Engineering & Technology, Khammam</p>
                </div>
              </div>
              <div className="ml-22">
                <p className="text-gray-300">Expected May 2025</p>
                <div className="flex items-center mt-2">
                  <span className="text-cyan-300 font-semibold">CGPA: 7.2</span>
                  <div className="ml-4 bg-blue-500/20 px-3 py-1 rounded-full">
                    <span className="text-blue-200 text-sm">In Progress</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-cyan-300/30 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mr-6 group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-white text-2xl font-bold">📚</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Intermediate (MPC)</h3>
                  <p className="text-blue-200">Sri Chaitanya Jr. College, Khammam</p>
                </div>
              </div>
              <div className="ml-22">
                <p className="text-gray-300">March 2021</p>
                <div className="flex items-center mt-2">
                  <span className="text-blue-300 font-semibold">Percentage: 94.8%</span>
                  <div className="ml-4 bg-green-500/20 px-3 py-1 rounded-full">
                    <span className="text-green-300 text-sm">Excellent</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-green-300/30 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center mr-6 group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-white text-2xl font-bold">🏫</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Secondary School Certificate (SSC)</h3>
                  <p className="text-green-200">Abhinav High School, Khammam</p>
                </div>
              </div>
              <div className="ml-22">
                <p className="text-gray-300">March 2019</p>
                <div className="flex items-center mt-2">
                  <span className="text-green-300 font-semibold">CGPA: 9.3</span>
                  <div className="ml-4 bg-green-500/20 px-3 py-1 rounded-full">
                    <span className="text-green-300 text-sm">Outstanding</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Get In Touch!
                </span>
              </h2>
              <p className="text-gray-600 mb-8">Fill out the form and I will reach out, as soon as possible!</p>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project ideas..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Info & Illustration */}
            <div className="space-y-8">
              {/* Illustration */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-4xl">📧</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Ready to Connect?</h3>
                <p className="text-gray-600">Let's discuss your next project and bring your ideas to life!</p>
              </div>
              
              {/* Contact Options */}
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white text-xl">📧</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Send Email</h4>
                      <a href="mailto:rk4053727@gmail.com" className="text-blue-600 hover:text-blue-800 transition-colors">rk4053727@gmail.com</a>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white text-xl">📞</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Call Now</h4>
                      <a href="tel:+919618341328" className="text-blue-600 hover:text-blue-800 transition-colors">+91 9618341328</a>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white text-xl">💼</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">LinkedIn</h4>
                      <a href="https://linkedin.com/in/rama-krishna-reddy-717b82248" target="_blank" className="text-blue-600 hover:text-blue-800 transition-colors">Connect with me</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-red-400 via-white to-red-400 bg-clip-text text-transparent">
                Pedaviti Rama Krishna Reddy
              </span>
            </h3>
            <p className="text-gray-400">Aspiring Salesforce Admin • Frontend Developer</p>
          </div>
          
          <div className="flex justify-center space-x-8 mb-8">
            <a href="https://linkedin.com/in/rama-krishna-reddy-717b82248" target="_blank" className="group flex items-center text-gray-400 hover:text-red-400 transition-all duration-300">
              <span className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                <span className="text-white text-sm">💼</span>
              </span>
              LinkedIn
            </a>
            <a href="mailto:rk4053727@gmail.com" className="group flex items-center text-gray-400 hover:text-red-400 transition-all duration-300">
              <span className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                <span className="text-white text-sm">📧</span>
              </span>
              Email
            </a>
            <a href="https://github.com/rama-krishna-reddy" target="_blank" className="group flex items-center text-gray-400 hover:text-red-400 transition-all duration-300">
              <span className="w-10 h-10 bg-gradient-to-r from-gray-700 to-black rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                <span className="text-white text-sm">💻</span>
              </span>
              GitHub
            </a>
          </div>
          
          <div className="text-center border-t border-gray-800 pt-8">
            <p className="text-gray-500">&copy; {new Date().getFullYear()} Pedaviti Rama Krishna Reddy. All rights reserved.</p>
            <p className="text-gray-600 mt-2">Built with Next.js, TypeScript & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
