/* eslint-disable no-unused-vars */
import React from 'react';
import { Card } from 'react-bootstrap'
import { Image } from 'cloudinary-react'

export default function SimpleCard(props) {

    return (


        <Card className="text-center mt-4 cardTxt">
            <Card.Header>Posted by:{props.first_name} {props.last_name} </Card.Header>
            <Card.Body>
                <Image style={{ width: 200, height: 200 }} cloudName="akak94" publicId={props.picture} className="cardStyle" />
                <Card.Text className="mt-3">
                    <p>Activity: {props.activity}</p>
                    <p>Location: {props.location}</p>
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">Posted On: {props.date}</Card.Footer>
        </Card>
    );
}
