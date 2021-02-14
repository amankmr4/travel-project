/* eslint-disable no-unused-vars */
import React from 'react';
import { Card } from 'react-bootstrap'
import { Image } from 'cloudinary-react'

export default function SimpleCard(props) {

    return (


        <Card className="text-center mt-4">
            <Card.Header>Posted by:{props.first_name} {props.last_name} </Card.Header>
            <Card.Body>
                <Image style={{ width: 200, height: 200 }} cloudName="akak94" publicId={props.picture} />
                <Card.Text>
                    <p>{props.activity}</p>
                    <p>{props.location}</p>
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">Posted On: {props.date}</Card.Footer>
        </Card>
    );
}
