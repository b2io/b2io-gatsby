const format = require('date-fns/format');
const grayMatter = require('gray-matter');
const path = require('path');

const postTemplate = path.resolve('./src/templates/post.js');

function readPost(absolutePath) {
  const { content, data } = grayMatter.read(absolutePath);
  const id = path.parse(absolutePath).name;
  const postPath  = id.replace(/(\d{4})-(\d{2})-(\d{2})-(.+)/g, '$1/$2/$3/$4');

  return { id, body: content, frontmatter: data, path: postPath };
}

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    graphql(`
      query CreatePostsQuery {
        posts: allFile(
          filter: {
            extension: { eq: "md" }
            relativeDirectory: { eq: "posts" }
          }
        ) {
          edges {
            node {
              absolutePath
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) reject(result.errors);

      console.log('Result', result);

      result.data.posts.edges
        .map(e => e.node.absolutePath)
        .map(readPost)
        .forEach(post => {
          console.log('Post', post.path);

          createPage({
            component: postTemplate,
            context: Object.assign({}, post),
            path: post.path,
          });
        });

      resolve();
    });
  });
};
