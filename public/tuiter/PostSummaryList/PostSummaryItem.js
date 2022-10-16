/* eslint-env jquery */
const PostSummaryItem = (post) => {
    return (`
    <li class="list-group-item">
        <div class = "row ">
            <div class = "col-9">
                <div>
                    <h class="text-muted">${post.topic}</h>
                        </br>
                            <h><strong>${post.userName} <i aria-hidden="true" class="fa fa-check-circle"></i></strong> <h class="text-muted"> - ${post.time}</h></h>
                        </br>
                        <h><strong>${post.title}</strong></h>
                </div>
            </div>
            <div class = "col-2">
                <img class="wd-image" src=${post.image}/>
            </div>
        </div>
    </li>
    `)
}



export default PostSummaryItem