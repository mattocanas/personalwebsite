import React from "react";
import { Button, Container, Row, Col } from "reactstrap";
import javascript from "../assests/javascript.png";
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
            <img src={javascript} />
          </Col>
        </Row>

        <Row align='center'>
          <Col>
            <h2 className='work-title' style={{ color: "white" }}>
              Title
            </h2>
          </Col>
        </Row>

        <Row align='center'>
          <Col className='col-6 mx-auto'>
            <p
              className='work-text'
              style={{ color: "white", paddingTop: "2rem" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi
              eros, sollicitudin sit amet quam ut, porta interdum tortor.
              Aliquam a ultricies ipsum. Nulla mattis ipsum odio, eu blandit leo
              lobortis eu. Nulla facilisis odio at sapien bibendum ornare.
            </p>
          </Col>
        </Row>

        <Row align='center'>
          <Col style={{ paddingTop: "3rem" }}>
            <Button size='lg' className='project-btn' outline color='secondary'>
              Project
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Work;
