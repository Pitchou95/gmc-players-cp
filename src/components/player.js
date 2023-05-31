import React from "react";
import Card from "react-bootstrap/Card";

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <Card style={{ width: "25em" }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body style={{ textAlign: "center" }}>
        <Card.Title>{`${name}-${age} years`}</Card.Title>
        <Card.Text style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <p style={{ fontSize: 35 }}>{jerseyNumber}</p>
          <p style={{ color: "gray" }}>{team}</p>
          <p style={{ fontSize: 10, textDecoration: "underline" }}>{nationality}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;
