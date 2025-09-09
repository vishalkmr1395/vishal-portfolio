import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import MarkdownContent from "../components/MarkdownContent";
import Navbar from "../components/navbar/navbar";

const SingleBlogPage = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white flex items-center justify-center">
        <Navbar />
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link to="/blogs" className="text-blue-600 hover:text-blue-700 font-medium">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-8">
            <Link
                to="/blogs"
                className="inline-flex items-center text-blue-400 hover:text-blue-700 font-medium mb-6"
            >
                <ArrowLeft size={16} className="mr-2" />
                Back to Blog
            </Link>

            <article>
                {/* Card for header details */}
                <div className="bg-blue-800 opacity-80 rounded-xl shadow-lg p-8 mb-8">
                    <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                    <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-6">
                        <div className="flex items-center">
                            <Calendar size={16} className="mr-2" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center">
                            <Clock size={16} className="mr-2" />
                            <span>{post.readTime}</span>
                        </div>
                        <div className="flex items-center">
                            <User size={16} className="mr-2" />
                            <span>By {post.author}</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {post.tags?.map((tag) => (
                            <span key={tag} className="px-3 py-1 bg-gray-600 text-white text-sm rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="prose prose-lg max-w-none">
                    <MarkdownContent content={post.content} />
                </div>
            </article>
        </div>
    </div>
);
};

export default SingleBlogPage;
