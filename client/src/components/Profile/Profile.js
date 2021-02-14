/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useAppContext } from '../../store';
import { useLoginCheck } from '../../utils/setAuthToken';
import Sidebar from '../Sidebar/Sidebar';
import { getplaces, deletePlace } from '../../utils/placeFunction'
import { Link } from "react-router-dom";
import { Image } from 'cloudinary-react'
import { makeStyles } from "@material-ui/core/styles"
import './style.css';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { Button, Container, Row, Col } from 'react-bootstrap'




const useStyles = makeStyles((theme) => ({
    grid: {
        width: '100%',
        height: '100%',
        background: theme.palette.success.light,
        marginBottom: "auto",
    },
    root: {
        minWidth: 275,
        margin: 5,
        textAlign: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
}))



const Profile = () => {
    const [authState, appDispatch] = useAppContext();
    const [places, setPlaces] = useState([])
    const classes = useStyles();


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
        <Container fluid>
            <Row>
                <Col sm={3}><Sidebar className="body"></Sidebar></Col>
                <Col sm={9}>
                    <div className="col-sm-10 mainBody">
                        <div>

                            <div className="jumbotron" >
                                <p className="display-4" id="intro">Hello, {authState.user.first_name} {authState.user.last_name}</p>
                                <p className="lead text-center" id="desc">Here you will be able to see all your posts</p>

                            </div>
                            {filteredData.map(data => (
                                <div id={data.key} className="cardout m-3">
                                    <Card className={classes.root}>
                                        <CardContent className={classes.cardStyle}>
                                            <Typography variant="h5" component="h2">
                                                {data.location}
                                            </Typography>
                                            <Typography className={classes.pos} color="textSecondary">
                                                <Image style={{ width: 200, height: 200 }} cloudName="akak94" publicId={data.picture} />
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                {data.activity}
                                                <br />

                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                {data.date}
                                                <br />

                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                <Link to={"/books/" + data._id}>
                                                    <a>To see this post</a>
                                                </Link>
                                                <br />
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                <Button className="m-5" onClick={() => deleteItem(data._id)}>Delete</Button>
                                                <br />
                                            </Typography>
                                        </CardContent>

                                    </Card>
                                </div>))}
                        </div>
                    </div>
                </Col>
            </Row>
        </Container >
    )


}

export default Profile;
