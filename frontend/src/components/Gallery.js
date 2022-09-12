import React, {useEffect, useState, useRef} from 'react';

import './birds.css'

function Gallery(){

    const [gallery, setGallery] = useState([]) 

    useEffect(() => {
        fetch("http://127.0.0.1:9292/sightings", {crossDomain:true,})
        
        .then((res) => res.json())
        .then((data) =>{
            console.log(data)
            setGallery(data);
        });
    }, []);

    
    return(
        <>
            <div className="gallery-container ">
                {gallery.map((sighting) => (
                    <div
                        className="row "
                        style={{ marginBottom: "3em", marginTop: "3em" }}
                    >
                        <div className="col-md-5 ">
                            <div className="card flexx" style={{ width:"500px" }}>
                            <img
                                src={sighting.bird_image}
                                className="card-img-top img-fluid"
                                alt="..."
                            // style={{ width: "100%" }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">Bird ID:{sighting.birds_id}</h5>
                                <h5 className="card-title">Name:{sighting.bird_name}</h5>
                                <h5 className="card-title">Date Seen:{ sighting.date_of_sighting}</h5>
                                <p className="card-text">Sighting Location: {sighting.location_of_sighting}</p>
                                <p className="card-text">Sighting Observation: {sighting.observation}</p>
                            </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* <div className="bird-container ">
                {birds.map((bird) => (
                    <div
                        className="row "
                        style={{ marginBottom: "3em", marginTop: "3em" }}
                        key={bird.id}
                    >
                        <div className="col-md-5 ">

                            <div className="card flexx" style={{ width:"500px" }}>
                            <img
                                src={bird.image}
                                className="card-img-top img-fluid"
                                alt="..."
                            // style={{ width: "100%" }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">Name:{bird.name}</h5>
                                <h5 className="card-title">Primary Color:{bird.primary_color}</h5>
                                <p className="card-text">Beak Type: {bird.beak}</p>
                                <p className="card-text">Feet Type: {bird.feet_type}</p>

                                <p className="card-text">{bird.flies}</p>
                                <button type="submit" className="btn btn-primary mb-3" onClick = {() =>{sighted(bird.id)}}
                        >
                            Seen This Bird? Click to Upload
                        </button>
                            </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div> */}

        </>
    );
}
export default Gallery;