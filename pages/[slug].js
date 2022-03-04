import React from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { Box, Heading } from "@chakra-ui/react";
import gfm from "remark-gfm";

function PostTemplate({ content, data }) {
  // This holds the data between `---` from the .md file
  const frontmatter = data;
  return (
    <Box p={8} maxW="1200px" mx="auto">
      <Heading mb={8}>{frontmatter.title}</Heading>
      <div className="markdown-body">
        <ReactMarkdown rehypePlugins={[rehypeRaw, gfm]}>{content}</ReactMarkdown>
      </div>
    </Box>
  );
}

PostTemplate.getInitialProps = async (context) => {
  const { slug } = context.query;

  // Import our .md file using the `slug` from the URL
  const content = await import(`../content/${slug}.md`);

  // Parse .md data through `matter`
  const data = matter(content.default);

  // Pass data to our component props
  return { content, ...data };
};

export default PostTemplate;
