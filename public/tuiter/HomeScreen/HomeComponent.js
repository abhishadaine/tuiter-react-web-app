/* eslint-env jquery */

const HomeComponent = (post) => {
    return(`
        <li class="list-group-item">
        <div class = "row ">
            <div class = "col-1">
            <img class="wd-image1" src=${post.avatar}/>    
            </div>
            <div class = "col-10">
                <div>
                    <h><strong>${post.name}</strong></h>
                    <i aria-hidden="true" class="fa fa-check-circle"></i>
                    <h class="text-muted">${post.handle} <h class="text-muted"> . ${post.time}</h></h>
                    </br>
                    <h>${post.title}</h>
                </div>
                <div class="wd-textandtitle">
                    <div>
                        <img src=${post.postImage} class="wd-bookmarkImage">
                    </div>
                    <div class="wd-textTitle">
                        ${post.postTitle}
                    </div>

                    <div class="text-muted">
                    ${post.postText}
                        </div>
                </div>
                <div class="wd-footer">
                    <a href="#"><i class="fa fa-comments" aria-hidden="true"><span> 45</span></i></a>
                    <a href="#"><i class="fa fa-retweet" aria-hidden="true"><span>  145</span></i></a>
                    <a href="#">
                        <i1 class="fa fa-heart" aria-hidden="true"><span class="wd-countRed">   245</span></i1>
                    </a>
                    <a href="#"><i class="fa fa-upload" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
    </li>
                
    `)
}
export default HomeComponent;