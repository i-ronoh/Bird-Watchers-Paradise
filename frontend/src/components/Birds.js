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

        <div className="blog-container ">
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
                        <h5 className="card-title">{bird.name}</h5>
                        <h5 className="card-title">{bird.primary_color}</h5>
                        <h5 className="card-text">{bird.beak}</h5>
                        <h5 className="card-text">{bird.flies}</h5>

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