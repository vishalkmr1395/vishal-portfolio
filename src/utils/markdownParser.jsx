import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeReact from "rehype-react";
import matter from "gray-matter";
import React from "react";

// Parse frontmatter
export const parseMarkdownWithFrontmatter = (markdownContent) => {
  const { data, content } = matter(markdownContent);

  return {
    frontmatter: data,
    content: content,
  };
};

// Convert Markdown → React elements
export const markdownToReact = (markdown) => {
  return unified()
    .use(remarkParse)       // parses markdown to AST
    .use(remarkGfm)         // GitHub-flavored markdown
    .use(remarkRehype)      // markdown → HTML AST
    .use(rehypeReact, { createElement: React.createElement })
    .processSync(markdown).result;
};
