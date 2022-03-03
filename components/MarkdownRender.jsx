import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";

function MarkdownRender({ file }) {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(file)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);
  return (
    <Box p={8}>
      <ReactMarkdown source={markdown} />
    </Box>
  );
}

export default MarkdownRender;
