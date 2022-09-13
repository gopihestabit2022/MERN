import React, { useEffect } from 'react';

const Covid = () => {

    const covidData = async() => {
        const res = await fetch('https://api.covid19india.org/data.json', {mode:'cors'});
        console.log(res);
    }
    
    useEffect(() => {
        covidData();
    },[]);

    return (
        <>
        <div className="my-card">
            <div className="container">
                <div className="row" >
                    <div className="col-md-4">
                        <h4>Hello</h4>
                    </div>
                    <div className="col-md-4">
                        <h4>Hello</h4>
                    </div>
                    <div className="col-md-4">
                        <h4>Hello</h4>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Covid;