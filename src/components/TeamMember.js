import GatsbyImage from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import { H4 } from './typography';
import { mediaQuery, themed } from '../util/style';

const Wrapper = styled.li`
  display: inline-block;
  margin: 1em;
  vertical-align: top;
`;

const Img = styled(GatsbyImage)`
  height: auto;
  vertical-align: middle;
  width: 260px;
`;

const Name = H4.extend`${themed('typography.headline')};`;

const Title = styled.small`
  display: block;
  font-weight: normal;
`;

class TeamMember extends React.Component {
  render() {
    const { image, name, title } = this.props;

    return (
      <Wrapper>
        <Img
          alt={name}
          resolutions={image.resolutions}
        />
        <Name>
          {name}
          <Title>{title}</Title>
        </Name>
      </Wrapper>
    );
  }
}

export default TeamMember;
