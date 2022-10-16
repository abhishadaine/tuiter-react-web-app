/* eslint-env jquery */
import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList  = () => {
    return(`
      <ul>
        ${
        who.map(item => {
            return(WhoToFollowListItem(item));
        }).join('')
    }
      </ul>
   `);
}
export default WhoToFollowList ;
