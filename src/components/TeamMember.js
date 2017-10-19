import React from 'react';
import styled from 'styled-components';
import Hole from './Hole';

const Img = styled.img`
  border-radius: 50%;
  height: auto;
  padding: 0 20px;
  vertical-align: middle;
  width: 100%;
`;

class TeamMember extends React.Component {
  render() {
    const { image, name, title } = this.props;

    return (
      <Hole>
        <Img
          alt={name}
          sizes="(min-width: 960px) 260px, 33vw"
          src={image.childImageSharp.small.src}
          srcSet={image.childImageSharp.small.srcSet}
        />
        <h3>{name}</h3>
        <p>{title}</p>
      </Hole>
    );
  }
}

export default TeamMember;

export const teamMemberFragment = graphql`
  fragment Team_TeamMember on TeamJson {
    image {
      childImageSharp {
        small: responsiveSizes(maxWidth: 260, maxHeight: 260) {
          src
          srcSet
        }
      }
    }
    name
    title
  }
`;
