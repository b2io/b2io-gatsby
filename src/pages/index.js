import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import TeamMember from '../components/TeamMember';

const nodesIn = (key, data) => data[key].edges.map(e => e.node);

injectGlobal`
  * {
    box-sizing: border-box;
  }
`;

const TeamList = styled.ul`
  line-height: 0;
  list-style: none;
  padding: 0;
`;

const TeamListItem = styled.li`
  display: inline-block;
  max-width: 228px;
  min-width: 144px;
  overflow: hidden;
  padding: 4px;
  text-align: center;
  width: 20%;
`;

class IndexPage extends React.Component {
  render() {
    const teamMembers = nodesIn('allTeamJson', this.props.data);

    return (
      <main>
        <header>
          <h1>Base Two</h1>
        </header>
        <section>
          <h2>Team</h2>
          <TeamList>
            {teamMembers.map(member => (
              <TeamListItem key={member.id}>
                <TeamMember {...member} />
              </TeamListItem>
            ))}
          </TeamList>
        </section>
      </main>
    );
  }
}

export default IndexPage;

export const pageQuery = graphql`
  query allTeam {
    allTeamJson {
      edges {
        node {
          id
          ...Team_TeamMember
        }
      }
    }
  }
`;
