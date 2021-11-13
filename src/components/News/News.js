import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const News = (props) => {
    const { title, description, urlToImage, url } = props.nw;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={urlToImage} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {description}
                            <Button><a>{url}</a></Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default News;