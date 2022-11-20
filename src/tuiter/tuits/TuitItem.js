import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import TuitStats from "./TuitStats";
import "../home/index.css"
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";
import {deleteTuitThunk} from "../../services/tuits-thunks";


const  TuitItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        // dispatch(deleteTuit(id));
        dispatch(deleteTuitThunk(id));
    }
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-1">
                    <img className="wd-image1 p-2" src={tuit.image}/>
                </div>

                <div className="col-10 p-2">
                    <div>
                        <h><strong>     {tuit.userName}     </strong></h>
                        <i aria-hidden="true" className="fa fa-check-circle"></i>
                        <h className="text-muted">    {tuit.handle} <h className="text-muted"> . {tuit.time}</h></h>
                    </div>
                    <div className="text-muted ">
                            {tuit.tuit}
                    </div>
                    <TuitStats tuit={tuit}/>
                </div>
                <div>
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(tuit._id)}></i>
                </div>
            </div>

        </li>
    )
}
export default TuitItem;