import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useBlogPosts } from './hooks/useBlogPosts';
import AllBlogsPage from './pages/AllBlogPage';
import SingleBlogPage from './pages/SingleBlogPage';
import LoadingSpinner from './components/LoadingSpinner';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';

const App = () => {
  const { posts, loading, error } = useBlogPosts();

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-center py-12 text-red-600">Error: {error}</div>;

  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home posts={posts} />} />
          <Route path="/blogs" element={<AllBlogsPage posts={posts} />} />
          <Route path="/blog/:id" element={<SingleBlogPage posts={posts} />} />
          <Route path="/contacts" element={<ContactUs posts={posts} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;