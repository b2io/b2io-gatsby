import React from 'react';
import md from '../util/md';

class PostTemplate extends React.Component {
  render() {
    const { content, data, id } = this.props.pathContext;

    return (
      <main>
        <h1>{data.title}</h1>
        {md([content])}
      </main>
    );
  }
}

export default PostTemplate;
