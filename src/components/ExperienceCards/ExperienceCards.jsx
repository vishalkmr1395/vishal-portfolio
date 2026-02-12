import { useState } from 'react';
import { X, Calendar, ChevronRight, Users, TrendingUp, Award, Code, User } from 'lucide-react';

const ExperienceCards = () => {
  const [openPopup, setOpenPopup] = useState(null);

  const experiences = [
    {
      id: 1,
      company: "Zluri",
      role: "Technical Product Manager",
      period: "Sep 2023 - Jul 2024",
      summary: "Led cross-functional teams to deliver high-stakes projects, enhancing user experience through strategic planning and execution.",
      colorTop: "bg-gradient-to-r from-purple-400 to-purple-600",
      colorBg: "bg-purple-500",
      borderColor: "border-purple-400",
      color: "from-purple-400 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
      icon: <Users className="w-6 h-6" />,
      achievements: [
        "Spearheaded 2 teams of 16 engineers to deliver a high-stakes project on time and within budget, ensuring flawless execution through tight collaboration with the co-founder and head of engineering.",
        "Initiated and directed the planning and execution of key deliverables with product leads, design leads, and the CTO, resulting in a 40% enhancement in user experience through strong leadership and coordination."
      ]
    },
    {
      id: 2,
      company: "Amazon",
      role: "Software Development Engineer 2",
      period: "Jul 2020 - Feb 2023",
      summary: "Managed high-scale systems handling 100M+ transactions during peak events while leading development initiatives for Kindle products.",
      colorTop: "bg-gradient-to-r from-orange-400 to-orange-600",
      colorBg: "bg-orange-500",
      borderColor: "border-orange-400",
      color: "from-orange-400 to-orange-600",
      bgColor: "from-orange-50 to-orange-100",
      icon: <TrendingUp className="w-6 h-6" />,
      achievements: [
        "Orchestrated cross-functional teams to ensure zero downtime during Amazon's biggest events, flawlessly managing over 100M transactions and safeguarding peak service resiliency.",
        "Engineered a robust feature to efficiently manage payment failures, cutting down operational load by 60% through effective communication and collaboration with cross-functional teams.",
        "Championed Scrum Master responsibilities for a 15-member team, increasing sprint completion percentage from 26% to 78%.",
        "Spearheaded Kindle's Search component, improving application stability by 3x and resolving approximately 400,000 app crashes through implementation of best practices.",
        "Launched the Bluetooth functionality on Kindle Fire Tablets, introducing groundbreaking feature and increasing user engagement by 30%.",
        "Orchestrated process improvements to ensure releases maintained app stability, preventing rollbacks and reducing development and QA efforts by 6-8 weeks."
      ]
    },
    {
      id: 3,
      company: "Freshworks",
      role: "Senior Software Engineer",
      period: "Mar 2018 - Jun 2020",
      summary: "Built scalable notification systems and mentored junior engineers while being recognized as Champion and Most Valuable Performer.",
      colorTop: "bg-gradient-to-r from-green-400 to-green-600",
      colorBg: "bg-green-500",
      borderColor: "border-green-400",
      color: "from-green-400 to-green-600",
      bgColor: "from-green-50 to-green-100",
      icon: <Award className="w-6 h-6" />,
      achievements: [
        "Honored as Champion and Most Valuable Performer for exceptional contributions over two years, respectively.",
        "Designed and developed a unified notification system integrating all channels across the organization's products, improving communication efficiency by 35% and reducing notification delivery time by 50%.",
        "Launched a database sharding initiative for the notification system, securing scalable performance and reliability for the next 15 years.",
        "Architected a direct Kafka publishing feature for the Audit Log System, slashing infrastructure costs by around $5,000.",
        "Mentored and promoted 3 junior engineers, enhancing skills and advancing careers through dedicated guidance and support."
      ]
    },
    {
      id: 4,
      company: "Tata Consultancy Services",
      role: "Associate Software Engineer",
      period: "Aug 2016 - Feb 2018",
      summary: "Optimized warehouse management systems for major retail clients, driving significant performance improvements.",
      colorTop: "bg-gradient-to-r from-blue-400 to-blue-600",
      colorBg: "bg-blue-500",
      borderColor: "border-blue-400",
      color: "from-blue-400 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      icon: <Code className="w-6 h-6" />,
      achievements: [
        "Oversaw and optimized the Warehouse Management System database for Marks & Spencer, driving peak performance and reliability by 35%."
      ]
    }
  ];

  const getIllustration = (index) => {
    const illustrations = [
      // Zluri - Leadership/Team
      <div className="relative">
        <div className="w-32 h-24 bg-gradient-to-br from-purple-400 to-purple-500 rounded-2xl relative overflow-hidden">
          <div className="absolute top-3 left-3 w-6 h-6 bg-yellow-300 rounded-full flex items-center justify-center">
            <Users className="w-3 h-3 text-yellow-700" />
          </div>
          <div className="absolute bottom-3 right-3 space-y-1">
            <div className="h-1.5 bg-purple-200 rounded w-8"></div>
            <div className="h-1.5 bg-purple-300 rounded w-6"></div>
          </div>
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-pink-400 rounded-full"></div>
        <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-yellow-400 rounded-lg transform rotate-12"></div>
      </div>,
      
      // Amazon - Scale/Performance
      <div className="relative">
        <div className="w-32 h-24 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl relative overflow-hidden">
          <div className="absolute top-3 left-3 w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <TrendingUp className="w-3 h-3 text-orange-600" />
          </div>
          <div className="absolute bottom-3 left-3 right-3 space-y-1">
            <div className="h-1.5 bg-orange-200 rounded w-full"></div>
            <div className="h-1.5 bg-orange-300 rounded w-2/3"></div>
          </div>
          <div className="absolute top-2 right-2 w-4 h-4 border-2 border-white rounded-full opacity-70"></div>
        </div>
        <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-400 rounded-full"></div>
        <div className="absolute -bottom-2 -left-2 w-8 h-4 bg-yellow-300 rounded-lg"></div>
      </div>,
      
      // Freshworks - Innovation
      <div className="relative">
        <div className="w-32 h-24 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl relative overflow-hidden">
          <div className="absolute top-3 left-3 w-6 h-6 bg-yellow-300 rounded-full flex items-center justify-center">
            <Award className="w-3 h-3 text-yellow-700" />
          </div>
          <div className="absolute bottom-3 right-3 grid grid-cols-3 gap-1">
            <div className="w-2 h-2 bg-green-200 rounded"></div>
            <div className="w-2 h-2 bg-green-300 rounded"></div>
            <div className="w-2 h-2 bg-green-200 rounded"></div>
          </div>
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-400 rounded-lg transform rotate-45"></div>
        <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-purple-400 rounded-full"></div>
      </div>,
      
      // TCS - Foundation
      <div className="relative">
        <div className="w-32 h-24 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl relative overflow-hidden">
          <div className="absolute top-3 left-3 w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <Code className="w-3 h-3 text-blue-600" />
          </div>
          <div className="absolute bottom-3 left-3 right-3 space-y-1">
            <div className="h-1.5 bg-blue-200 rounded w-3/4"></div>
            <div className="h-1.5 bg-blue-300 rounded w-1/2"></div>
          </div>
        </div>
        <div className="absolute -top-1 -right-1 w-6 h-6 bg-teal-400 rounded-full"></div>
        <div className="absolute -bottom-2 -left-2 w-8 h-4 bg-indigo-300 rounded-lg transform rotate-12"></div>
      </div>
    ];
    
    return illustrations[index];
  };

  const handleReadMore = (id) => {
    setOpenPopup(id);
  };

  const closePopup = () => {
    setOpenPopup(null);
  };

  return (
    <div id="exp" className="min-h-screen bg-gray-50 p-4 sm:p-6">
      {/* Mobile Header */}
      <div className="block md:hidden max-w-md mx-auto mb-8">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
          impact solutions
        </h1>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:block max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A journey through leading tech companies, driving innovation and delivering high-impact solutions
        </p>
      </div>

      {/* Cards Container */}
      <div className="max-w-md mx-auto md:max-w-7xl md:grid md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="relative">
            {/* Mobile Layout */}
            <div className="block md:hidden">
              {/* Top colored bar */}
              <div className={`h-2 rounded-t-3xl ${exp.colorTop}`}></div>
              
              {/* Main card */}
              <div className="bg-white rounded-b-3xl shadow-2xl overflow-hidden">
                <div className="p-6">
                  {/* Header with avatar and illustration */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      {/* Avatar */}
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-6 h-6 text-gray-600" />
                      </div>
                      
                      {/* Company and Role */}
                      <div>
                        <h2 className="text-xl font-bold text-gray-900">{exp.company}</h2>
                        <p className="text-purple-500 font-medium text-sm">{exp.role}</p>
                      </div>
                    </div>
                    
                    {/* Floating illustration */}
                    <div className="relative flex-shrink-0">
                      <div className={`w-20 h-16 ${exp.colorBg} rounded-2xl relative overflow-hidden`}>
                        <div className="absolute top-2 left-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                          <div className="text-xs">😊</div>
                        </div>
                        <div className="absolute bottom-2 right-2 space-y-1">
                          <div className="h-1 bg-white bg-opacity-40 rounded w-6"></div>
                          <div className="h-1 bg-white bg-opacity-60 rounded w-4"></div>
                        </div>
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-pink-400 rounded-full"></div>
                      <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-yellow-400 rounded-full"></div>
                    </div>
                  </div>

                  
                  <div className="mb-6">
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period.split(' - ')[0]}</span>
                    </div>
                    <div className="text-gray-500 text-sm ml-6">
                      - {exp.period.split(' - ')[1]}
                    </div>
                  </div>

                 
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                    {exp.summary}
                  </p>

                  <button
                    onClick={() => handleReadMore(exp.id)}
                    className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                  >
                    Read More
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="hidden md:block bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            
              <div className={`h-2 bg-gradient-to-r ${exp.color}`}></div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${exp.bgColor}`}>
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{exp.company}</h3>
                        <p className={`text-sm font-medium bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                          {exp.role}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                      <span>{exp.duration}</span>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {exp.summary}
                    </p>
                    
                    <button
                      onClick={() => handleReadMore(exp.id)}
                      className={`bg-gradient-to-r ${exp.color} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 flex items-center gap-2 group`}
                    >
                      Read More
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                  
                  {/* Illustration */}
                  <div className="ml-6 flex-shrink-0">
                    {getIllustration(index)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {openPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          {(() => {
            const currentExp = experiences.find(exp => exp.id === openPopup);
            if (!currentExp) return null;
            
            return (
              <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl">
                {/* Popup Header */}
                <div className={`${currentExp.colorTop} p-6 text-white`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold">{currentExp.company}</h3>
                      <p className="opacity-90 mt-1">{currentExp.role} • {currentExp.period}</p>
                    </div>
                    <button
                      onClick={closePopup}
                      className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                {/* Popup Content */}
                <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                  {currentExp.achievements && currentExp.achievements.length > 0 ? (
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Achievements</h4>
                        <div className="space-y-4">
                          {currentExp.achievements.map((achievement, achIndex) => (
                            <div key={achIndex} className={`p-4 rounded-xl bg-gray-50 border-l-4 ${currentExp.borderColor}`}>
                              <div className="flex items-start gap-3">
                                <div className={`w-2 h-2 ${currentExp.colorBg} rounded-full mt-2 flex-shrink-0`}></div>
                                <p className="text-gray-700 leading-relaxed">{achievement}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                        <User className="w-8 h-8 text-gray-400" />
                      </div>
                      <p className="text-gray-500 text-lg">No detailed information available for this experience.</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
};

export default ExperienceCards;
