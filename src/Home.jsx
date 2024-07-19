import React from "react";
import Card from "react-bootstrap/Card";
import "./Home.css";
import GirlImg from "./girlimg.jpeg";

function Home() {
  return (
    <>
      <div className="container">
        <p style={{ textAlign: "center" }}>i love colors</p>
      </div>
      <div
        className="card_container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          gap: "3rem",
          marginTop: "-10rem",
        }}
      >
        <Card
          style={{
            width: "18rem",

            height: "20rem",
            textAlign: "center",
            backgroundColor: "White",
            borderRadius: "10px",
          }}
        >
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "18rem",
            border: "0.5px solid grey",
            height: "20rem",
            textAlign: "center",
            backgroundColor: "White",
            borderRadius: "10px",
          }}
        >
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "18rem",
            border: "0.5px solid grey",
            height: "20rem",
            textAlign: "center",
            backgroundColor: "White",
            borderRadius: "10px",
          }}
        >
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Home;
