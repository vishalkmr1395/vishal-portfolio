import { ArrowRight, Calendar, Clock, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import { useRef, useState } from "react";

const AllBlogsPage = ({ posts }) => {
  const navigate = useNavigate();
  const [expandedType, setExpandedType] = useState(null); // which type is expanded
  const [activeSubType, setActiveSubType] = useState({}); // which subtype is selected per type

  // Group posts by type & subtype
  const groupedByType = posts.reduce((acc, post) => {
    if (!post.type) return acc;
    if (!acc[post.type]) acc[post.type] = {};
    const sub = post.subType || "General";
    if (!acc[post.type][sub]) acc[post.type][sub] = [];
    acc[post.type][sub].push(post);
    return acc;
  }, {});

  // Refs for each slider
  const sliderRefs = useRef({});

  const scroll = (type, subType, direction) => {
    const key = `${type}-${subType}`;
    const slider = sliderRefs.current[key];
    if (slider) {
      slider.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Navbar />

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-extrabold mb-6">
          Explore My <span className="text-yellow-400">Blogs</span>
        </h1>
        <p className="text-lg text-gray-200">
          Sharing insights, tutorials, and experiences on{" "}
          <span className="text-yellow-400">Product</span>,{" "}
          <span className="text-yellow-400">Tech</span>, and{" "}
          <span className="text-yellow-400">Program Management</span>.
        </p>
      </div>

      {/* Dynamic Sliders */}
      <div className="max-w-7xl mx-auto px-4 pb-16 space-y-12">
        {Object.entries(groupedByType).map(([type, subGroups]) => (
          <div key={type} className="relative">
            <button
              onClick={() =>
                setExpandedType(expandedType === type ? null : type)
              }
              className="flex items-center gap-2 text-3xl font-bold mb-4 text-yellow-400 transition-colors hover:text-yellow-300"
            >
              {type}
              <ChevronDown
                className={`transition-transform duration-300 ${
                  expandedType === type ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* SubTypes */}
            <div
              className={`overflow-hidden transition-all duration-500 ${
                expandedType === type ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="flex gap-4 mb-6 flex-wrap">
                {Object.keys(subGroups).map((sub) => (
                  <button
                    key={sub}
                    onClick={() =>
                      setActiveSubType((prev) => ({
                        ...prev,
                        [type]: sub,
                      }))
                    }
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeSubType[type] === sub
                        ? "bg-yellow-400 text-black"
                        : "bg-gray-800 hover:bg-gray-700"
                    }`}
                  >
                    {sub}
                  </button>
                ))}
              </div>

              {/* Show Slider only if subType selected */}
              {activeSubType[type] && (
                <div className="flex items-center gap-6 pb-4 scrollbar-hide scroll-smooth">
                  <button
                    onClick={() =>
                      scroll(type, activeSubType[type], "left")
                    }
                    className="h-fit -translate-y-1/2 bg-gray-900/70 hover:bg-gray-800 p-2 rounded-full shadow-lg z-10"
                  >
                    <ChevronLeft size={24} className="text-white" />
                  </button>

                  <div
                    ref={(el) =>
                      (sliderRefs.current[`${type}-${activeSubType[type]}`] =
                        el)
                    }
                    className="flex gap-6 overflow-x-auto px-2 py-4 scrollbar-hide scroll-smooth"
                  >
                    {subGroups[activeSubType[type]].map((post) => (
                      <article
                        key={post.id}
                        className="max-w-96 bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex-shrink-0"
                      >
                        <div className="p-6">
                          <h3
                            className="text-xl font-semibold mb-3 text-white hover:text-yellow-400 cursor-pointer"
                            onClick={() => navigate(`/blog/${post.id}`)}
                          >
                            {post.title}
                          </h3>
                          <p className="text-gray-300 mb-4 line-clamp-3">
                            {post.excerpt || "No excerpt available"}
                          </p>

                          <div className="flex items-center text-sm text-gray-400 mb-4">
                            <Calendar size={14} className="mr-2" />
                            <span className="mr-4">
                              {post.date
                                ? new Date(post.date).toLocaleDateString()
                                : ""}
                            </span>
                            <Clock size={14} className="mr-2" />
                            <span>{post.readTime}</span>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags?.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-1 bg-blue-700/40 text-blue-300 text-xs rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <button
                            onClick={() => navigate(`/blog/${post.id}`)}
                            className="text-yellow-400 hover:text-yellow-300 font-medium flex items-center space-x-2"
                          >
                            <span>Read More</span>
                            <ArrowRight size={16} />
                          </button>
                        </div>
                      </article>
                    ))}
                  </div>

                  <button
                    onClick={() =>
                      scroll(type, activeSubType[type], "right")
                    }
                    className="h-fit right-0 -translate-y-1/2 bg-gray-900/70 hover:bg-gray-800 p-2 rounded-full shadow-lg z-10"
                  >
                    <ChevronRight size={24} className="text-white" />
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBlogsPage;
