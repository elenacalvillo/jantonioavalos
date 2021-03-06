import React from "react";
import { Link } from "gatsby"
import { graphql } from "gatsby";

import { RiArticleFill } from "react-icons/ri"
import Layout from "../components/layout";
import SEO from "../components/seo";
import BottomLinks from "../components/bottom-links";

export const pageQuery = graphql`
  query AboutQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 140)
      frontmatter {
        title
      }
    }
  }
`;
const AboutPage = ({ data }) => {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark;
  return (
    <Layout className="page">
			<SEO
				title={frontmatter.title + " | jantonioavalos"}
				description={excerpt}
			/>
			<div className="wrapper">
        <section className="article-header">
          <h1>{frontmatter.title}</h1>
        </section>
				<article className="blog-post" >
					<div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }}/>
          <BottomLinks />
				</article>
			</div>
		</Layout>
  );
};

export default AboutPage;
