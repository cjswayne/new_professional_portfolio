import fitMyFootPic from '../assets/images/fitmyfoot.com_.jpg'
import reptiChipPic from '../assets/images/reptichip.com_blogs_animals_tagged_tortoises_level=2&parent=reptiles&handle=tortoises.png'
import rushFeePic from '../assets/images/www.getmytransfers.com_cart.png'
import assAnonPic from '../assets/images/assaholicsanonymous.org_pages_welcome-tiktok.jpg'
import reptiChipCart from '../assets/images/reptichip.com_cart.png'




function Portfolio(){
    return (
        <>
        <div className="flex flex-column mA w-80">
              <h1 class="tc">Portfolio</h1>
            <div className="portfolioContainer flex flex-wrap">
            <div class="flex row wrap project">
                <div class="project-card whole-width">
                    <a href="https://reptichip.com/blogs/animals">
                    <div class="image-wrap">
                        {/* <img src="./assets/images/reptichip.com_blogs_animals_tagged_tortoises_level=2&parent=reptiles&handle=tortoises.jpg" alt="The landing page for animal navigation on reptichip.com"><img/> */}
                    <img src={reptiChipPic} alt="The landing page for animal navigation on reptichip.com"></img>
                    
                    </div>
                    <div class="project-card-text has-padding-left has-padding-right">
                        <h2>Animal Blog Navigation</h2>
                        <a href="https://reptichip.com/blogs/animals">reptichip.com</a>
                        <p>html - css - javascript - liquid</p>
                    </div>
                </a>
                </div>
                <div class="project-card half-width">
                    <a href="https://fitmyfoot.com/">
                    <div class="image-wrap">
                        <img src={fitMyFootPic} alt="The homepage of fitmyfoot.com"></img>
                    </div>
                    <div class="project-card-text has-padding-left has-padding-right">
                        <h3>Homepage Section</h3>
                        <a href="https://fitmyfoot.com/">fitmyfoot.com</a>
                        <p>html - css - javascript - liquid</p>
                    </div>
                    </a>
                </div>
                <div class="project-card half-width">
                    <a href="https://www.getmytransfers.com/cart">
                    <div class="image-wrap">
                        {/* <img src="./assets/images/www.getmytransfers.com_cart.png" alt="The cart page of getmytransfers.com"><img/> */}
<img src={rushFeePic} alt="The cart page of getmytransfers.com"></img>

                    </div>
                    <div class="project-card-text has-padding-left has-padding-right">
                        <h3>Variable Rush Fee</h3>
                        <a href="https://www.getmytransfers.com/cart">getmytransfers.com</a>
                        <p>html - css - javascript - liquid</p>
                    </div>
                    </a>
                </div>
                <div class="project-card half-width">
                    <a href="https://reptichip.com/cart">
                    <div class="image-wrap">
                        {/* <img src="./assets/images/reptichip.com_cart.png" alt="The cart page of reptichip.com"><img/> */}
                        <img src={reptiChipCart}  alt="The cart page of reptichip.com"></img>
                    </div>
                    <div class="project-card-text has-padding-left has-padding-right">
                        <h3>Cross Sell Section</h3>
                        <a href="https://reptichip.com/cart">reptichip.com</a>
                        <p>html - css - javascript - liquid</p>
                    </div>
                    </a>
                </div>
                <div class="project-card half-width">
                    <a href="https://assaholicsanonymous.org/pages/welcome-tiktok">
                    <div class="image-wrap">
                        <img src={assAnonPic}  alt="The Tiktok landing page for assaholicsanonymous.com"></img>
                    </div>
                    <div class="project-card-text has-padding-left has-padding-right">
                        <h3>Tiktok Landing Page</h3>
                        <a href="https://assaholicsanonymous.org/pages/welcome-tiktok">assaholicsanonymous.org</a>
                        <p>html - css - javascript - liquid</p>
                    </div>
                    </a>
                </div>
            </div>

            </div>
            </div>
        </>
    )
}

export default Portfolio