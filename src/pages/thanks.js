import React from 'react';
import { Section } from '../components/blocks';
import TeamMember from '../components/TeamMember';
import TeamMemberList from '../components/TeamMemberList';
import { H2, Lead } from '../components/typography';
import { toNodesWithImage } from '../util/graphql';

class ThanksPage extends React.Component {
  render() {
    const { data } = this.props;
    const teamMembers = toNodesWithImage(data.team);

    return (
      <main>
        <Section>
          <H2>Thanks!</H2>
          <Lead>
            We're excited you're interested in working together.<br />
            <br />
            We'll review the information you sent and get back to you shortly.
            <br />
            <br />
            Thanks again,<br />
            Base Two
          </Lead>
        </Section>
        <Section>
          <TeamMemberList>
            {teamMembers.map(member => (
              <TeamMember {...member} key={member.id} />
            ))}
          </TeamMemberList>
        </Section>
      </main>
    );
  }
}

export default ThanksPage;

export const pageQuery = graphql`
  query ThanksPageQuery {
    team: allTeamJson {
      edges {
        node {
          id
          image {
            childImageSharp {
              resolutions(width: 260, quality: 80) {
                ...GatsbyImageSharpResolutions_withWebp_tracedSVG
              }
            }
          }
          name
          title
        }
      }
    }
  }
`;
