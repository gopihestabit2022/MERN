import React from 'react';
import { useState } from 'react';




var fname= null;
var email = null;
const Form = () => {
    const [formValue, setFormValue] = useState({
        fname : '',
        email: '' ,
        fullName: ''           
    });

    const formSubmit = (e) => {
        e.preventDefault();

        setFormValue((prev) => {
            return {
                ...prev,
                fullName: prev.fname +  ' ' + prev.email
            }

        });

    }

    const changeValue = (e) => {
        //const attr = e.target.name;
        const {name, value} = e.target;
        setFormValue((prev) => {
            // if (attr == 'name') {
            //     return {
            //         fname : e.target.value,
            //         email : prev.email,
            //         fullName: prev.fullName 
            //     }
            // }
            // else if (attr == 'email') {
            //     return {
            //         fname : prev.fname,
            //         email : e.target.value,
            //         fullName: prev.fullName 
            //     }
            // }
            return {
                ...prev,
                [name] : value
            }
        });
    }

    return (
        <>
            <div className="row">
                <form id="form" onSubmit={formSubmit}>
                    <h1>Contact Us {`${formValue.fname}  ${formValue.email}`} </h1>
                    <p>{formValue.fullName}</p>
                    <div className="form-group">
                        <label>Your Name</label>
                        <input name="fname" id="name" className="form-control" value={formValue.fname} onChange={changeValue}/>
                    </div>
                    <div className="form-group">
                        <label>Your Email</label>
                        <input name="email" id="email" className="form-control" value={formValue.email} onChange={changeValue}/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary" name="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Form;