import axios from 'axios';


export const getplaces = () => {
    return axios.get('/api/place').then((res) => res.data);
};

export const uploadFeed = (placeData) => {

    return axios.post('/api/place', {
        first_name: placeData.first_name,
        last_name: placeData.last_name,
        location: placeData.location,
        activity: placeData.activity,
        picture: placeData.picture,
        date: placeData.date
    });
};

export const getUserUploads = (userData) => {
    console.log("Testing")
    return axios.get('/api/place' + userData);

}


export const deletePlace = (placeId) => {
    return axios
        .delete("/api/place/" + placeId, {
        })
        .then(response => {
            return response.data
        })
        .catch(err => {
            console.log(err);
        })
}