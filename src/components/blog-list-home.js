import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import { RiArrowRightSLine } from "react-icons/ri";

import PostCard from "./post-card";

const PostMaker = ({ data }, type) => (
  <div className="grids col-1 sm-2 lg-3">{data}</div>
);

// const PostMaker = ({ data }, type) => (
//   <section className="home-posts">
//     <h2>Latest publications</h2>
//     <div className="grids col-1 sm-2 lg-3">{data}</div>
//     <Link className="button" to="/blogfolio">
//       See more
//       <span className="icon -right">
//         <RiArrowRightSLine />
//       </span>
//     </Link>
//   </section>
// );

export default function BlogListHome() {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { template: { in: ["blog-post", "portfolio-post"] } } }
            limit: 4444
          ) {
            edges {
              node {
                id
                excerpt(pruneLength: 250)
                frontmatter {
                  date(formatString: "MMMM DD, YYYY")
                  time
                  slug
                  title
                  type
                  private
                  extlink
                  featuredImage {
                    childImageSharp {
                      fluid(maxWidth: 540, maxHeight: 360, quality: 80) {
                        ...GatsbyImageSharpFluid
                        ...GatsbyImageSharpFluidLimitPresentationSize
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        const allPublications = data.allMarkdownRemark.edges
          .filter((edge) => !!edge.node.frontmatter.date)
          .map((edge) =>
            edge.node.frontmatter.private ? null : (
              <PostCard key={edge.node.id} data={edge.node} />
            )
          );
        const caseStudies = data.allMarkdownRemark.edges
          .filter((edge) => !!edge.node.frontmatter.date)
          .map((edge) =>
            edge.node.frontmatter.type == "Case Study" && !edge.node.frontmatter.private ? (
              <PostCard key={edge.node.id} data={edge.node} />
            ) : null
          );
        const posts = data.allMarkdownRemark.edges
          .filter((edge) => !!edge.node.frontmatter.date)
          .map((edge) =>
            edge.node.frontmatter.type == "Medium" && !edge.node.frontmatter.private ? (
              <PostCard key={edge.node.id} data={edge.node} />
            ) : null
          );
          const zensemakers = data.allMarkdownRemark.edges
          .filter((edge) => !!edge.node.frontmatter.date)
          .map((edge) =>
            edge.node.frontmatter.type == "Blog" && !edge.node.frontmatter.private ? (
              <PostCard key={edge.node.id} data={edge.node} />
            ) : null
          );
        return (
          <div>
            {/* <section className="home-posts">
              <h2>Latest publications</h2>
              <PostMaker data={allPublications} />
            </section> */}
            <section className="home-posts">
              <h2 className="category">Case studies</h2>
              <PostMaker data={caseStudies} />
              <h2 className="category">Featured articles</h2>
              <PostMaker data={posts} />
              <h2 className="category">Latest posts</h2>
              <PostMaker data={zensemakers} />
            </section>
          </div>
        );
      }}
    />
  );
}
