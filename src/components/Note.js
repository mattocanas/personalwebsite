import React from "react";
import { Container, Row, Col } from "reactstrap";
import testimg from "../assests/testimg.jpg";
import styles from "./styles/Note.css";

const Note = ({
  imageName,
  title,
  titleColor,
  subtitle,
  subtitleColor,
  text,
  textColor,
}) => {
  return (
    <>
      <Container className='note-container'>
        <Row align='center'>
          <Col>
            <img className='note-image' src={testimg} />
          </Col>
        </Row>
        <Row align='center'>
          <Col className='title-col'>
            <h2 className='note-title'>{title}</h2>
          </Col>
        </Row>
        <Row align='center'>
          <Col className='subtitle-col'>
            <h3 className='note-subtitle'>{subtitle}</h3>
          </Col>
        </Row>
        <Row align='center'>
          <Col />
          <Col className='text-col col-6'>
            <p className='note-text'>{text}</p>
          </Col>
          <Col />
        </Row>
      </Container>
    </>
  );
};

export default Note;
