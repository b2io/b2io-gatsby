import React from 'react';
import { md } from '../components';

class PostTemplate extends React.Component {
  render() {
    const { body, frontmatter } = this.props.pathContext;
    return (
      <article>
        <pre>{JSON.stringify(frontmatter, null, 2)}</pre>
        <pre>{body}</pre>
      </article>
    );
  }
}

export default PostTemplate;
