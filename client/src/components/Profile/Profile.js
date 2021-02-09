/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useAppContext } from '../../store';
import { useLoginCheck } from '../../utils/setAuthToken';
import Sidebar from '../Sidebar/Sidebar';
import { getplaces, deletePlace } from '../../utils/placeFunction'
import { Link } from "react-router-dom";



const Profile = () => {
    const [authState, appDispatch] = useAppContext();
    const [places, setPlaces] = useState([])

    useLoginCheck(appDispatch);





    useEffect(() => {
        loadPlaces()
    }, [])

    const onClick = (event) => {
        event.preventDefault();
        console.log(filteredData)
    }


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
        <div className="pl-0 m-0 container-fluid">
            <Sidebar />
            <div className="flex-row-reverse mt-5 mr-5 d-flex">
                <div className="col-xs-12 col-sm-12 col-md-9 jumbotron jumbotron-fluid cardBackground">
                    <div className="mx-auto col-sm-8">
                        <h1 className="text-center">PROFILE</h1>
                    </div>
                    <table className="table mx-auto col-md-6">
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
                    <button onClick={onClick}>Console log</button>
                    {filteredData.map(data => (
                        <div id={data.key}>
                            <p>{data.first_name}  {data.last_name}</p>
                            <p>{data.location}</p>
                            <p>{data.picture}</p>
                            <p>{data.activity}</p>
                            <p>{data.date}</p>
                            <Link to={"/books/" + data._id}>
                                <p>hello</p>
                            </Link>
                            <button onClick={() => deleteItem(data._id)}>Delete</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Profile;
