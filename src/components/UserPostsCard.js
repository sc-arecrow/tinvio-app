import { useEffect, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import axios from 'axios'

import UserPostCard from "./UserPostCard.js"

export default function UserPostsCard(props) {
    const [data, setData] = useState({
        posts: []
    })

    useEffect(() => {
        const fetchData = () => {
            const url = "https://jsonplaceholder.typicode.com/posts"
        
            axios.get(url, {
                params: {
                    userId: 1
                }
            })
            .then(function (response) {
                const body = response.data

                console.log(body)

                const data = {
                    posts: body
                }

                setData(data)
            })
            .catch(function (error) {
                console.log(error);
            })
        }

        fetchData()
    }, [])

    return (
        <Card>
            <Card.Body>
                <Card.Title className="main-card-title">{props.name}'s Posts</Card.Title>
                <Card.Subtitle className="posts-count">{data.posts.length} POSTS</Card.Subtitle>
                <ListGroup className="posts-list" variant="flush">
                    {data.posts.map((value, index) => {
                        return <ListGroup.Item className="post-card" key={index}>
                            <UserPostCard 
                                title={value.title}
                                body={value.body}
                            />
                        </ListGroup.Item>
                    })}
                </ListGroup>
            </Card.Body>
        </Card>
    );
}