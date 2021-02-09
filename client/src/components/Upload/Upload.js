import React, { useState } from 'react';
import { uploadFeed } from '../../utils/placeFunction'
import { useHistory } from 'react-router-dom';
import { useAppContext } from '../../store';
import { useLoginCheck } from '../../utils/setAuthToken';
import Sidebar from '../Sidebar/Sidebar'



function Hello() {

    const [authState, appDispatch] = useAppContext();

    useLoginCheck(appDispatch);

    const history = useHistory();



    const [formState, setFormState] = useState({
        location: '',
        activity: '',
        picture: '',

    });

    const onChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(authState.user.first_name)
        if (formState.location && formState.activity && formState.picture) {
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
            <Sidebar />
            <div className="container">
                <h1>Hi! Welcome {authState.user.first_name} {authState.user.last_name}.
                Are you Ready To Tell Everyone About Your Adventure</h1>

                <div className="row">
                    <div className="mx-auto mt-5 col-md-6">
                        <form noValidate onSubmit={handleSubmit}>
                            <h1 className="mb-3 h3 font-weight normal">Upload Your Adventure</h1>
                            <div className="form-group">
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
                            <div className="form-group">
                                <label htmlFor="picture">picture</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="picture"
                                    placeholder="Enter picture"
                                    value={formState.picture}
                                    onChange={onChange}
                                />
                            </div>
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