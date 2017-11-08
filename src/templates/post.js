import React from 'react';
import { md } from '../components';

const selectPost = ({ data }) => ({
  authors: data.post.authors.map(({ name }) => ({ name })),
  body: data.post.body.body,
  date: data.post.date,
  id: data.post.id,
  title: data.post.title,
});

class PostTemplate extends React.Component {
  render() {
    const { authors, body, date, id, title } = selectPost(this.props);

    return (
      <article>
        <h1>{title}</h1>
        <h2>{authors.map(a => a.name).join(', ')}</h2>
        <datetime>{date}</datetime>
        {md([body])}
      </article>
    );
  }
}

export default PostTemplate;

export const pageQuery = graphql`
  query PostTemplateQuery($id: String!) {
    post: contentfulPost(id: { eq: $id }) {
      id
      body {
        body
      }
      title
      date
      authors {
        name
      }
    }
  }
`;
