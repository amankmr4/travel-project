/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../components/Grid/Grid";
import Sidebar from '../Sidebar/Sidebar'
import { getUserUploads } from '../../utils/placeFunction'
import { Image } from 'cloudinary-react'

function Detail() {
    const [formState, setFormState] = useState({

    });
    const [dataForm, setDataForm] = useState({

    });

    // When this component mounts, grab the book with the _id of props.match.params.id
    // e.g. localhost:3000/books/599dcb67f0f16317844583fc
    const { id } = useParams()
    useEffect(() => {
        getUserUploads(id)
            .then(res => setFormState(res))
            .catch(err => console.log(err));
    }, [])


    const onChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState)
    }

    return (

        <Container fluid>
            <Sidebar />
            <div className="container">
                <h1>Hi! Welcome {formState.first_name} {formState.last_name}.
                Are you Ready To Tell Everyone About Your Adventure</h1>

                <div className="row">
                    <div className="mx-auto mt-5 col-md-6">
                        <form onSubmit={() => handleSubmit}>
                            <h1 className="mb-3 h3 font-weight normal">Upload Your Adventure</h1>
                            <div className="form-group">
                                <label htmlFor="location">Location</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="location"
                                    placeholder={formState.location}
                                    value=""
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
                            <div className="form-group">
                                <Image style={{ width: 200, height: 200 }} cloudName="akak94" publicId={formState.picture} />
                            </div>
                            <button type="submit" className="btn btn-lg btn-primary btn-block" onSubmit={() => handleSubmit}>
                                Ready To Share
                        </button>
                        </form>
                    </div>
                </div>
            </div>

        </Container>
    );
}


export default Detail;
