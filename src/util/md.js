import get from 'lodash/get';
import React from 'react';
import markings from './react-markings';
import { H1, H2, H3, H4, P } from './typography';

const headingsByLevel = { 1: H1, 2: H2, 3: H3, 4: H4 };

function getCoreProps(props) {
  return {
    key: props.nodeKey,
    className: props.className,
    'data-sourcepos': props['data-sourcepos'],
  };
}

const md = markings({
  heading(props) {
    return React.createElement(
      get(headingsByLevel, props.level, `h${props.level}`),
      getCoreProps(props),
      props.children,
    );
  },
  paragraph: P,
  // TODO: Include other components.
});

export default md;
