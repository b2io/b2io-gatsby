const format = require('date-fns/format');
const path = require('path');
const slash = require('slash');

const postTemplate = slash(path.resolve('./src/templates/post.js'));

function slugify({ date, title }) {
  const datePart = format(date, 'YYYY[/]MM[/]DD');
  const titlePart = title
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, '-')
    .toLowerCase();

  return `${datePart}/${titlePart}`;
}

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    graphql(`
      query CreatePagesQuery {
        posts: allContentfulPost {
          edges {
            node {
              id
              title
              date
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) reject(result.errors);

      result.data.posts.edges.map(e => e.node).forEach(post => {
        createPage({
          component: postTemplate,
          context: { id: post.id },
          path: slugify(post),
        });
      });

      resolve();
    });
  });
};
