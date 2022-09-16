import React, { useEffect, useState } from 'react';

const Covid = () => {

    const [data, setData] = useState([]);

    const covidData = async() => {
        const res = await fetch('https://api.covid19india.org/data.json', {mode:'cors'});
        const data = await res.json();
        console.log(data.statewise[0]);
        setData(data.statewise[0]);
    }
    
    useEffect(() => {
        covidData();
    },[]);

    return (
        <>
        <div className="my-card">
            <div className="container">
                <div className="row" >
                    <h1>Covid Cases Active !!!</h1>
                    <div className="col-md-4">
                        <div className="inner-card">
                            <h4>My Country</h4>
                            <p>India</p>
                         </div>   
                    </div>
                    <div className="col-md-4">
                        <div className="inner-card">
                            <h4>Active Case</h4>
                            <p>{data.active}</p>
                        </div>  
                    </div>
                    <div className="col-md-4">
                        <div className="inner-card">
                            <h4>Confirmed Case</h4>
                            <p>{data.confirmed}</p>
                        </div>  
                    </div>
                    <div className="col-md-4">
                        <div className="inner-card">
                            <h4>Total Death</h4>
                            <p>{data.recovered}</p>
                        </div>  
                    </div>
                    <div className="col-md-4">
                        <div className="inner-card">
                            <h4>Total Death</h4>
                            <p>{data.deaths}</p>
                        </div>  
                    </div>
                    <div className="col-md-4">
                        <div className="inner-card">
                            <h4>Last Updated</h4>
                            <p>{data.lastupdatedtime}</p>
                        </div>  
                    </div>

                </div>
            </div>
        </div>
        </>
    );
}

export default Covid;