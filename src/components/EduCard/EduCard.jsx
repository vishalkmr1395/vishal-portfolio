import { useState } from 'react';
import { GraduationCap, Award, Code, Database, Cloud, Users, ChevronRight, X, BookOpen, Zap, Brain, Target } from 'lucide-react';

const EduCard = () => {
  const [activeCard, setActiveCard] = useState(null);

  const educationData = [
    {
      id: 1,
      institution: "Boston University",
      degree: "Master of Business Administration",
      specialization: "Specialising in Strategy & Healthcare",
      type: "Graduate",
      gradient: "from-blue-600 via-purple-600 to-indigo-700",
      bgGradient: "from-blue-50 to-purple-50",
      icon: <Award className="w-8 h-8" />,
      pattern: "mba",
      details: [
        "Strategic Business Planning & Analysis",
        "Healthcare Industry Management",
        "Leadership & Organizational Behavior",
        "Financial Management & Analytics",
        "Market Research & Consumer Insights"
      ]
    },
    {
      id: 2,
      institution: "Anna University",
      degree: "Bachelor of Technology",
      specialization: "Information Technology",
      type: "Undergraduate",
      gradient: "from-emerald-500 via-teal-500 to-cyan-600",
      bgGradient: "from-emerald-50 to-teal-50",
      icon: <GraduationCap className="w-8 h-8" />,
      pattern: "btech",
      details: [
        "Software Engineering & Development",
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Computer Networks & Security",
        "Object-Oriented Programming"
      ]
    }
  ];

  const skillCategories = [
    {
      id: 3,
      title: "Cloud & DevOps Toolchain",
      skills: ["AWS", "Apache Kafka", "CI/CD", "AWS CloudFormation", "Docker", "Kubernetes", "Terraform", "Jenkins"],
      icon: <Cloud className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      pattern: "cloud"
    },
    {
      id: 4,
      title: "Programming Languages",
      skills: ["Go", "Java", "Javascript", "Python", "TypeScript", "C++", "Rust"],
      icon: <Code className="w-6 h-6" />,
      gradient: "from-violet-500 to-purple-600",
      bgGradient: "from-violet-50 to-purple-50",
      pattern: "code"
    },
    {
      id: 5,
      title: "Database Technologies",
      skills: ["MySQL", "MongoDB", "PostgreSQL", "Redis", "Elasticsearch", "DynamoDB"],
      icon: <Database className="w-6 h-6" />,
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50",
      pattern: "database"
    },
    {
      id: 6,
      title: "Management & Leadership",
      skills: ["Program Management", "Technical Product Management", "Agile Project Management", "Team Leadership", "Strategic Planning"],
      icon: <Users className="w-6 h-6" />,
      gradient: "from-pink-500 to-rose-600",
      bgGradient: "from-pink-50 to-rose-50",
      pattern: "management"
    }
  ];

  const getPatternElements = (pattern, gradient) => {
    const patterns = {
      mba: (
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br ${gradient} opacity-20 rounded-full`}></div>
          <div className={`absolute top-8 right-8 w-3 h-3 bg-gradient-to-br ${gradient} rounded-full opacity-40`}></div>
          <div className={`absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-br ${gradient} opacity-30 rotate-45`}></div>
          <div className="absolute top-4 left-1/2 w-16 h-0.5 bg-white opacity-30 transform -translate-x-1/2"></div>
        </div>
      ),
      btech: (
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute -top-2 -left-2 w-20 h-20 bg-gradient-to-br ${gradient} opacity-20 rounded-lg rotate-12`}></div>
          <div className={`absolute bottom-6 right-6 w-4 h-4 bg-gradient-to-br ${gradient} opacity-40 rounded-full`}></div>
          <div className="absolute top-1/2 right-4 w-8 h-0.5 bg-white opacity-30"></div>
          <div className="absolute top-1/2 right-4 w-0.5 h-8 bg-white opacity-30"></div>
        </div>
      ),
      cloud: (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-3 right-3 w-8 h-5 bg-white opacity-30 rounded-full"></div>
          <div className="absolute top-4 right-5 w-4 h-3 bg-white opacity-20 rounded-full"></div>
          <div className="absolute bottom-4 left-4 w-6 h-6 border-2 border-white opacity-30 rounded-full"></div>
        </div>
      ),
      code: (
        <div className="absolute inset-0 overflow-hidden font-mono text-white opacity-30">
          <div className="absolute top-3 left-3 text-xs">&lt;/&gt;</div>
          <div className="absolute bottom-3 right-3 text-xs">{ }</div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs">fn()</div>
        </div>
      ),
      database: (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-3 right-3 w-8 h-2 bg-white opacity-30 rounded-full"></div>
          <div className="absolute top-6 right-3 w-8 h-2 bg-white opacity-20 rounded-full"></div>
          <div className="absolute bottom-4 left-4 w-6 h-6 bg-white opacity-20 rounded-sm rotate-45"></div>
        </div>
      ),
      management: (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-4 right-4 w-4 h-4 border-2 border-white opacity-40 rounded-full"></div>
          <div className="absolute top-8 right-8 w-2 h-2 border border-white opacity-30 rounded-full"></div>
          <div className="absolute bottom-5 left-5 w-3 h-3 border border-white opacity-30 rounded-full"></div>
          <div className="absolute top-6 right-6 w-0.5 h-4 bg-white opacity-20"></div>
        </div>
      )
    };
    return patterns[pattern] || null;
  };

  const handleCardClick = (id) => {
    setActiveCard(activeCard === id ? null : id);
  };

  return (
    <div id='edu' className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 sm:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <Brain className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-medium">Knowledge & Expertise</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Education & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Technical Skills</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Combining academic excellence with cutting-edge technical expertise to drive innovation
          </p>
        </div>

        {/* Education Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">Education</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {educationData.map((edu) => (
              <div key={edu.id} className="group relative">
                <div 
                  className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${edu.gradient} p-8 cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
                  onClick={() => handleCardClick(edu.id)}
                >
                  {getPatternElements(edu.pattern, edu.gradient)}
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                        {edu.icon}
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                          {edu.type}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">{edu.institution}</h3>
                    <p className="text-white/90 font-semibold mb-2">{edu.degree}</p>
                    <p className="text-white/70 mb-6">{edu.specialization}</p>

                    <div className="flex items-center justify-between">
                      <div className="text-white/60 text-sm">Click to explore</div>
                      <ChevronRight className={`w-5 h-5 text-white transition-transform duration-300 ${activeCard === edu.id ? 'rotate-90' : ''}`} />
                    </div>
                  </div>
                </div>

                {/* Expandable Details */}
                <div className={`mt-4 overflow-hidden transition-all duration-500 ${activeCard === edu.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className={`bg-gradient-to-r ${edu.bgGradient} rounded-xl p-6 border border-white/10`}>
                    <h4 className="font-semibold text-gray-800 mb-4">Key Areas of Study</h4>
                    <div className="space-y-2">
                      {edu.details.map((detail, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className={`w-2 h-2 bg-gradient-to-r ${edu.gradient} rounded-full`}></div>
                          <span className="text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">Technical Skills</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category) => (
              <div key={category.id} className="group">
                <div 
                  className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${category.gradient} p-4 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl h-48 flex flex-col`}
                  onClick={() => handleCardClick(category.id)}
                >
                  {getPatternElements(category.pattern, category.gradient)}
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4 flex-shrink-0">
                      <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                        {category.icon}
                      </div>
                      <ChevronRight className={`w-4 h-4 text-white transition-transform duration-300 ${activeCard === category.id ? 'rotate-90' : ''}`} />
                    </div>

                    <h3 className="text-lg font-bold text-white mb-4 leading-tight flex-shrink-0">{category.title}</h3>
                    
                    <div className="space-y-2 flex-grow flex flex-col justify-end">
                      {category.skills.slice(0, 2).map((skill, index) => (
                        <div key={index} className="text-white/80 text-sm">• {skill}</div>
                      ))}
                      {category.skills.length > 2 && (
                        <div className="text-white/60 text-xs mt-2">+{category.skills.length - 2} more</div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Expandable Skills List */}
                <div className={`mt-3 overflow-hidden transition-all duration-300 ${activeCard === category.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className={`bg-gradient-to-r ${category.bgGradient} rounded-xl p-4 border border-white/10 backdrop-blur-sm`}>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, index) => (
                        <span key={index} className={`px-3 py-1 bg-gradient-to-r ${category.gradient} text-white text-sm rounded-full font-medium shadow-lg transition-transform duration-200 hover:scale-105`}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-cyan-400 mb-2">2</div>
            <div className="text-gray-300 text-sm">Degrees</div>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-emerald-400 mb-2">12+</div>
            <div className="text-gray-300 text-sm">Technologies</div>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-purple-400 mb-2">4</div>
            <div className="text-gray-300 text-sm">Skill Categories</div>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-orange-400 mb-2">∞</div>
            <div className="text-gray-300 text-sm">Learning</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EduCard;