import React from "react";

const TuitStats = ({tuit}) => {
    return(
        <div className="wd-footer">
            <a href="#">
                <i className="fa fa-comments gray" aria-hidden="true"><span className= "gray">{tuit.replies}</span></i>
            </a>

            <a href="#">
                <i className="fa fa-retweet gray" aria-hidden="true"><span className= "gray"> {tuit.retuits}</span></i>
            </a>

            <a href="#">
                <i className= {tuit.liked === true ? "fa fa-heart red" : "fa fa-heart gray"} aria-hidden="true" ><span className= "gray">{tuit.likes}</span></i>
            </a>

            <a href="#">
                <i className="fa fa-upload gray" aria-hidden="true" ><span>   </span></i>
            </a>
        </div>
    )
}
export default TuitStats;