import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import "./index.css";

const HomeComponent = () => {
    return (
        <>
            <li className="list-group-item">
                <div className="row ">
                    <div className="text-muted">
                        <i className="fa fa-retweet" aria-hidden="true"></i>
                        SpaceX retweeted
                    </div>
                    <div className="col-1">
                        <img className="wd-image1 p-2" src='../images/tesla.jpg'/>
                    </div>
                    <div className="col-10 p-2">

                        <div>
                            <h><strong>Elon Musk</strong></h>
                            <i aria-hidden="true" class="fa fa-check-circle"></i>
                            <h class="text-muted">elonmusk <h class="text-muted"> . 23h</h></h>
                        </div>
                        <h>Amazing show</h>
                        <div className="wd-textandtitle">
                            <div>
                                <img src='../images/teslabot.jpg' className="wd-bookmarkImage"/>
                            </div>
                            <div className="wd-textTitle p-2">
                                Countdown: Inspiration4 Mission to Space: Netflix Official Site
                            </div>

                            <div className="text-muted p-2">
                                Use the same NavigationSideBar component used earlier on the left side just like in the ExploreScreen from earlier.
                            </div>
                        </div>
                        <div className="wd-footer">
                            <a href="#"><i className="fa fa-comments gray" aria-hidden="true"><span> 45</span></i></a>
                            <a href="#"><i className="fa fa-retweet gray" aria-hidden="true"><span>  145</span></i></a>
                            <a href="#"><i className="fa fa-heart gray" aria-hidden="true" ><span>   245</span></i> </a>
                            <a href="#"><i className="fa fa-upload gray" aria-hidden="true" ><span>   </span></i> </a>
                        </div>
                    </div>
                </div>
            </li>

            <li className="list-group-item">
                <div className="row ">
                    <div className="col-1">
                        <img className="wd-image1 p-2" src='../images/tesla.jpg'/>
                    </div>
                    <div className="col-10 p-2">

                        <div>
                            <h><strong>Elon Musk</strong></h>
                            <i aria-hidden="true" className="fa fa-check-circle"></i>
                            <h className="text-muted">elonmusk <h className="text-muted"> . 23h</h></h>
                        </div>
                        <h>We might need to add new text here. Since this is a different type of post!</h>
                        <div className="wd-textandtitle">
                            <div className= "row">
                                <div className="col-1">
                                    <img className="wd-image1 p-2" src='../images/nasa.png'/>
                                </div>
                                <div className="col-10 p-2">
                                    <h><strong>NASA</strong></h>
                                    <i aria-hidden="true" className="fa fa-check-circle"></i>
                                    <h className="text-muted">nasa <h className="text-muted"> . 48h</h></h>
                                </div>
                            </div>
                            <div className="p-2">
                                Countdown: Inspiration4 Mission to Space: Netflix Official Site
                                Use the same NavigationSideBar component used earlier on the left side just like in the
                                ExploreScreen from earlier.
                            </div>
                        </div>
                        <div className="wd-footer">
                            <a href="#"><i className="fa fa-comments gray" aria-hidden="true"><span> 45</span></i></a>
                            <a href="#"><i className="fa fa-retweet gray" aria-hidden="true"><span>  145</span></i></a>
                            <a href="#"><i className="fa fa-heart gray" aria-hidden="true"><span>   245</span></i> </a>
                            <a href="#"><i className="fa fa-upload gray" aria-hidden="true"><span>   </span></i> </a>
                        </div>
                    </div>
                </div>
            </li>

        </>
    );
}

export default HomeComponent;