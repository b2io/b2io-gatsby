import React from 'react';
import styled from 'styled-components';
import { cssSome } from '../util/style';

const InlineList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  ${cssSome('centered')`
    text-align: center;
  `};
`;

InlineList.Item = styled.li`
  display: inline-block;
  padding: 1em 2em;
`;

export default InlineList;
