import React, { useState, useEffect } from 'react';
import { getplaces } from '../../utils/placeFunction'
import './style.css';
import SimpleCard from '../FeedCards/Feedcards'

function DashboardNewsCard() {

    const [places, setPlaces] = useState([])

    useEffect(() => {
        loadPlaces()
    }, [])



    function loadPlaces() {
        getplaces().then(res =>
            setPlaces(res))
    }






    return (
        <div >
            {places.map(place => (
                <SimpleCard key={place.key} first_name={place.first_name} last_name={place.last_name} location={place.location} picture={place.picture} date={place.date} activity={place.activity} />
            ))}
        </div>
    );

}

export default DashboardNewsCard;
