import { Card, Container } from "react-bootstrap"
import topImage from "../resources/image.jpg"
import phoneLogo from "../resources/icon-24-phone.svg"
import shopLogo from "../resources/icon-24-shop.svg"
import categoryLogo from "../resources/category.png"

import UserDetailRow from "./UserDetailRow.js"

export default function UserDetailCard(props) {
    return (
        <Card>
            <Card.Img variant="top" src={topImage}/>
            <Card.Body>
                <Card.Title className="main-card-title">{props.name}</Card.Title>
                <Container>
                    <UserDetailRow logo={phoneLogo} text={props.phone}></UserDetailRow>
                    <UserDetailRow logo={categoryLogo} text={props.category}></UserDetailRow>
                    <UserDetailRow logo={shopLogo} text={props.address}></UserDetailRow>
                </Container>
            </Card.Body>
        </Card>
    );
}