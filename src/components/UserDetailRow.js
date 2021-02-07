import { Row, Col, Image } from "react-bootstrap";

export default function UserDetailRow(props) {
    return (
        <Row className="detail-row">
            <Col xs={1}>
                <Image src={props.logo}></Image>
            </Col>
            <Col>
                {props.text}
            </Col>
        </Row>
    );
}