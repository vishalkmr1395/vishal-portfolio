// src/hooks/useBlogPosts.js
import { useEffect, useState } from "react";
import matter from "gray-matter";

export const useBlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        // Import all markdown files as raw text
        const files = import.meta.glob("../content/blogs/*.md", { as: "raw" });

        const loadedPosts = await Promise.all(
          Object.entries(files).map(async ([path, resolver]) => {
            const raw = await resolver();
            const { data, content } = matter(raw);

            return {
              id: path.split("/").pop().replace(".md", ""),
              ...data,
              content,
            };
          })
        );

        setPosts(loadedPosts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  return { posts, loading, error };
};
