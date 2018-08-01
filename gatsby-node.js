{
  const path = require('path')
  exports.createPages = ({ boundActionCreators, graphql }) => {
    const { createPage } = boundActionCreators
    return new Promise((resolve, reject) => {
      const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
      resolve(
        graphql(`
          {
            allMarkdownRemark(limit: 1000) {
              edges {
                node {
                  frontmatter {
                    date
                    path
                    title
                  }
                }
              }
            }
          }
        `).then(result => {
          if (result.errors) {
            reject(result.errors)
          }
          result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            const path = node.frontmatter.path

            createPage({
              path,
              component: blogPostTemplate,
              context: {
                path,
              },
            })
          })
        })
      )
    })
  }
}
