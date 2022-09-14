import React, {useEffect, useState, useRef} from 'react';
import { useNavigate } from 'react-router-dom';

import './birds.css'

function Birds(){
    const [birds, setBirds] = useState([]);
    const [name, setName] = useState();
    const [primaryColor, setPrimaryColor] = useState();
    const [feetType, setFeetType] = useState();
    const [beakType, setBeakType] = useState();
    const [flies, setFlies] = useState();

    useEffect(() => {
        fetch("http://127.0.0.1:9292/birds", {crossDomain:true,})
        
        .then((res) => res.json())
        .then((data) =>{
            setBirds(data);
        });
    }, []);

    const inputNameRef = useRef(null);
    const inputPrimaryColorRef = useRef(null);

    const feetTypes = [
        "Perching", "Webbed", "Gripping", "Clinging", "Perched"
    ]

    const beaks = [
        "long-pointed", "short", "curved", "conical", "Hooked", "Long-pointed", "Conical",
        "Curved", "Conical", "Sickle-shaped", "long-pointed", "Large", "Coned"
    ]

    const onFilterChange = (e)=>{
        let {name, value} = e.target;
        switch(name){
            case "name":
                setName(value);
                break;
            case "primary_color":
                setPrimaryColor(value);
                break;
            case "feet_type":
                setFeetType(value);
                break;
            case "beak":
                setBeakType(value);
                break;
            case "flies":
                setFlies(value);
                break;
            default:
                break;

        }
    }

    const search = ()=>{
        let url = "http://127.0.0.1:9292/birds";
        if(name || primaryColor || feetType || beakType || flies){
            url = url + "?";
        }else{
            // it wont search if any  the filters are not defined
            return
        }

        // checks if param exists, then checks if param is the only filter, or used in combination with another param filter
        if( name !== undefined) {
            url = url + ( url.indexOf("=") > -1 ? `&name=${name}`: `name=${name}` );
        }

        if(primaryColor !== undefined ) {
            url = url + ( url.indexOf("=") > -1 ? `&primary_color=${primaryColor}`: `primary_color=${primaryColor}` );
        }

        if(feetType !== undefined){
            url = url + ( url.indexOf("=") > -1 ? `&feet_type=${feetType}`: `feet_type=${feetType}` );
        }

        if(beakType !== undefined){
            url = url + ( url.indexOf("=") > -1 ? `&beak=${beakType}`: `beak=${beakType}`);
        }

        if(flies !== undefined){
            url = url + ( url.indexOf("=") > -1 ? `&flies=${flies}`: `flies=${flies}`);
        }

        console.log("***********url***********");
        console.log(url);
        console.log("***********url***********");

        fetch(url, {crossDomain:true,})
            .then((res) => res.json())
            .then((data) =>{
                console.log(data);
                setBirds(data);
            });
    }

    const clearSearch = ()=>{
        setName();
        setPrimaryColor();
        setFeetType();
        setBeakType();
        setFlies();
        inputNameRef.current.value = '';
        inputPrimaryColorRef.current.value = '';
        fetch("http://127.0.0.1:9292/birds", {crossDomain:true,})
            .then((res) => res.json())
            .then((data) =>{
                setBirds(data);
            });
    }

    const navigate = useNavigate();

    const sighted = (birdie)=>{
        navigate(`/sightings/${birdie}`)
    };

    return(
        <>
            <div className="birds-head">
                <h3 className="birds-title">BIRDS DATABASE</h3>
            </div>

            <div className="filter">
                {/* name */}
                <div>
                    Name: 
                    <input type="text" name="name" placeholder="name of bird" onChange={(e)=> onFilterChange(e, "name")}
                        ref={inputNameRef}
                    />
                </div>
                
                {/* primary color */}
                <div>
                    Primary Color: 
                    <input type="text" name="primary_color" placeholder="primary color" onChange={(e)=> onFilterChange(e, "primary_color")}
                        ref={inputPrimaryColorRef}
                    />
                </div>
                {/* feet types */}
                <div>
                    Feet Type:
                    <select onChange={(e)=> onFilterChange(e, "feet_type")} name="feet_type">
                         <option disabled selected value> -- Select Feet Type-- </option>
                         {/* <option value="Human Feet" selected> Human Feet </option> */}
                        {
                            feetTypes.map((feetType, index)=>(
                                <option value={feetType} key={index}>
                                    {feetType}
                                </option>
                            ))    
                        }
                    </select>
                </div>
                {/* beaks */}
                <div>
                    Beak Type:
                    <select onChange={(e)=> onFilterChange(e, "beak")} name="beak">
                        <option disabled selected value> -- Select Beak Type- </option>
                        {
                            beaks.map((beak, index)=>(
                                <option value={beak} key={index}>
                                    {beak}
                                </option>
                            ))    
                        }
                    </select>
                </div>
                {/* flies */}
                <div>
                    Flies: 
                    <select onChange={(e)=> onFilterChange(e, "flies")} name="flies">
                        <option disabled selected value> -- Does the Bird Fly?-- </option>
                        <option value={true}>
                            Yes
                        </option>
                        <option value={false}>
                            No
                        </option>
                    </select>
                </div>
            </div>
                {/* Search */}
                
            <div className="search-filter">
                <div>
                    <button onClick={search}> 
                        Search
                    </button>
                </div>
                {/* Clear Search */}
                <div>
                    <button onClick={clearSearch}> 
                        Clear Search
                    </button>
                </div> 
            </div>      
               

            <div className="bird-container ">
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
                                    <button type="submit" className="birds-btn btn-primary mb-5" onClick = {() =>{sighted(bird.id)}}
                                    > Seen This Bird? <br/>Click to Upload
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>

        </>
    );
}
export default Birds;