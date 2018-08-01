import React from 'react'
import Helmet from 'react-helmet'

export default function Template({ data }) {
  if (!data) {
    return null
  }
  const post = data.markdownRemark
  return (
    <div className="blog-post-container">
      <Helmet title={`CodeStack - ${post.frontmatter.title}`} />
      <div className="blog-post">
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  )
}
export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        pat
        title
      }
    }
  }
`
