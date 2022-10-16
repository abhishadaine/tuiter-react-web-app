/* eslint-env jquery */
const WhoToFollowListItem = (who) => {
    return (`

    <li class="list-group-item ">
        <div class = "row">
            <div class = "col-3">
                <img class="wd-image1" src=${who.avatarIcon}/>
                    6</div>
                        <div class = "col-5">
                            <div>
                                <h><strong>${who.userName} <i aria-hidden="true" class="fa fa-check-circle"></i></strong>
                                </h>
                                </br>
                                <h>@${who.handle}</h>
                            </div>
                        </div>
                        <div class = "col-1">
                            <button class="btn btn-primary override-bs">
                                Follow
                            </button>
                        </div>
                    </div>
                </li>
    `)
}

$(WhoToFollowListItem);

export default WhoToFollowListItem