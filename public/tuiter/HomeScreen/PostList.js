/* eslint-env jquery */
import HomeComponent from "./HomeComponent.js";
import PostItem from "./PostItem.js";

const PostList = () => {
    return(`
      <ul class="list-group">
        ${
        PostItem.map(post => {
            return(HomeComponent(post));
        }).join('')
    }
      </ul>
   `);
}

export default PostList;
