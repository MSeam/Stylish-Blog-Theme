import React from 'react';
import NavBar from '../component/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterestP,
  faVimeoV,
  faTumblr,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <div>
      <NavBar />
      <div>
        <div
          id="carouselExampleFade"
          classNameName="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://cheerup2.theme-sphere.com/bold/wp-content/uploads/sites/8/2016/05/beach_resort_with_sunbeds_in_asia-1-of-1-2-1536x1024.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://cheerup2.theme-sphere.com/bold/wp-content/uploads/sites/8/2016/05/photo-1470376619031-a6791e534bf0-1536x1024.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://wanderlustcrew.com/wp-content/uploads/2023/06/Switzerland-Itinerary-Zurich-1536x1024-1.jpeg"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* card design */}
      <div className="card-design">
        <div>
          <div className="first-card">
            <img
              src="https://cheerup2.theme-sphere.com/bold/wp-content/uploads/sites/8/2016/05/anthony-delanoix-226168-1-1536x1024.jpg"
              alt=""
            />
            <div className="card-details">
              <h5>LIFESTYLE</h5>
              <p>Mountain Snow Isn’t Holding Me Back This Time</p>
            </div>
          </div>
        </div>
        <div>
          <div className="first-card">
            <img
              src="https://cheerup2.theme-sphere.com/bold/wp-content/uploads/sites/8/2016/05/MKF_5387-1536x1025.jpg"
              alt=""
            />
            <div className="card-details">
              <h5>DIY</h5>
              <p>A Serene Place For Deep Thinkers</p>
            </div>
          </div>
        </div>
        <div>
          <div className="first-card">
            <img
              src="https://cheerup2.theme-sphere.com/bold/wp-content/uploads/sites/8/2016/05/interiejer_12-1536x1024.jpg"
              alt=""
            />
            <div className="card-details">
              <h5>TRAVEL</h5>
              <p>My Very Minimal Interior Design Ideas</p>
            </div>
          </div>
        </div>
      </div>
      {/* work-design */}
      <div className="work-design">
        <div className="work-design-one">
          <h5>
            <i>LIFESTYLE</i>
          </h5>
          <h1>A Look Inside The Work Abode</h1>
          <div className="time">
            <p>MAY 15 2016</p>
            <p>-</p>
            <p>4 COMMENTS</p>
          </div>
          <img
            src="https://cheerup2.theme-sphere.com/bold/wp-content/uploads/sites/8/2016/05/DSC2670-1536x1025.jpg"
            alt=""
          />
          <p>
            More off this less hello salamander lied porpoise much over tightly
            circa horse taped so innocuously outside crud mightily rigorous
            negative one inside gorilla and drew humbly shot tortoise inside
            opaquely. Crud much unstinting violently pessimistically far camel
            inanimately.
          </p>
          <p>
            Coquettish darn pernicious foresaw therefore much amongst
            lingeringly shed much due antagonistically alongside so then more
            and about turgid wrote so stunningly this that much slew.
          </p>
          <button className="btn">READ MORE</button>
          {/* vlogs-design */}
          <div className="vlogs-design">
            <div className="vlogs-first-part">
              <div className="vlogs-one">
                <img
                  src="https://cheerup2.theme-sphere.com/bold/wp-content/uploads/sites/8/2016/05/shutterstock_604112207-1170x780.jpg"
                  alt=""
                />
                <h5>
                  <i>LIFESTYLE</i>
                </h5>
                <h4>Newly Wed And Blissful Start of New Life</h4>
                <div className="time">
                  <p>MAY 15, 2016</p>
                  <p>-</p>
                  <p> 3 COMMENTS</p>
                </div>
                <p>
                  More off this less hello salamander lied porpoise much over
                  tightly circa horse taped so innocuously outside crud mightily
                  rigorous…
                </p>
                <button className="btn">READ MORE</button>
              </div>
              <div className="vlogs-two">
                <img
                  src="https://cheerup2.theme-sphere.com/bold/wp-content/uploads/sites/8/2016/05/shutterstock_458700517-scaled-1405x2048.jpg"
                  alt=""
                />
                <h5>
                  <i>LIFESTYLE</i>
                </h5>
                <h3>Newly Wed And Blissful Start of New Life</h3>
                <div className="time">
                  <p>MAY 15, 2016</p>
                  <p>-</p>
                  <p> 3 COMMENTS</p>
                </div>
                <p>
                  More off this less hello salamander lied porpoise much over
                  tightly circa horse taped so innocuously outside crud mightily
                  rigorous…
                </p>
                <button className="btn">READ MORE</button>
              </div>
              <div className="vlogs-three">
                <img
                  src="https://cheerup2.theme-sphere.com/bold/wp-content/uploads/sites/8/2016/05/shutterstock_312902963-768x512.jpg"
                  alt=""
                />
                <h5>
                  <i>LIFESTYLE</i>
                </h5>
                <h3>Newly Wed And Blissful Start of New Life</h3>
                <div className="time">
                  <p>MAY 15, 2016</p>
                  <p>-</p>
                  <p> 3 COMMENTS</p>
                </div>
                <p>
                  More off this less hello salamander lied porpoise much over
                  tightly circa horse taped so innocuously outside crud mightily
                  rigorous…
                </p>
                <button className="btn">READ MORE</button>
              </div>
            </div>
            <div className="vlogs-second-part">
              <div className="vlogs-four">
                <img
                  src="https://cheerup2.theme-sphere.com/bold/wp-content/uploads/sites/8/2016/05/shutterstock_350435249-1170x1170.jpg"
                  alt=""
                />
                <h5>
                  <i>LIFESTYLE</i>
                </h5>
                <h3>Newly Wed And Blissful Start of New Life</h3>
                <div className="time">
                  <p>MAY 15, 2016</p>
                  <p>-</p>
                  <p> 3 COMMENTS</p>
                </div>
                <p>
                  More off this less hello salamander lied porpoise much over
                  tightly circa horse taped so innocuously outside crud mightily
                  rigorous…
                </p>
                <button className="btn">READ MORE</button>
              </div>
              <div className="vlogs-five">
                <img
                  src="https://cheerup2.theme-sphere.com/bold/wp-content/uploads/sites/8/2016/05/shutterstock_550905352-1-768x512.jpg"
                  alt=""
                />
                <h5 className="mt-4">
                  <i>LIFESTYLE</i>
                </h5>
                <h3>Newly Wed And Blissful Start of New Life</h3>
                <div className="time">
                  <p>MAY 15, 2016</p>
                  <p>-</p>
                  <p> 3 COMMENTS</p>
                </div>
                <p>
                  More off this less hello salamander lied porpoise much over
                  tightly circa horse taped so innocuously outside crud mightily
                  rigorous…
                </p>
                <button className="btn">READ MORE</button>
              </div>
              <div className="vlogs-six">
                <img
                  src="https://cheerup2.theme-sphere.com/bold/wp-content/uploads/sites/8/2016/05/shutterstock_551057164-1-scaled-1366x2048.jpg"
                  alt=""
                />
                <h5 cl mt-4>
                  <i>LIFESTYLE</i>
                </h5>
                <h3>Newly Wed And Blissful Start of New Life</h3>
                <div className="time">
                  <p>MAY 15, 2016</p>
                  <p>-</p>
                  <p> 3 COMMENTS</p>
                </div>
                <p>
                  More off this less hello salamander lied porpoise much over
                  tightly circa horse taped so innocuously outside crud mightily
                  rigorous…
                </p>
                <button className="btn">READ MORE</button>
              </div>
            </div>
          </div>
        </div>
        <div className="work-design-two">
          <div className="first-box">
            <div>
              <h5>LIFESTYLE</h5>
              <h4>The Only Real Fix For All My DIY Needs</h4>
              <p>MAY 14, 2016</p>
            </div>
          </div>
          <img
            src="https://cheerup2.theme-sphere.com/bold/wp-content/uploads/sites/8/2016/05/shutterstock_437021746-1170x780.jpg"
            alt=""
            width="100%"
            height="400px"
          />
          <div className="second-box mt-5">
            <div className="first-card">
              <img
                src="https://cheerup2.theme-sphere.com/bold/wp-content/uploads/sites/8/2017/07/about-side.jpg"
                alt=""
              />
              <div className="card-details">
                <p>
                  I'm Shane, a girly girl and lover of life. Join me on the
                  journey to find latest in fashion.
                </p>
                <button className="btn">READ MORE</button>
              </div>
            </div>
          </div>
          <div class="newsletter-container">
            <h2>Newsletter</h2>
            <hr class="underline" />
            <p>
              Subscribe to our newsletter for exclusive content and all of the
              behind the scenes details.
            </p>
            <form action="#" method="post">
              <input type="email" placeholder="Your email address.." required />
              <button type="submit">SUBSCRIBE</button>
            </form>
          </div>
          {/* image grid */}
          <div className="mb-5 mt-5">
            <h2>Instagram</h2>
            <div class="image-grid">
              <div class="grid-item">
                <img
                  src="https://cheerup2.theme-sphere.com/wp-content/uploads/2021/05/insta-file-1621255444.92951519098.jpg"
                  alt="Image 1"
                />
              </div>
              <div class="grid-item">
                <img
                  src="https://cheerup2.theme-sphere.com/wp-content/uploads/2021/05/insta-file-1621255450.76888982068.jpg"
                  alt="Image 2"
                />
              </div>
              <div class="grid-item">
                <img
                  src="https://cheerup2.theme-sphere.com/wp-content/uploads/2021/05/insta-file-1621255456.8295102022.jpg"
                  alt="Image 3"
                />
              </div>
              <div class="grid-item">
                <img
                  src="https://cheerup2.theme-sphere.com/wp-content/uploads/2021/05/insta-file-1621255463.15073361595.jpg"
                  alt="Image 4"
                />
              </div>
              <div class="grid-item">
                <img
                  src="https://cheerup2.theme-sphere.com/wp-content/uploads/2021/05/insta-file-1621255463.15073361595.jpg"
                  alt="Image 5"
                />
              </div>
              <div class="grid-item">
                <img
                  src="https://cheerup2.theme-sphere.com/wp-content/uploads/2021/05/insta-file-1621255473.3093308617.jpg"
                  alt="Image 6"
                />
              </div>
            </div>
          </div>
          {/* latest-post */}
          <div className="latest-post">
            <h2 className="mb-5">Latest Posts</h2>
            <div className="d-flex mb-3">
              <img
                src="https://cheerup2.theme-sphere.com/bold/wp-content/uploads/sites/8/2016/05/DSC2670-1536x1025.jpg"
                alt=""
                width="150px"
              />
              <div>
                <h5 className="text-start ps-3">
                  A Look Inside The Work Abode
                </h5>
                <p className="text-start ps-3">MAY 15, 2016</p>
              </div>
            </div>
            <div className="d-flex mb-4">
              <img
                src="https://cheerup2.theme-sphere.com/bold/wp-content/uploads/sites/8/2016/05/shutterstock_604112207-1170x780.jpg"
                alt=""
                width="150px"
              />
              <div>
                <h5 className="text-start ps-3">
                  Newly Wed And Blissful Start of New Life
                </h5>
                <p className="text-start ps-3">MAY 15, 2016</p>
              </div>
            </div>
            <div className="d-flex mb-4">
              <div className="latest-post-img">
                <img
                  src="https://cheerup2.theme-sphere.com/bold/wp-content/uploads/sites/8/2016/05/shutterstock_350435249-1170x1170.jpg"
                  alt=""
                />
              </div>
              <div>
                <h5 className="text-start ps-3">
                  Latest Style Ideas For Men in Fashion
                </h5>
                <p className="text-start ps-3">MAY 15, 2016</p>
              </div>
            </div>
            <div className="d-flex mb-4">
              <div className="latest-post-img-two">
                <img
                  src="https://cheerup2.theme-sphere.com/bold/wp-content/uploads/sites/8/2016/05/shutterstock_458700517-scaled-1405x2048.jpg"
                  alt=""
                />
              </div>
              <div>
                <h5 className="text-start ps-3">
                  Clean And Colorful is in Vogue
                </h5>
                <p className="text-start ps-3">MAY 15, 2016</p>
              </div>
            </div>
          </div>
          {/* Categories */}
          <h2 className="mt-5 mb-5">Categories</h2>
          <div className="categories-container">
            <ul className="categories-list">
              <li className="category-item">
                <span className="category-name">DIY</span>
                <span className="category-count">(8)</span>
              </li>
              <li className="category-item">
                <span className="category-name">Fashion</span>
                <span className="category-count">(9)</span>
              </li>
              <li className="category-item">
                <span className="category-name">Lifestyle</span>
                <span className="category-count">(15)</span>
              </li>
              <li className="category-item">
                <span className="category-name">Travel</span>
                <span className="category-count">(8)</span>
              </li>
            </ul>
          </div>
          {/* SocialIcons */}
          <h2 className="mt-5 mb-5">Connect & Follow</h2>
          <div className="social-container">
            <div className="social-icons">
              <a href="#" className="social-link">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="social-link">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="social-link">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="social-link">
                <FontAwesomeIcon icon={faPinterestP} />
              </a>
              <a href="#" className="social-link">
                <FontAwesomeIcon icon={faVimeoV} />
              </a>
              <a href="#" className="social-link">
                <FontAwesomeIcon icon={faTumblr} />
              </a>
              <a href="#" className="social-link">
                <FontAwesomeIcon icon={faTiktok} />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* footer first part */}
      <div className="layout pt-5">
        {/* About Section */}
        <div className="about">
          <h3 className="text-start mt-4 mb-5">About</h3>
          <img
            src="https://cheerup2.theme-sphere.com/bold/wp-content/uploads/sites/8/2017/07/about-footer.jpg"
            alt="About"
            className="about-image"
          />
          <p className="mt-5">
            Sed ut in perspiciatis unde omnis iste natus error sit on i tatem
            accusantium doloremque laudan totam rem aperiam eaque.
          </p>
        </div>
        {/* Posts Section */}
        {/* Popular Posts */}
        <div>
          <h3 className="text-start mt-4 mb-5">Popular Posts</h3>
          <div className="d-flex mb-5">
            <img
              src="https://cheerup2.theme-sphere.com/bold/wp-content/uploads/sites/8/2016/05/anthony-delanoix-226168-1-1536x1024.jpg"
              alt=""
              width="150px"
            />
            <div>
              <h5 className="text-start ps-3">
                Mountain Snow Isn’t Holding Me Back This Time
              </h5>
              <p className="text-start ps-3">MAY 15, 2016</p>
            </div>
          </div>
          <div className="d-flex mb-5">
            <img
              src="https://cheerup2.theme-sphere.com/bold/wp-content/uploads/sites/8/2016/05/shutterstock_398822470-1536x1024.jpg"
              alt=""
              width="150px"
            />
            <div>
              <h5 className="text-start ps-3">
                Driving Convertibles is a Fashion Statement
              </h5>
              <p className="text-start ps-3">MAY 15, 2016</p>
            </div>
          </div>
          <div className="d-flex mb-5">
            <img
              src="https://cheerup2.theme-sphere.com/bold/wp-content/uploads/sites/8/2016/05/photo-1470376619031-a6791e534bf0.jpg"
              alt=""
              width="150px"
            />
            <div>
              <h5 className="text-start ps-3">
                The Only Trend Emily Cares For is Getting Fit
              </h5>
              <p className="text-start ps-3">MAY 15, 2016</p>
            </div>
          </div>
        </div>
        {/* Latest Posts */}
        <div>
          <h3 className="text-start mt-4 mb-5">Latest Posts</h3>
          <div className="d-flex mb-5">
            <img
              src="https://cheerup2.theme-sphere.com/bold/wp-content/uploads/sites/8/2016/05/DSC2670-1536x1025.jpg"
              alt=""
              width="150px"
            />
            <div>
              <h5 className="text-start ps-3">A Look Inside The Work Abode</h5>
              <p className="text-start ps-3">MAY 15, 2016</p>
            </div>
          </div>
          <div className="d-flex mb-5">
            <img
              src="https://cheerup2.theme-sphere.com/bold/wp-content/uploads/sites/8/2016/05/MKF_5387-1536x1025.jpg"
              alt=""
              width="150px"
            />
            <div>
              <h5 className="text-start ps-3">
                A Serene Place For Deep Thinkers
              </h5>
              <p className="text-start ps-3">MAY 15, 2016</p>
            </div>
          </div>
          <div className="d-flex mb-5">
            <img
              src="https://cheerup2.theme-sphere.com/bold/wp-content/uploads/sites/8/2016/05/shutterstock_604112207-1170x780.jpg"
              alt=""
              width="150px"
            />
            <div>
              <h5 className="text-start ps-3">
                Newly Wed And Blissful Start of New Life
              </h5>
              <p className="text-start ps-3">MAY 15, 2016</p>
            </div>
          </div>
        </div>
      </div>
      {/* footer second part */}
      <div className="App">
        {/* Image Strip Section */}

        <div className="image-strip">
          <img
            src="https://cheerup2.theme-sphere.com/wp-content/uploads/2021/05/insta-file-1621255444.92951519098.jpg"
            alt=""
          />
          <img
            src="https://cheerup2.theme-sphere.com/wp-content/uploads/2021/05/insta-file-1621255450.76888982068.jpg"
            alt=""
          />
          <img
            src="https://cheerup2.theme-sphere.com/wp-content/uploads/2021/05/insta-file-1621255456.8295102022.jpg"
            alt=""
          />
          <img
            src="https://cheerup2.theme-sphere.com/wp-content/uploads/2021/05/insta-file-1621255463.15073361595.jpg"
            alt=""
          />
          <img
            src="https://cheerup2.theme-sphere.com/bold/wp-content/uploads/sites/8/2016/05/interiejer_12-1536x1024.jpg"
            alt=""
          />
        </div>

        {/* Footer Section */}

        {/* Social Media Icons */}

        <div className="social-media-container">
          <div className="social-media-icons d-flex gap-4">
            <a href="#" className="social-link">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="social-link">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="social-link">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="social-link">
              <FontAwesomeIcon icon={faPinterestP} />
            </a>
            <a href="#" className="social-link">
              <FontAwesomeIcon icon={faVimeoV} />
            </a>
            <a href="#" className="social-link">
              <FontAwesomeIcon icon={faTumblr} />
            </a>
            <a href="#" className="social-link">
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
const Footer = () => {
  return (
    <footer className="footer">
      {/* Navigation Links */}
      <nav className="footer-nav">
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">Lifestyle</a>
        <a href="#">Fashion</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Buy Theme</a>
      </nav>

      {/* Copyright Info */}
      <div className="footer-bottom">
        <p>© 2024 THEMESPHERE - ALL REGISTERED</p>
        <a href="#" className="back-to-top btn">
          ^ Top
        </a>
      </div>
    </footer>
  );
};

export default Home;
