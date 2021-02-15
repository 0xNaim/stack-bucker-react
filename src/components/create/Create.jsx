import plusIcon from "../../assets/icons/plus-icon.png";
import Suggestion from "../suggestion/Suggestion";
import FilterOverlay from "./FilterOverlay";

function Create({ placeholder, extra }) {
  return (
    <div className="section add-item __shadow--sm">
      <div className="add-item__relative">
        <div className="add-item__input">
          <img className="add-item__icon" src={plusIcon} alt={placeholder} />
          <input
            className="add-item__input-field"
            type="text"
            placeholder={placeholder}
          />
        </div>
        {/* Filter Overlay */}
        {extra && <FilterOverlay />}
      </div>
      <div className="horizontal-line"></div>
      {/* Suggestion */}
      {extra && <Suggestion />}
    </div>
  );
}

export default Create;
