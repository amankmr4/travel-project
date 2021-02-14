/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useAppContext } from '../../store';
import { useLoginCheck } from '../../utils/setAuthToken';
import Sidebar from '../Sidebar/Sidebar';
import { getplaces, deletePlace } from '../../utils/placeFunction'
import { Link } from "react-router-dom";
import { Image } from 'cloudinary-react'
import { Grid, Paper } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"



const useStyles = makeStyles(() => ({
    grid: {
        width: '100%',
        margin: '0px'
    }
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
        <Grid container spacing={2} className={classes.grid} >
            <Grid item xs={2}>
                <Paper><Sidebar /></Paper>
            </Grid>
            <Grid item xs={8}>
                <Paper>
                    <div>
                        <div>


                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>First Name</td>
                                        <td>{authState.user.first_name}</td>
                                    </tr>
                                    <tr>
                                        <td>Last Name</td>
                                        <td>{authState.user.last_name}</td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td>{authState.user.email}</td>
                                    </tr>
                                </tbody>


                            </table>

                            {filteredData.map(data => (
                                <div id={data.key}>
                                    <p>{data.first_name}  {data.last_name}</p>
                                    <p>{data.location}</p>
                                    <Image style={{ width: 200, height: 200 }} cloudName="akak94" publicId={data.picture} />

                                    <p>{data.activity}</p>
                                    <p>{data.date}</p>
                                    <Link to={"/books/" + data._id}>
                                        <p>hello</p>
                                    </Link>
                                    <button onClick={() => deleteItem(data._id)}>Delete</button>
                                </div>))}
                        </div>
                    </div>

                </Paper>
            </Grid>
        </Grid >
    )


}

export default Profile;
