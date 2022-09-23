import "./searchItem.scss";
const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="siImg"
      />
      <div className="s-Desc">
        <h1 className="s-Title">Tower Street Apartments</h1>
        <span className="s-Distance">500m from center</span>
        <span className="s-TaxiOpt">Free Airport Taxi</span>
        <span className="s-Sub">Studio Apartment with Air conditioning</span>
        <span className="s-Features">
          Entire studio • 1 bathroom • 21m² 1 fulll bed
        </span>
        <span className="s-CancelOp">Free cancellation</span>
        <span className="s-CancelOptSub">
          You can cancel later, so lock in this great price today!
        </span>
      </div>

      <div className="s-Details">
        <div className="s-Rating">
          <span>Execellent</span>
          <button>8.9</button>
        </div>

        <div className="s-DetailsTexts">
          <span className="s-Price">$112</span>
          <span className="s-TaxOpt">Includes taxes and fees</span>
          <button className="s-CheckBtn">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
