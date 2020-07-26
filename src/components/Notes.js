import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Note from "./Note";
import styles from "./styles/Notes.css";

const Notes = () => {
  return (
    <>
      <Container className='top-container'>
        <Row align='center'>
          <Col className='title-column'>
            <h1 className='notes-title'>notes</h1>
          </Col>
        </Row>
      </Container>
      {/* <Note
        title='title'
        subtitle='subtitle'
        text='textajksdfhajhsdfjkhasdjkf asdjkfhajksdhfjkahsdfjk askdjfhasjkdfhkajsdfjkashd fjkashdfjkhasdkjfhajksdfadsfd asd fas df asd fa sdf asdf as df asdf asd fa sdf as df asdf as df asdf as df asdf asd f asdf as df asd fa sdf asd fa sdf asd fa sdf '
      /> */}
      <h1 className='construction'>
        Under Construction. Please put on a hard hat.
      </h1>

      <Container className='fourth-container-notes'>
        <Row className='fourth-container-title-row'>
          <Col align='center'>
            <h3 className='contact-header'>hire me</h3>
          </Col>
        </Row>

        <Row className='fourth-container-input-row'>
          <Col align='center'>
            <Button className='email-btn' color='secondary'>
              email me
            </Button>{" "}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Notes;
