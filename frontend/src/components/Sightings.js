import React, {useMemo, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import "./sightings.css"

const Sightings = () =>{
    const {birds_id} = useParams();

    const [sighting, setSighting] = useState({date_of_sighting: "",location_of_sighting: "", observation: "", birds_id: birds_id, user_id: 1});

    
    const navigate = useNavigate();

    const onFieldsChange = (fieldName, value)=>{
        setSighting({
            ...sighting,
            [fieldName]: value
        });
    }

    const postSighting = (e)=>{
        // sighting.date_of_sighting = "";
        // sighting.location_of_sighting = "";
        // sighting.observation = "";
        // sighting.birds_id = "";
        // sighting.user_id = "";
        console.log(sighting)
        let requestBody = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(sighting)
        }
        fetch("http://127.0.0.1:9292/sightings/upload", requestBody)
            .then(response => response.json())
            .then(data => {
                // do the redirect here here.
                navigate('/sightings');
            }).catch((err)=>{
                console.log(err);
            });
    }


    // returns whether the subit button should be active
    const submitButtonActive = useMemo(()=>(
        sighting.date_of_sighting.trim().length !== 0 && sighting.location_of_sighting.trim().length !== 0 
    ), [sighting]);

    return (
        <>
        <div className="sightings-head">
            <h3 className="sightings-title">UPLOAD SIGHTING</h3>
        </div>
        <div className="sightings-container">
            <div className="row" style={{marginTop: "5em"}}>
                <div className="col-md-9 shadow p-5 mb-5 bg-body rounded">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="sightings-form-label">Date :</label>
                        <input type="title" className="sightings-form-control" id="exampleFormControlInput1"
                            onChange = {(event)=>{
                                onFieldsChange("date_of_sighting", event.target.value)
                            }}
                        />

                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="sightings-form-label">Location :</label>
                        <input type="title" className="sightings-form-control" id="exampleFormControlInput1"
                            onChange = {(event)=>{
                                onFieldsChange("location_of_sighting", event.target.value)
                            }}
                        />
    
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="sightings-form-label">Observation :</label>
                        <textarea className="sightings-form-control" id="exampleFormControlTextarea1" rows="5"
                            onChange = {(event)=>{
                                onFieldsChange("observation", event.target.value)
                            }}
                        ></textarea>
                    </div>

                       
                    <div>
                        <button type="submit" className="sightings-btn btn-primary mb-3" 
                            onClick={postSighting}
                        >
                            SUBMIT
                        </button>
                    </div>
                </div>
             </div>
            </div>
        </div>
        </>
    )
}

export default Sightings
