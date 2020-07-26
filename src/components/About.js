import React from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  Input,
  InputGroupText,
  Button,
  Badge,
} from "reactstrap";
import ai from "../assests/ai.png";
import coding from "../assests/coding.png";
import mobile from "../assests/mobile.png";
import styles from "./styles/About.css";
import html from "../assests/html.png";
import css from "../assests/css.png";
import javascript from "../assests/javascript.png";
import mongodb from "../assests/mongodb.png";
import node from "../assests/node.png";
import express from "../assests/express.png";
import react from "../assests/react.png";
import reactnative from "../assests/reactnative.png";
import python from "../assests/python.png";
import engineering from "../assests/engineering.png";
import Typing from "react-typing-animation";

const About = () => {
  return (
    <>
      <Container className='first-container'>
        <Row className='title-row'>
          <Col className='title-column-custom' align='center'>
            <h1 className='title-custom'>i'm matthew</h1>
          </Col>
        </Row>
        <Row className='justify-content-center subtitle-row'>
          <Col className='subtitle-column-custom' align='center'>
            <Typing speed={60}>
              <h3 className='subtitle-custom'>
                a programmer
                {/* an <span className='title-span'>engine</span>er */}
              </h3>
              <Typing.Delay ms={700} />
              <Typing.Backspace count={12} />
              <h3 className='subtitle-custom'>
                an engineer
                {/* an <span className='title-span'>engine</span>er */}
              </h3>
              <Typing.Delay ms={700} />
              <Typing.Backspace count={11} />
              <h3 className='subtitle-custom'>
                an <span className='title-span'>engine</span>er
              </h3>
            </Typing>
          </Col>
        </Row>
      </Container>

      <Container className='second-container'>
        <Row className='skills-row'>
          <Col lg='3' sm='auto' align='center'>
            <img className='icon' src={coding} />
            <h3 className='skills-title'>Web Design & Development</h3>
          </Col>
          <Col lg='3' sm='auto' align='center'>
            <img className='icon' src={mobile} />
            <h3 className='skills-title'>Mobile App Architecture</h3>
          </Col>
          <Col lg='3' sm='auto' align='center'>
            <img className='icon' src={ai} />
            <h3 className='skills-title'>Using ML to Streamline</h3>
          </Col>
          <Col lg='3' sm='auto' align='center'>
            <img className='icon' src={engineering} />
            <h3 className='skills-title'>Engineering future</h3>
          </Col>
        </Row>

        <Row className='skills-text-row'>
          <Col lg='3' sm='auto' align='center'>
            <p className='about-text'>
              Equipped with an ever-growing knowledge of HTML, CSS and
              Javascript, I have the ability to create beautiful static websites
              to match whatever specifications your heart or mind desires. With
              over six years of experience with Adobe Photoshop, any custom
              design or icon you wish to display on your site can easily be
              turned into a reality. Beyond static webpages, my experience with
              React, mongoDB, Express, and Node, allow me to to develop fully
              featured web application using live data from custom made or
              public APIs. I am always excited about new design and development
              challenges for the web! Contact me using the form below to hire me
              for your technical challenges. If I am currently unavailable, or
              am unable to meet your specifications, I will be able to refer you
              to a different developer.
            </p>
          </Col>
          <Col lg='3' sm='auto' align='center'>
            <p className='about-text'>
              Mobile UX and UI is an area that has always been of great interest
              to me, and with mobile internet usage having grown over 500% in
              the last nine years alone, with no sign of slowing down, there has
              never been a better time to put your business in the App Store.
              Using the React Native framework gives me the ability to create
              your application for both iOS and Android users with just one code
              base. The speed and ability of React Native can be seen through
              apps like Facebook, Instagram, Uber Eats, and AirBnb. The mobile
              applications I develop for you will not only be beautiful, but
              fully functioning, utilizing the same full-stack technologies that
              power all of the largest companies. Send me an email using the
              form below, with your mobile app specifications and I will get
              back to you with a quote!
            </p>
          </Col>
          <Col lg='3' sm='auto' align='center'>
            <p className='about-text'>
              We have all seen the headlines, and know that the future of
              technology lay with Machine Learning and Artificial Intelligence.
              Unfortunately, the vast majority of businesses either don’t
              implement, or misuse machine learning. The ability for this field
              to streamline and transform out-of-date industries is a topic I am
              both very interested in and passionate about. Using Python,
              TensorFlow, and PyTorch to create fun, interesting, and inspiring
              user experiences, is something I work on everyday. Expect to see
              machine learning engineering work appear very soon in my
              portfolio. Until then, if you would like to follow or join in on
              my journey to ML Engineer, head to the notes tab, where I plan to
              frequently post about what I am currently studying in the ML
              field.
            </p>
          </Col>
          <Col lg='3' sm='auto' align='center'>
            <p className='about-text'>
              Beginning in fall 2020, I will be a mechanical engineering student
              at The University of Texas at Austin’s Cockrell School of
              Engineering. The clean energy industry, specifically nuclear
              energy, as well as the biomedical field, have been the biggest
              inspirations in my journey to become an engineer. My goal is to
              incorporate my love for engineering both mechanical systems, as
              well as digital systems to build top to bottom businesses that
              shape our future. If you would like to join me on this path, or
              follow the research that I am currently doing in the field of
              mechanical engineering, head over to the “notes” section where I
              will post articles about subjects I find interesting.
            </p>
          </Col>
        </Row>
      </Container>

      <Container align='center' className='third-container'>
        <Row className='third-container-title-row'>
          <Col align='center'>
            <h2 className='technologies-title'>technologies i know</h2>
          </Col>
        </Row>

        <Row className='technologies-first-row'>
          <Col />
          <Col align='start'>
            <img className='icon' src={html} />
          </Col>
          <Col />
          <Col align='start'>
            <img className='icon' src={javascript} />
          </Col>
          <Col />
          <Col align='start'>
            <img className='icon' src={mongodb} />
          </Col>
          <Col />
          <Col align='start'>
            <img className='icon' src={node} />
          </Col>
          <Col />
          <Col align='start'>
            <img className='icon' src={python} />
          </Col>
          <Col />
        </Row>

        <Row className='technologies-second-row'>
          <Col />
          <Col />
          <Col align='center'>
            <img className='icon' src={css} />
          </Col>
          <Col />
          <Col align='center'>
            <img className='icon' src={express} />
          </Col>
          <Col />
          <Col align='center'>
            <img className='icon' src={react} />
          </Col>
          <Col />
          <Col align='center'>
            <img className='icon' src={reactnative} />
          </Col>
          <Col />
          <Col />
        </Row>
      </Container>

      <Container className='fourth-container'>
        <Row className='fourth-container-title-row'>
          <Col align='center'>
            <h3 className='input-header'>hire me</h3>
          </Col>
          <Col align='center'>
            <h3 className='input-header'>join my mailing list</h3>
            <h4>
              {" "}
              <Badge color='secondary'>coming soon...</Badge>
            </h4>
          </Col>
        </Row>

        <Row className='fourth-container-input-row'>
          <Col align='center'>
            <Button size='lg'>
              <a className='email-link' href='mailto:matthew.ocanas@icloud.com'>
                send messenger pigeon
              </a>
            </Button>{" "}
          </Col>
          <Col align='center'>
            <InputGroup className='custom-input'>
              <Input />
              <InputGroupAddon addonType='append'>
                <InputGroupText>join</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
