import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../reducers/profile-reducer";
import { useNavigate } from "react-router-dom";
import "../profile/index.css"

const EditProfileComponent = () => {
    const data = useSelector(state => state.profileInfo)
    const [name, setName] =useState(data.firstName + " " + data.lastName)
    const [bio, setBio] =useState(data.bio)
    const [location, setLocation] =useState(data.location)
    const [website, setWebsite] =useState(data.website)
    const [dateOfBirth, setDateOfBirth] =useState(data.dateOfBirth)

    let navigate = useNavigate();
    const dispatch = useDispatch();
    const closeHandler = () => {
        navigate("/tuiter/profile");
    }
    const saveClickHandler = () => {
        const updatedData = {name: name, bio: bio, location: location, website: website, dateOfBirth: dateOfBirth};
        dispatch(updateProfile(updatedData))
        navigate("/tuiter/profile");
    }

    return(
        <div className="border">
            <div className="row" >
                <div className="col-1 ">
                    <i className="fa-solid fa-xmark" aria-hidden="true" onClick={() => closeHandler()}></i>
                </div>
                <div className="col-8">
                    <h4>Edit Profile</h4>
                </div>
                <div className="col-2" style={{padding: "5px 0px"}}>
                    <button className="btn btn-dark rounded-pill" onClick={saveClickHandler}>Save</button>
                </div>
            </div>


            <div>
                <img src={data.bannerPicture}/>
            </div>

            <div className="row">

                <div className="col-3">
                    <img src={data.profilePicture} className="profileImage" style={{marginTop: "-50px", padding:"5px"}}/>
                </div>
            </div>

            <div className="container-fluid" >
                <label for="username">Name</label>
                <input className="form-control"
                       value={name} onChange={(event) => setName(event.target.value)}/>

                <label for="bio">Bio</label>
                <textarea className="form-control"
                          value={bio} onChange={(event) => setBio(event.target.value)}></textarea>

                <label for="location">Location</label>
                <input className="form-control"
                       value={location} onChange={(event) => setLocation(event.target.value)}/>

                <label for="website">Location</label>
                <input className="form-control"
                       value={website} onChange={(event) => setWebsite(event.target.value)}/>

                <label for="dob">Birth Date</label>
                <input className="form-control"
                       value={dateOfBirth} onChange={(event) => setDateOfBirth(event.target.value)}/>
            </div>
        </div>
    );
}

export default EditProfileComponent