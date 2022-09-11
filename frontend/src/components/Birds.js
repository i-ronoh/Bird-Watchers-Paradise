import React, {useEffect, useState} from 'react';
import './birds.css'

function Birds(){
    const [birds, setBirds] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:9292/birds", {crossDomain:true,})
        
        .then((res) => res.json())
        .then((data) =>{
            console.log(data);
            setBirds(data);
        });
    }, []);

return(
    <>
        <div className="birds-head">
            <h3 className="birds-title">THE BIRDS</h3>
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