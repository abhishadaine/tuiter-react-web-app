import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./index.css"

const ProfileComponent = () => {
    const user = useSelector(state => state.profileInfo )
    return(
        <div className="border margin-all-around">
            <div className= "row">
                <div className= "col-1 ">
                    <i className="fa fa-arrow-left" aria-hidden="true"></i>
                </div>
                <div className= "col-6">
                    <h4>Abhisha Daine</h4>
                    <span className= "text-muted">6,144 Tweets</span>
                </div>
            </div>

            <div>
                <img src={user.bannerPicture}/>
            </div>

            <div className="row">
                <div className="col-3">
                    <img className="profileImage" style={{marginTop: "-50px", padding:"5px"}} src={user.profilePicture} />
                </div>
                <div className="col-9 p-2">
                    <Link to="/tuiter/edit-profile">
                        <button className="btn btn-outline-secondary rounded-pill" style={{marginRight: "30px", float:"right"}}>
                            Edit Profile
                        </button>
                    </Link>

                </div>
            </div>
            <div className="container-fluid">
                <div>
                    <h3>{user.firstName + " " + user.lastName}</h3>
                    <p>{user.handle}</p>
                    <p>{user.bio}</p>
                </div>
                <div className="d-flex justify-content-between p-2" style={{color:"gray"}}>
                    <span>
                        <i class="fa fa-map-marker" aria-hidden="true" style={{marginRight:"10px"}}/>
                        {user.location}
                    </span>
                    <span>
                        <i class="fa fa-birthday-cake" aria-hidden="true" style={{marginRight:"10px"}}/>
                        {user.dateOfBirth}
                    </span>
                    <span><i class="fa fa-calendar" aria-hidden="true" style={{marginRight:"10px"}}/>
                        {user.dateJoined}
                    </span>
                </div>
                <div>
                    <span>
                        <span style={{fontWeight:"bold"}}>
                            {user.followingCount}
                        </span>
                        <span  style={{marginLeft:"5px"}}>
                            Following
                        </span>
                    </span>
                    <span style={{marginLeft:"15px"}}>
                        <span style={{fontWeight:"bold"}}>
                            {user.followersCount}
                        </span>
                        <span  style={{marginLeft:"5px"}}>
                            Followers
                        </span>
                    </span>
                </div>
            </div>
        </div>
    );
};
export default ProfileComponent;

