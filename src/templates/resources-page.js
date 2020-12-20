import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const pageQuery = graphql`
  query ResourcesQuery($id: String!){
		markdownRemark(id: { eq: $id }) {
      id
			html
			excerpt(pruneLength: 140)
      frontmatter {
				title
				resources {
					topic
					links {
						name
						cta
						link
					}					
				}
      }
    }
  }
`
const ResourcesPage = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark
  const resources = frontmatter.resources.map((i) =>
  	<div>
	  <h2><strong>{i.topic}</strong></h2>
		<ul>{i.links.map((j) => 
			<li>{j.name} [<a href={j.link} target="_blank">{j.cta}</a>]</li>
			)
	  	}</ul>
	</div>
    );

	return (
		<Layout className="page">
			<SEO
				title={frontmatter.title + " | jantonioavalos"}
				description={excerpt}
			/>
			<div className="wrapper">
				<section className="article-header bottomless">
          <h1 className="bottomless">{frontmatter.title}</h1>
        </section>
				<article className="blog-post">
					<div className="blog-post-content">
						{resources}
					</div>
				</article>
				<article dangerouslySetInnerHTML={{ __html: html }} />
			</div>
		</Layout>
	)
}

export default ResourcesPage