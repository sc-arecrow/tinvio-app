import { Card } from "react-bootstrap";

export default function UserPostCard(props) {
    return (
        <Card>
            <Card.Body>
                <Card.Title className="post-title">{props.title}</Card.Title>
                <Card.Subtitle className="post-body">{props.body}</Card.Subtitle>
            </Card.Body>
        </Card>
    );
}