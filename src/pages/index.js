import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Layout, Hero, About, Featured, Projects, Contact } from '@components';
import styled from 'styled-components';
import { Main } from '@styles';
import { theme, media } from '@styles';
const { colors, fontSizes, fonts } = theme;

import '../styles/form.css';

const StyledMainContainer = styled(Main)`
  counter-reset: section;
`;
const StyledTitle = styled.h4`
  margin: auto;
  font-size: 50px;
  ${media.desktop`font-size: 50px;`};
  ${media.tablet`font-size: 30px;`};
  ${media.tablet`width: 95%;`};
  width: 60%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledHeader = styled.div`
  background: #64ffda;
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  text-align: center;
  color: #0a192f;
  font-weight: bold;
`;
const StyledLabel = styled.h4`
  font-size: ${fontSizes.smish};
  font-weight: normal;
  color: ${colors.green};
  font-family: ${fonts.SFMono};
  margin-top: 10px;
  padding-top: 0;
  text-align: center;
`;

const IndexPage = ({ location, data }) => (
  <Layout location={location}>
    <StyledHeader style={{ paddingTop: '5px', fontSize: `16px` }}>
      22% off the next 22 Projects 🤟🚀 (18 Left){' '}
    </StyledHeader>
    <StyledMainContainer className="fillHeight">
      <Hero data={data.hero.edges} />
      <About data={data.about.edges} />
      <StyledTitle>Only Pay 50% Upfront On Your Next Project or a Month to Month Basis</StyledTitle>
      <StyledLabel>
        We now offer a month to month service, no lengthy retainers required.
      </StyledLabel>
      <Featured data={data.featured.edges} />
      <Projects data={data.projects.edges} />
      <Contact data={data.contact.edges} />
      <form method="post" action="https://getform.io/f/edeb6234-fc5e-4243-906f-c593e86d97ee">
        <input name="name" type="text" className="feedback-input" placeholder="Name" />
        <input name="email" type="text" className="feedback-input" placeholder="Email" />
        <textarea
          name="text"
          className="feedback-input"
          placeholder="Tell us a little bit about what you need"></textarea>
        <input type="hidden" name="subscribe" value="no" className="feedback-input" /> Number of
        employees
        <select name="Number of employees" className="feedback-input">
          <option value="1-10">0-10</option>
          <option value="10-50">10-50</option>
          <option value="50+">50+</option>
        </select>
        <input type="submit" value="SUBMIT" />
      </form>
      <StyledTitle style={{ fontSize: '45px' }}>
        264 Projects Completed.... and Counting
      </StyledTitle>
    </StyledMainContainer>
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default IndexPage;

export const pageQuery = graphql`
  {
    hero: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
      edges {
        node {
          frontmatter {
            title
            name
            subtitle
            buttonText
            skillset
          }
          html
        }
      }
    }
    about: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about/" } }) {
      edges {
        node {
          frontmatter {
            title
            avatar {
              childImageSharp {
                fluid(maxWidth: 700, quality: 90, traceSVG: { color: "#64ffda" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            skills
          }
          html
        }
      }
    }
    jobs: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/jobs/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            company
            range
            url
          }
          html
        }
      }
    }
    featured: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/featured/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            cover {
              childImageSharp {
                fluid(maxWidth: 700, quality: 90, traceSVG: { color: "#64ffda" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            tech
          }
          html
        }
      }
    }
    projects: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/projects/" }
        frontmatter: { showInProjects: { ne: false } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            tech
          }
          html
        }
      }
    }
    contact: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/contact/" } }) {
      edges {
        node {
          frontmatter {
            title
            buttonText
          }
          html
        }
      }
    }
  }
`;
