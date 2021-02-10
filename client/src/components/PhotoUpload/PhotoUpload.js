/* eslint-disable no-undef */
import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar'
import axios from 'axios'
import { Image } from 'cloudinary-react'
import { useHistory } from 'react-router-dom';

function UploadImage() {

    const [imageSelected, setImageSelected] = useState();

    const history = useHistory();

    const UploadImage = () => {
        const formData = new FormData()
        formData.append("file", imageSelected)
        formData.append("upload_preset", "byphwu58")

        axios.post("https://api.cloudinary.com/v1_1/akak94/image/upload", formData)
            .then((response) => {
                console.log(response.data.secure_url)
                // history.push('/profile')
            })
    }

    return <div style={{ marginLeft: "auto" }}>
        {/* <Sidebar /> */}
        <input
            type="file"
            className="form-control"
            name="location"
            placeholder="Enter location"
            onChange={(event) => {
                setImageSelected(event.target.files[0])
            }}
        />
        <button type="submit" onClick={UploadImage}>Hi</button>


    </div>
}

export default UploadImage