/* eslint-env jquery */
const WhoToFollowListItem = (who) => {
    return (`
    <li class="list-group-item ">
        <div class = "row">
            <div class = "col-2">
                <img class="wd-image1" src=${who.avatarIcon}/>
                    </div>
                        <div class = "col-7">
                            <div>
                                <h><strong>${who.userName} <i aria-hidden="true" class="fa fa-check-circle"></i></strong>
                                </h>
                                </br>
                                <h>@${who.handle}</h>
                            </div>
                        </div>
                        <div class = "col-2">
                            <button class="btn btn-primary change">
                                Follow
                            </button>
                        </div>
                    </div>
                </li>
    `)
}


export default WhoToFollowListItem