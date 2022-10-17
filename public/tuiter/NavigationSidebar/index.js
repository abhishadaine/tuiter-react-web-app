const NavigationSidebar = (activeParameter) => {
    return (`
            <div >
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
                    <a href="../HomeScreen/index.html">
                    <span>
                    <i class="fa-solid fa-house-chimney" style="color:white;"></i>
                    <span class="m-2 d-none d-xl-inline" style="color: white">Home</span>
                    </span>
                    </a>
                    </div>
                </li>

                

                <li class="list-group-item ${activeParameter === 'Explore' ? 'active' : ''}">
                    <div class = "row">
                    
                    <a href="../exploreScreen/index.html">
                    <span>
                    <i class="fa-solid fa-hashtag" style="color:white;"></i>
                    <span class="m-2 d-none d-xl-inline" style="color: white">Explore</span>
                    </span>
                    </a>
                  
                    </div>
                </li>

                <li class="list-group-item ${activeParameter === 'Notifications' ? 'active' : ''}">
                    <div class = "row">
                    <a href="../exploreScreen/index.html">
                    <span>
                    <i class="fa-solid fa-bell" style="color:white;"></i>
                    <span class="m-2 d-none d-xl-inline" style="color: white">Notifications</span>
                    </span>
                    </a>
                       
                    </div>
                </li>

                <li class="list-group-item ${activeParameter === 'Messages' ? 'active' : ''}">
                    <div class = "row">
                    
                     <a href="../exploreScreen/index.html">
                    <span>
                    <i class="fa-solid fa-envelope" style="color:white;"></i>
                    <span class="m-2 d-none d-xl-inline" style="color: white">Messages</span>
                    </span>
                    </a>
                        
                    </div>
                </li>

                <li class="list-group-item ${activeParameter === 'Bookmarks' ? 'active' : ''}">
                    <div class = "row">
                    <a href="../exploreScreen/index.html">
                    <span>
                    <i class="fa-solid fa-bookmark" style="color:white;"></i>
                    <span class="m-2 d-none d-xl-inline" style="color: white">Bookmarks</span>
                    </span>
                    </a>
                    
                    </div>
                </li>

                <li class="list-group-item ${activeParameter === 'Lists' ? 'active' : ''}">
                    <div class = "row">
                    <a href="../exploreScreen/index.html">
                    <span>
                    <i class="fa-solid fa-list" style="color:white;"></i>
                    <span class="m-2 d-none d-xl-inline" style="color: white">Lists</span>
                    </span>
                    </a>
                       
                    </div>
                </li>

                <li class="list-group-item ${activeParameter === 'Profile' ? 'active' : ''}">
                    <div class = "row">
                    <a href="../exploreScreen/index.html">
                    <span>
                    <i class="fa-solid fa-user" style="color:white;"></i>
                    <span class="m-2 d-none d-xl-inline" style="color: white">Profile</span>
                    </span>
                    </a>
                        
                    </div>
                </li>

                <li class="list-group-item ${activeParameter === 'More' ? 'active' : ''}">
                    <div class = "row">
                    <a href="../exploreScreen/index.html">
                    <span>
                    <i class="fa-solid fa-circle-info" style="color:white;"></i>
                    <span class="m-2 d-none d-xl-inline" style="color: white">More</span>
                    </span>
                    </a>
                        
                    </div>
                </li>
            </div >
            <button class="mt-2 btn btn-primary rounded-pill w-100">Tweet</button>
            
                
            </div>
 `);
}
export default NavigationSidebar;

