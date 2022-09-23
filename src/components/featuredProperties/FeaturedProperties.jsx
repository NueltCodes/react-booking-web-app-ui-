import "./featuredProperties.scss";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItems">
        <div className="fpItem">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
            alt=""
            className="fpImg"
          />

          <span className="fpName">Apartment Stare Miasto</span>

          <span className="fpCity">Madrid</span>

          <span className="fpPrice">Starting from $120</span>

          <div className="fpRatings">
            <button>8.7</button>
            <span>Execellent</span>
          </div>
        </div>

        <div className="fpItem">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
            alt=""
            className="fpImg"
          />

          <span className="fpName">Comfort Suites Airport</span>

          <span className="fpCity">Austin</span>

          <span className="fpPrice">Starting from $190</span>

          <div className="fpRatings">
            <button>9.1</button>
            <span>Exceptional</span>
          </div>
        </div>

        <div className="fpItem">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
            alt=""
            className="fpImg"
          />

          <span className="fpName">Huston Garden Inn</span>

          <span className="fpCity">Berlin</span>

          <span className="fpPrice">Starting from $105</span>

          <div className="fpRatings">
            <button>8.9</button>
            <span>Execellent</span>
          </div>
        </div>

        <div className="fpItem">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
            alt=""
            className="fpImg"
          />

          <span className="fpName">Four Seasons Hotel</span>

          <span className="fpCity">Lisbon</span>

          <span className="fpPrice">Starting from $99</span>

          <div className="fpRatings">
            <button>8.5</button>
            <span>Execellent</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
