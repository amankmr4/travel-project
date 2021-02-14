/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { uploadFeed } from '../../utils/placeFunction'
import { useHistory } from 'react-router-dom';
import { useAppContext } from '../../store';
import { useLoginCheck } from '../../utils/setAuthToken';
import Sidebar from '../Sidebar/Sidebar'
import axios from 'axios'
import './style.css';



function Hello() {

    const [authState, appDispatch] = useAppContext();

    useLoginCheck(appDispatch);

    const history = useHistory();

    useEffect(() => {
        UploadImage()
    }, [])



    const [formState, setFormState] = useState({
        location: '',
        activity: '',
        picture: '',

    });

    const [imageSelected, setImageSelected] = useState();

    const onChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    }

    const UploadImage = () => {
        const formData = new FormData()
        formData.append("file", imageSelected)
        formData.append("upload_preset", "byphwu58")

        axios.post("https://api.cloudinary.com/v1_1/akak94/image/upload", formData)
            .then((response) => {
                setFormState({ ...formState, picture: response.data.secure_url })
                // history.push('/profile')
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        UploadImage();
        if (formState.location && formState.activity && formState.picture) {
            UploadImage();
            const placeData = {
                first_name: authState.user.first_name,
                last_name: authState.user.last_name,
                location: formState.location,
                activity: formState.activity,
                picture: formState.picture,
                date: new Date(Date.now())
            }
            uploadFeed(placeData).then(() => {
                history.push('/profile');
            });

        }
    }

    return (
        <div>

            <div className="container-fluid">


                <div className="row">
                    <div className="col-sm-2 body">
                        <Sidebar />
                    </div>
                    <div className="col-sm-10">
                        <h1>Hi! Welcome {authState.user.first_name} {authState.user.last_name}.
                Are you Ready To Tell Everyone About Your Adventure</h1>
                        <form noValidate onSubmit={handleSubmit} className="subForm">
                            <h1 className="mb-3 h3 font-weight normal">Upload Your Adventure</h1>
                            <div className="form-group mb-3">
                                <label htmlFor="location">Location</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="location"
                                    placeholder="Enter location"
                                    value={formState.location}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="activity">Activity</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="activity"
                                    placeholder="Enter activity"
                                    value={formState.activity}
                                    onChange={onChange}
                                />
                            </div>
                            <input
                                type="file"
                                className="form-control mb-3"
                                name="location"
                                placeholder="Enter location"
                                onChange={(event) => {
                                    setImageSelected(event.target.files[0])
                                }}
                            />
                            <button type="submit" className="btn btn-lg btn-primary btn-block">
                                Ready To Share
                        </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Hello;