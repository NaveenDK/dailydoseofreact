import React, { useState, useEffect } from "react";
import { findRenderedDOMComponentWithTag } from "react-dom/test-utils";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SimposonsQuotes = () => {
  //API calls can be made to this url to get a random quote along with the character that said it and their image
  //https://thesimpsonsquoteapi.glitch.me/quotes

  const [imageDisplay, setImageDisplay] = useState(false);
  const [q, setQ] = useState();

  const getQuotes = async () => {
    const response = await fetch(
      "https://thesimpsonsquoteapi.glitch.me/quotes"
    );
    const quotes = await response.json();
    setQ(quotes);
  };

  useEffect(() => {
    getQuotes();
  }, []);

  const handleClick = () => {
    if (imageDisplay) {
      setImageDisplay(false);
    } else {
      setImageDisplay(true);
    }
  };
  return (
    <>
      <Container>
        <Row>
          <Col className="card-custom">
            {imageDisplay ? (
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" />
                <Card.Body>
                  {/* <Card.Text>{JSON.stringify(q)}</Card.Text> */}
                  <Card.Text>
                    {q ? q.map((e) => e.quote) : ""} -{" "}
                    <strong> {q ? q.map((e) => e.character) : ""}</strong>
                  </Card.Text>
                </Card.Body>
              </Card>
            ) : (
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={q ? q.map((e) => e.image) : ""} />
                <Card.Body>
                  <Card.Text>{q ? q.map((e) => e.character) : ""}</Card.Text>
                </Card.Body>
              </Card>
            )}
          </Col>
        </Row>
        <Button variant="primary" onClick={handleClick}>
          Click to change
        </Button>
      </Container>
    </>
  );
};

export default SimposonsQuotes;
