// Components
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Parallax } from 'react-spring/renderprops-addons.cjs'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
// Elements
import Inner from '../elements/Inner'
import { BigTitle, Subtitle, Title } from '../elements/Titles'
import About from '../views/About'
import Contact from '../views/Contact'
// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  const {
    title,
    subtitle,
    aboutDesc,
    aboutSub,
    email,
    projectOneTitle,
    projectOneUrl,
    projectOneDesc,
    projectTwoTitle,
    projectTwoUrl,
    projectTwoDesc,
    projectThreeTitle,
    projectThreeUrl,
    projectThreeDesc,
    projectFourTitle,
    projectFourDesc,
    projectFourUrl,
    profileImageUrl,
  } = frontmatter
  return (
    <>
      <Layout />
      <Parallax pages={5}>
        <Hero offset={0}>
          <BigTitle>
            Hello, <br /> {title}.
          </BigTitle>
          <Subtitle>{subtitle}</Subtitle>
        </Hero>
        <Projects offset={1}>
          <Title>Projects</Title>
          <ProjectsWrapper>
            <ProjectCard
              title={projectOneTitle}
              link={projectOneUrl}
              bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
            >
              {projectOneDesc}
            </ProjectCard>
            <ProjectCard
              title={projectTwoTitle}
              link={projectTwoUrl}
              bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
            >
              {projectTwoDesc}
            </ProjectCard>
            <ProjectCard
              title={projectThreeTitle}
              link={projectThreeUrl}
              bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
            >
              {projectThreeDesc}
            </ProjectCard>
            <ProjectCard
              title={projectFourTitle}
              link={projectFourUrl}
              bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
            >
              {projectFourDesc}{' '}
            </ProjectCard>
          </ProjectsWrapper>
        </Projects>
        <About offset={3}>
          <Title>About</Title>
          <AboutHero>
            <Avatar src={profileImageUrl} alt="John Doe" />
            <AboutSub>{aboutSub} </AboutSub>
          </AboutHero>
          <AboutDesc>{aboutDesc}</AboutDesc>
        </About>
        <Contact offset={4}>
          <Inner>
            <Title>Get in touch</Title>
            <ContactText>
              Say <a href={`mailto:${email}`}>Hi</a>
            </ContactText>
          </Inner>
          <Footer>
            &copy; 2019 by Gatsby Theme Portfolio Cara.{' '}
            <a href="https://github.com/LekoArts/gatsby-starter-portfolio-cara">Github Repository</a>. Made by Chris
            Hogg with thanks to <a href="https://www.lekoarts.de">LekoArts</a> for the starter
          </Footer>
        </Contact>
      </Parallax>
    </>
  )
}

/* eslint-disable */
Index.propTypes = {
  data: PropTypes.string,
}
/* eslint-enable */

export default Index

export const pageQuery = graphql`
  query {
    markdownRemark {
      frontmatter {
        title
        subtitle
        email
        aboutDesc
        aboutSub
        profileImageUrl
        projectOneTitle
        projectOneUrl
        projectOneDesc
        projectTwoTitle
        projectTwoUrl
        projectTwoDesc
        projectThreeTitle
        projectThreeUrl
        projectThreeDesc
        projectFourTitle
        projectFourDesc
        projectFourUrl
      }
      html
    }
  }
`
