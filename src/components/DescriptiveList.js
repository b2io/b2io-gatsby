import React from 'react';
import styled, { css } from 'styled-components';
import Icon from './Icon';
import { H3, P } from './typography';
import { mediaQuery } from '../util/style';

const Header = styled.header`
  align-items: center;
  display: flex;
  margin: 0 0 1em;
`;

const ItemH3 = H3.extend`
  display: inline-block;
  margin: 0 0 0 1rem;
`;

class DescriptiveListItem extends React.Component {
  render() {
    const { children, iconName, title } = this.props;
    const content = React.Children.map(
      children,
      child => (child.type === undefined ? <P>{child}</P> : child),
    );

    return (
      <li>
        <Header>
          <Icon name={iconName} style={{ fontSize: '3em' }} />
          <ItemH3>{title}</ItemH3>
        </Header>
        {content}
      </li>
    );
  }
}

const DescriptiveList = styled.ul`
  display: grid;
  grid-column-gap: 2em;
  grid-row-gap: 2em;
  grid-template-columns: 1fr;
  list-style: none;
  margin: 2em 0;
  padding: 0;

  ${mediaQuery.medium`
    grid-template-columns: 1fr 1fr 1fr;
  `};
`;

DescriptiveList.Item = DescriptiveListItem;

export default DescriptiveList;
