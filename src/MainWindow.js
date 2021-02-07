import { useEffect, useState } from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import axios from 'axios'

import UserDetailCard from "./components/UserDetailCard.js"
import UserPostsCard from "./components/UserPostsCard.js";

export default function MainWindow() {
    const [data, setData] = useState({
        name: "",
        phone: "",
        company: "",
        address: "",
    })

    const [userID, setUserID] = useState(1)

    const userIDs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const capitaliseFirst = string => string.charAt(0).toUpperCase() + string.slice(1)
    const processPhone = input => input.split(" ")[0]
    const processCompany = input => {
        const processed = input.split(" ").map((string) => capitaliseFirst(string) + " · ").join("")
        return processed.slice(0, processed.length - 3)
    }
    const processAddress = input => {
        const street = input.street
        const suite = input.suite
        const city = input.city
        const zipcode = input.zipcode.split("-")[0]

        return `${street}, ${suite}, ${city} ${zipcode}`
    }

    useEffect(() => {
        const fetchData = () => {
            const url = `https://jsonplaceholder.typicode.com/users/${userID}`
        
            axios.get(url)
            .then(function (response) {
                const body = response.data

                console.log(body)

                const data = {
                    name: body.name,
                    phone: processPhone(body.phone),
                    company: processCompany(body.company.bs),
                    address: processAddress(body.address),
                }

                setData(data)
            })
            .catch(function (error) {
                console.log(error);
            })
        }

        fetchData()
    }, [userID])

    const handleSelect = eventKey => {
        setUserID(eventKey)
    }

    return (
        <Container className="main-container">
            <Row>
                <Col>
                    <Dropdown className="users-dropdown" onSelect={handleSelect}>
                        <Dropdown.Toggle>Selected user ID: {userID}</Dropdown.Toggle>

                        <Dropdown.Menu>
                            {userIDs.map((value, index) => {
                                return <Dropdown.Item eventKey={value}>{value}</Dropdown.Item>
                            })}
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
            <Row>
                <Col>
                    <UserDetailCard 
                        name={data.name}
                        phone={data.phone}
                        category={data.company}
                        address={data.address}
                    />
                </Col>
                <Col>
                    <UserPostsCard 
                        name={data.name}
                    />
                </Col>
            </Row>
        </Container>
    );
}