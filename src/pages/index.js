import GatsbyImage from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import { modularScale, stripUnit } from 'polished';
import {
  A,
  BreakoutSection,
  Button,
  DescriptiveList,
  H1,
  H2,
  H3,
  H4,
  Header,
  InlineList,
  Lead,
  Main,
  md,
  P,
  Section,
  TeamMember,
  TeamMemberList,
  TextField,
} from '../components';
import { toNodesWithImage } from '../util/graphql';
import { mediaQuery } from '../util/style';

const LogoImg = styled(GatsbyImage)`opacity: 0.66;`;

const ContactFormLayout = styled.div`
  display: grid;
  grid-column-gap: 2em;
  grid-row-gap: 2em;
  grid-template-columns: 1fr auto;

  ${mediaQuery.xsmall`
    grid-template-columns: 1fr;
  `};
`;

class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const clients = toNodesWithImage(data.clients);
    const teamMembers = toNodesWithImage(data.team);
    const technologies = toNodesWithImage(data.technologies);

    return (
      <Main>
        <Header>
          <H1>Base Two</H1>
          <Lead>We turn ideas into beautiful, functional software.</Lead>
        </Header>
        <Section>
          <H2>Services</H2>
          <Lead>
            Whether you are looking to start a new project or finish an existing
            one, we have the experience to get it done.
          </Lead>
          <DescriptiveList>
            <DescriptiveList.Item iconName="computer" title="Web">
              We create rich user experiences and the back-end services to
              support them. Our expertise in full-stack web development means we
              can realize your vision from start to finish. Our work includes
              enterprise software, e-commerce solutions, websites, and web
              applications.
            </DescriptiveList.Item>
            <DescriptiveList.Item iconName="iphone" title="Mobile">
              Which mobile operating system are you going to target - iOS?
              Android? Windows? We use PhoneGap to eliminate that dilemma for
              you. We write the code once and deploy to every major mobile OS.
              If your end-user has a mobile device, you’ve got an app for it.
            </DescriptiveList.Item>
            <DescriptiveList.Item iconName="wallpaper" title="Design">
              We do user-centric, interaction-driven design. We assess your
              targeted user base and determine the most effective way to
              structure your content. We iterate using wireframes and
              click-through prototypes until it works just right, and then we
              make it look great.
            </DescriptiveList.Item>
          </DescriptiveList>
        </Section>
        <BreakoutSection>
          <H2>Technologies</H2>
          <InlineList centered>
            {technologies.map(technology => (
              <InlineList.Item key={technology.id}>
                <LogoImg {...technology.image} alt={technology.name} />
              </InlineList.Item>
            ))}
          </InlineList>
        </BreakoutSection>
        <Section>
          <H2>Services</H2>
          <Lead>
            Our process is designed to provide direction and flexibility to your
            project through open communication and trust. We guide you through
            the development process by providing weekly touchpoints, status
            updates, and passive awareness so that you can determine how
            involved you’d like to be on a day-to-day basis.
          </Lead>
          <DescriptiveList>
            <DescriptiveList.Item iconName="assignment" title="Define">
              {md`
                Whether your idea is to improve an internal business process or
                create the next big mobile app, we want to fully understand your
                vision. We’ll sit down with you, a dry erase board, and some
                coffee to discuss the problem you plan to solve. We want to
                understand not just the what but also the why of your idea so
                that we can offer you the best possible direction.

                Once the idea is fully understood, we’ll define an iterative
                plan consisting of small milestones - prioritized in a way to
                deliver the most valuable features first so that you can begin
                to recognize returns quickly.
              `}
            </DescriptiveList.Item>
            <DescriptiveList.Item iconName="code" title="Build">
              {md`
                We begin the Build phase by first breaking the current milestone
                into detailed development tasks. These tasks are entered into a
                project management tool that provides you visibility to the
                progress of each feature.

                For each feature in the application we create tests to ensure
                that the requirements have been fully met. This ensures that the
                feature has been properly implemented, and it allows future
                enhancements to be added with a low risk of introducing bugs.
              `}
            </DescriptiveList.Item>
            <DescriptiveList.Item iconName="refresh" title="Iterate">
              {md`
                Every project is different. That is why we don’t pretend like
                the same process will work for everyone. We work in an iterative
                fashion so that lessons learned can be incorporated into the
                project early and often, which results in a better overall
                application and relationship.

                At the end of each milestone we demo the application and ask for
                your feedback. The original vision and milestones that we
                defined are then adjusted to reflect your latest feedback and
                needs.
              `}
            </DescriptiveList.Item>
          </DescriptiveList>
        </Section>
        <BreakoutSection>
          <H2>Clients</H2>
          <InlineList centered>
            {clients.map(client => (
              <InlineList.Item key={client.id}>
                <LogoImg {...client.image} alt={client.name} />
              </InlineList.Item>
            ))}
          </InlineList>
        </BreakoutSection>
        <Section>
          <H2>Team</H2>
          <TeamMemberList>
            {teamMembers.map(member => (
              <TeamMember {...member} key={member.id} />
            ))}
          </TeamMemberList>
        </Section>
        <Section>
          <H2>Contact Us</H2>
          <Lead>
            Let’s work together! Fill out the form below with some info about
            your project.
          </Lead>
          <ContactFormLayout>
            <form action="https://formspree.io/info@base2.io" method="POST">
              <input name="_gotcha" style={{ display: 'none' }} type="text" />
              <input
                name="_subject"
                type="hidden"
                value="Let's work together!"
              />
              <input name="_next" type="hidden" value="/thanks" />
              <TextField label="Name" name="name" />
              <TextField label="Email" name="email" />
              <TextField label="Phone Number" name="phoneNumber" />
              <TextField label="Budget" name="budget" />
              <TextField
                label="Description"
                multiline
                name="leadDescription"
                rows="5"
              />
              <Button block>Submit</Button>
            </form>
            <aside>
              <H4>Office</H4>
              <address>
                <A
                  href="https://www.google.com/maps/place/Base+Two/@39.9867386,-83.0068768,17z/data=!3m1!4b1!4m5!3m4!1s0x88388ec568556e4d:0x7677c78cac445c63!8m2!3d39.9867386!4d-83.0046881"
                  rel="noopener"
                  target="_blank"
                >
                  <strong>Base Two</strong>
                  <br />
                  21 E 5th Ave, Ste 102<br />
                  Columbus, OH 43201
                </A>
              </address>
              <H4>Phone</H4>
              <address>
                <A href="tel:+16143981158" rel="noopener" target="_blank">
                  (614) 398-1158
                </A>
              </address>
              <H4>Email</H4>
              <address>
                <A href="mailto:info@base2.io" rel="noopener" target="_blank">
                  info@base2.io
                </A>
              </address>
            </aside>
          </ContactFormLayout>
        </Section>
      </Main>
    );
  }
}

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageQuery {
    clients: allClientsJson {
      edges {
        node {
          id
          image {
            childImageSharp {
              resolutions(quality: 80) {
                ...GatsbyImageSharpResolutions_withWebp_noBase64
              }
            }
          }
          name
        }
      }
    }
    team: allTeamJson {
      edges {
        node {
          id
          image {
            childImageSharp {
              resolutions(width: 260, quality: 80) {
                ...GatsbyImageSharpResolutions_withWebp_noBase64
              }
            }
          }
          name
          title
        }
      }
    }
    technologies: allTechnologiesJson {
      edges {
        node {
          id
          image {
            childImageSharp {
              resolutions(quality: 80) {
                ...GatsbyImageSharpResolutions_withWebp_noBase64
              }
            }
          }
          name
        }
      }
    }
  }
`;
