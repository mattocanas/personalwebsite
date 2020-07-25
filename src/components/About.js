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
import webicon from "../assests/webicon.png";

const About = () => {
  return (
    <>
      <Container>
        <Row className='justify-content-center'>
          <Col align='center'>
            <h1>i'm matthew</h1>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col align='center'>
            <h3>
              an <span>engine</span>er
            </h3>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col align='center'>
            <img className='icon' src={coding} />
          </Col>
          <Col align='center'>
            <img className='icon' src={mobile} />
          </Col>
          <Col align='center'>
            <img className='icon' src={ai} />
          </Col>
        </Row>

        <Row>
          <Col align='center'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi
              eros, sollicitudin sit amet quam ut, porta interdum tortor.
              Aliquam a ultricies ipsum. Nulla mattis ipsum odio, eu blandit leo
              lobortis eu. Nulla facilisis odio at sapien bibendum ornare. Sed
              maximus volutpat neque, ac facilisis tellus porttitor id. Etiam
              lacinia velit nisi, eu lacinia odio faucibus ac. Suspendisse in
              urna consectetur, porttitor est sed, facilisis augue. Cras sapien
              magna, scelerisque id magna in, mattis finibus erat.
            </p>
          </Col>
          <Col align='center'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi
              eros, sollicitudin sit amet quam ut, porta interdum tortor.
              Aliquam a ultricies ipsum. Nulla mattis ipsum odio, eu blandit leo
              lobortis eu. Nulla facilisis odio at sapien bibendum ornare. Sed
              maximus volutpat neque, ac facilisis tellus porttitor id. Etiam
              lacinia velit nisi, eu lacinia odio faucibus ac. Suspendisse in
              urna consectetur, porttitor est sed, facilisis augue. Cras sapien
              magna, scelerisque id magna in, mattis finibus erat.
            </p>
          </Col>
          <Col align='center'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi
              eros, sollicitudin sit amet quam ut, porta interdum tortor.
              Aliquam a ultricies ipsum. Nulla mattis ipsum odio, eu blandit leo
              lobortis eu. Nulla facilisis odio at sapien bibendum ornare. Sed
              maximus volutpat neque, ac facilisis tellus porttitor id. Etiam
              lacinia velit nisi, eu lacinia odio faucibus ac. Suspendisse in
              urna consectetur, porttitor est sed, facilisis augue. Cras sapien
              magna, scelerisque id magna in, mattis finibus erat.
            </p>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col align='center'>
            <h2>technologies i know</h2>
          </Col>
        </Row>

        <Row className='justify-content-center'>
          <Col />
          <Col align='start'>
            <img className='icon' src={webicon} />
          </Col>
          <Col />
          <Col align='start'>
            <img className='icon' src={webicon} />
          </Col>
          <Col />
          <Col align='start'>
            <img className='icon' src={webicon} />
          </Col>
          <Col />
          <Col align='start'>
            <img className='icon' src={webicon} />
          </Col>
          <Col />
          <Col align='start'>
            <img className='icon' src={webicon} />
          </Col>
          <Col />
        </Row>

        <Row>
          <Col />
          <Col />
          <Col align='center'>
            <img className='icon' src={webicon} />
          </Col>
          <Col />
          <Col align='center'>
            <img className='icon' src={webicon} />
          </Col>
          <Col />
          <Col align='center'>
            <img className='icon' src={webicon} />
          </Col>
          <Col />
          <Col align='center'>
            <img className='icon' src={webicon} />
          </Col>
          <Col />
          <Col />
        </Row>
      </Container>

      <Container>
        <Row>
          <Col align='center'>
            <h3>hire me</h3>
          </Col>
          <Col align='center'>
            <h3>join my mailing list</h3>
          </Col>
        </Row>

        <Row>
          <Col align='center'>
            <Button color='secondary'>email me</Button>{" "}
          </Col>
          <Col align='center'>
            <InputGroup>
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
