const NavigationSidebar = (activeParameter) => {
    return (`
            <div class="list-group">
                <li class="list-group-item ">
                    <div class = "row">
                        <div class = "col-1">
                            <i class="fa-brands fa-twitter"></i>
                        </div>
                        <div class = "col-2 d-none  d-xl-inline">
                        </div>
                    </div>
                </li>

                <li class="list-group-item ${activeParameter === 'Home' ? 'active' : ''}">
                    <div class = "row">
                        <div class = "col-1">
                            <i class="fa-solid fa-house-chimney"></i>
                        </div>
                        <div class = "col-2 d-none  d-xl-inline">
                            Home
                        </div>
                    </div>
                </li>

                <li class="list-group-item ${activeParameter === 'Explore' ? 'active' : ''}">
                    <div class = "row">
                        <div class = "col-1">
                            <i class="fa-solid fa-hashtag"></i>
                        </div>
                        <div class = "col-2 d-none  d-xl-inline">
                            Explore
                        </div>
                    </div>
                </li>

                <li class="list-group-item ${activeParameter === 'Notifications' ? 'active' : ''}">
                    <div class = "row">
                        <div class = "col-1">
                            <i class="fa-solid fa-bell"></i>
                        </div>
                        <div class = "col-2 d-none  d-xl-inline">
                            Notifications
                        </div>
                    </div>
                </li>

                <li class="list-group-item ${activeParameter === 'Messages' ? 'active' : ''}">
                    <div class = "row">
                        <div class = "col-1">
                            <i class="fa-solid fa-envelope"></i>
                        </div>
                        <div class = "col-2 d-none  d-xl-inline">
                            Messages
                        </div>
                    </div>
                </li>

                <li class="list-group-item ${activeParameter === 'Bookmarks' ? 'active' : ''}">
                    <div class = "row">
                        <div class = "col-1">
                            <i class="fa-solid fa-bookmark"></i>
                        </div>
                        <div class = "col-2 d-none  d-xl-inline">
                            Bookmarks
                        </div>
                    </div>
                </li>

                <li class="list-group-item ${activeParameter === 'Lists' ? 'active' : ''}">
                    <div class = "row">
                        <div class = "col-1">
                            <i class="fa-solid fa-list"></i>
                        </div>
                        <div class = "col-2 d-none  d-xl-inline">
                            Lists
                        </div>
                    </div>
                </li>

                <li class="list-group-item ${activeParameter === 'Profile' ? 'active' : ''}">
                    <div class = "row">
                        <div class = "col-1">
                            <i class="fa-solid fa-user"></i>
                        </div>
                        <div class = "col-2 d-none  d-xl-inline">
                            Profile
                        </div>
                    </div>
                </li>

                <li class="list-group-item ${activeParameter === 'More' ? 'active' : ''}">
                    <div class = "row">
                        <div class = "col-1">
                            <i class="fa-solid fa-circle-info"></i>
                        </div>
                        <div class = "col-2 d-none  d-xl-inline">
                            More
                        </div>
                    </div>
                </li>

                </br>
                <button class="btn btn-primary override-bs">
                    Tweet
                </button>
                <br/>
            </div>
 `);
}
export default NavigationSidebar;

