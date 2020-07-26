import React from "react";
import { Button, Container, Row, Col } from "reactstrap";
import project1 from "../assests/Project1.png";
import github from "../assests/github.png";
import styles from "./styles/Work.css";

const Work = () => {
  return (
    <>
      <Container className='top-container'>
        <Row align='center'>
          <Col className='top-container-title'>
            <h2>View all my ongoing and finished projects on github</h2>
          </Col>
        </Row>
        <Row align='center'>
          <Col className='top-container-image'>
            <img className='header-icon' src={github} />
          </Col>
        </Row>
        <Row align='center'>
          <Col className='top-container-button'>
            <Button
              target='_blank'
              href='https://www.github.com/mattocanas'
              color='secondary'
            >
              github
            </Button>
          </Col>
        </Row>
      </Container>

      <Container className='project-container'>
        <Row align='center'>
          <Col>
            <img className='project-img' src={project1} />
          </Col>
        </Row>

        <Row align='center'>
          <Col className='title-col'>
            <h2 className='work-title' style={{ color: "#F5F5F5" }}>
              My Personal Website
            </h2>
          </Col>
        </Row>

        <Row align='center'>
          <Col className='col-6 mx-auto'>
            <p
              className='work-text'
              style={{ color: "#F5F5F5", paddingTop: "2rem" }}
            >
              The first project to go on my new site, is actually the site
              itself. I developed this site to be an all encompassing hub for my
              work and for my thinking. I had a previous iteration of this site
              that can be found on my github profile, however I eventaully found
              that site to be too busy. The simple layout of this site was
              inspired by <a href='https://neptune.ai/'>neptune.ai</a>. I
              utilized React JS for this site, which may have been overkill in a
              sense, but I find the framework much easier to setup and change
              than just regular HTML and CSS files. For the design, I utilized
              ReactStrap and Bootstrap 4, couples with custom CSS classes. On
              the landing page, you will first notice the typing animation,
              which was the outside library "React Typing Animation". To router
              between the three different pages, I made used of the React-Router
              library, which is very easy to use. lastly, I deployed the site
              using heroku, which I believe to be the easiest way to deploy.
              From start to finish this project took me about two days of work.
              Eventaully I would like to come back and add in "mailchimp" to
              have a functioning mailist, but I think I should start working on
              actual React Apps.
            </p>
          </Col>
        </Row>

        <Row className='button-col' align='center'>
          <Col className='button-col' style={{ paddingTop: "3rem" }}>
            <Button size='lg' className='project-btn' outline color='secondary'>
              Project Repo
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Work;
