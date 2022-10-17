import PostSummaryList from "../PostSummaryList/index.js";


const ExploreComponent = () => {
    return(`
    <div>
    <!--search bar-->
    <div class="wd-input-wrapper ">
        <input aria-hidden="true" class="wd-input "id="input" placeholder="Search Twitter">
        <i class="m-2 position-absolute fa fa-search" aria-hidden="true" id="search-icon" style="color: rgb(110, 118, 125);"></i>
        <!-- settings gear -->
        <a href="explore-settings.html.html"><i aria-hidden="true" class="fa fa-cog" id = "settings-icon"></i></a>
    </div>
    <!--navigation links-->
    <div class = "p-2">
        <ul class="nav nav-tabs nav-fill">
            <li class="nav-item">
                <a class="nav-link active" href="#">For you</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Sports</a>
            </li>
            <li class="nav-item d-none d-md-inline d-xl-block">
                <a class="nav-link" href="#">Entertainment</a>
            </li>
        </ul>
    </div>
    <!-- image with overlaid text -->
    <div class="card ">
        <img alt="..." class="card-img" src="../../images/starship.jpg">
        <div class="card-img-overlay text-white d-flex align-items-end">
        <h1 class="card-subtitle">SpaceX's Starship</h1>
        </div>
    </div>
    ${PostSummaryList()}
</div>
                
    `);
}
export default ExploreComponent;
