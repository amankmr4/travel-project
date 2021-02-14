/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useAppContext } from '../../store';
import { useLoginCheck } from '../../utils/setAuthToken';
import Sidebar from '../Sidebar/Sidebar';
import { getplaces, deletePlace } from '../../utils/placeFunction'
import { Link } from "react-router-dom";
import { Image } from 'cloudinary-react'
import './style.css';
import { Button, Container, Row, Col, Card } from 'react-bootstrap'








const Profile = () => {
    const [authState, appDispatch] = useAppContext();
    const [places, setPlaces] = useState([])



    useLoginCheck(appDispatch);

    useEffect(() => {
        loadPlaces()
    }, [])

    const deleteItem = (hello) => {
        deletePlace(hello).then(() => {
            loadPlaces()
        })
    }


    function loadPlaces() {
        getplaces().then(res =>
            setPlaces(res))
    }

    const filteredData = places.filter(function (e) {
        return e.first_name === authState.user.first_name && e.last_name === authState.user.last_name
    })

    return (
        <Container fluid className="containerstyle">
            <div className="fullBody">
                <Row>
                    <Col sm={2}><Sidebar className="rounded mx-auto d-block"></Sidebar></Col>
                    <Col sm={8}>
                        <div className="col-sm-10 mainBody">
                            <div>

                                <div className="jumbotron" >
                                    <p className="display-4" id="intro">Hello, {authState.user.first_name} {authState.user.last_name}</p>
                                    <p className="lead text-center" id="desc">Here you will be able to see all your posts</p>

                                </div>
                                {filteredData.map(data => (
                                    <div id={data.key} className="cardout m-3 cardStyle">
                                        <Card className="text-center mt-4 ">
                                            <Card.Header>Posted by:{data.first_name} {data.last_name} </Card.Header>
                                            <Card.Body>
                                                <Image style={{ width: 200, height: 200 }} cloudName="akak94" publicId={data.picture} className="cardStyle" />
                                                <Card.Text className="mt-3">
                                                    <p>{data.activity}</p>
                                                    <p>{data.location}</p>
                                                    <Link to={"/books/" + data._id}>
                                                        <a>To see this post</a>
                                                    </Link>
                                                </Card.Text>
                                                <Button onClick={() => deleteItem(data._id)}>Delete your Post</Button>
                                            </Card.Body>
                                            <Card.Footer className="text-muted">Posted At: {data.date}</Card.Footer>
                                        </Card>
                                    </div>))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container >
    )


}

export default Profile;
