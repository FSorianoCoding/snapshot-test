import React from "react";
import Card from "react-bootstrap/Card";
import Yoshi from './Yoshi.jpg'

function GitHubCard () {
    return (
        <div className="card">
            <Card style={{ width: '18em' }}>
                <Card.Img variant="top" src={Yoshi} />
                <Card.Body>
                    <Card.Title>Fabian Soriano</Card.Title>
                    <Card.Text>
                        I am a student developer learning to code for the first time.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default GitHubCard