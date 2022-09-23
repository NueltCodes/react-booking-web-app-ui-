import "./featured.scss";
const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitle">
          <h1>Dublin</h1>
          <h2>327 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://q-xx.bstatic.com/xdata/images/xphoto/533x300/71365537.jpg?k=aab55a712d088602738a94f84e75bcf9954b5b6208343eef1e9f2f2a2a75b75e&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitle">
          <h1>Reno</h1>
          <h2>111 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max300/246550034.webp?k=3115317dcde022055cdd67dc8fbbd5ca3240e90d0d23cef6cd571bcc3fb515c9&o="
          alt="come out"
          className="featuredImg"
        />
        <div className="featuredTitle">
          <h1>Austin</h1>
          <h2>241 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
