import React from 'react';

class Html extends React.Component {
  render() {
    const {
      body,
      headComponents,
      postBodyComponents,
      preBodyComponents,
    } = this.props;

    return (
      <html lang="en">
        <head>
          {headComponents}
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link
            href="/apple-touch-icon.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link
            href="/favicon-32x32.png"
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
          <link
            href="/favicon-16x16.png"
            rel="icon"
            sizes="16x16"
            type="image/png"
          />
          <link color="#5bbad5" href="/safari-pinned-tab.svg" rel="mask-icon" />
          <title>Base Two</title>
        </head>
        <body>
          {preBodyComponents}
          <div id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
          {postBodyComponents}
        </body>
      </html>
    );
  }
}

module.exports = Html;
