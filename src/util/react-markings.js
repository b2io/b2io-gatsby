import { Parser } from 'commonmark';
import Renderer from 'commonmark-react-renderer';
import assign from 'lodash/assign';
import get from 'lodash/get';
import omit from 'lodash/omit';
import React from 'react';
import stripIndent from 'strip-indent';

const VALUE_PLACEHOLDER = 'MKnRrBrlP4lGwoCQXSshh16iLBqybKxPfiM_dtQZsorxaQeNkjm';

const Hole = props => props.children;

function validate(node) {
  let isValid = true;
  const walker = node.walker();
  let event;

  while ((event = walker.next())) {
    const node = event.node;

    if (!event.entering || !node.literal) {
      continue;
    }

    if (node.literal.indexOf(VALUE_PLACEHOLDER) === -1) {
      continue;
    }

    if (
      node.type === 'text' &&
      node.parent.type === 'paragraph' &&
      node.literal === VALUE_PLACEHOLDER
    ) {
      continue;
    }

    isValid = false;
    break;
  }

  return isValid;
}

const markings = (renderers = {}, rootType = Hole) => (strings, ...values) => {
  const input = stripIndent(strings.join(VALUE_PLACEHOLDER));
  const parser = new Parser();
  const ast = parser.parse(input);

  if (!validate(ast)) {
    throw new Error(
      'react-markings cannot interpolate React elements non-block positions',
    );
  }

  let index = 0;
  const renderer = new Renderer({
    renderers: assign(
      {},
      {
        paragraph(props) {
          if (
            props.children.length === 1 &&
            props.children[0] === VALUE_PLACEHOLDER
          ) {
            const value = values[index];
            index = index + 1 < values.length ? index + 1 : 0;

            return value;
          }

          return React.createElement(
            get(renderers, 'paragraph', 'p'),
            {},
            props.children,
          );
        },
      },
      omit(renderers, ['paragraph']),
    ),
  });

  return React.createElement(rootType, {}, renderer.render(ast));
};

export default markings;
