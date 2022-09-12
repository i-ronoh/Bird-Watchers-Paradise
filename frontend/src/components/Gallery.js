import React, {useEffect, useState, useRef} from 'react';
import moment from 'moment';


import './gallery.css'

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

            <div className="birds-head">
                <h3 className="birds-title">SIGHTINGS</h3>
            </div>


            <div className="gallery-container">
                {gallery.map((sighting) => (
                    <div
                        className="row "
                        style={{ marginBottom: "1em", marginTop: "1em" }}
                    >
                        <div className="col-md-4 ">
                            <div className="gallery-card gallery-flexx" style={{ width:"1150px" }}>
                            <img
                                src={sighting.bird_image}
                                className="gallery-card-img-top img-fluid"
                                alt="..."
                            // style={{ width: "100%" }}
                            />
                            <div className="gallery-card-body">
                                <h5 className="gallery-card-title">Bird ID:{sighting.birds_id}</h5>
                                <h5 className="gallery-card-title">Name:{sighting.bird_name}</h5>
                                <h5 className="gallery-card-title">Date Seen:{ moment(sighting.date_of_sighting).format("DD/MM/YYYY")}</h5>
                                <p className="gallery-card-text">Sighting Location: {sighting.location_of_sighting}</p>
                                <p className="gallery-card-text">Sighting Observation: {sighting.observation}</p>
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