import React from "react";
import { updateTuitThunk } from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
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
                <i onClick={() => dispatch(updateTuitThunk({...tuit, likes: tuit.likes + 1}))} className = {tuit.liked === "true" ? "fa fa-heart" : "fa fa-heart-o"} aria-hidden="true" style={{"color": tuit.liked === "true" ? "red" : "black"}}><span className="m-2 wd-count" style={{"color":"black"}}>{tuit.likes}</span></i>

            </a>

            <a href="#">
                <i className="fa fa-upload gray" aria-hidden="true" ><span>   </span></i>
            </a>
        </div>
    )
}
export default TuitStats;