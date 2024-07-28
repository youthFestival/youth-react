import React from "react";

import "../styles/poster-component.scss";
import { formatDay1, formatDay2 } from "../../../utils/util";

/**
 * 포스터 컴포넌트
 * @returns
 */

const PosterComponent = ({
  posterSrc,
  posterAlt,
  festivalTitle,
  festivalLocation,
  startDate,
  endDate,
  festivalOnclick,
  festivalOnchange,
  showFavoriteIcon = false,
}) => {
  return (
    <div className="postercomponent">
      <div className="form">
        <div className="contents">
          {showFavoriteIcon && (
            <img
              className="favorite"
              src="/icons/favorite.png"
              alt="찜 하트 아이콘"
            />
          )}

          <img className="image" src={posterSrc} alt={posterAlt} />

          <div className="span-container" onClick={festivalOnclick} onChange={festivalOnchange}>
            <span className="span1">{festivalTitle}</span>
            <span className="span2">{festivalLocation}</span>
            <span className="span2">{`${formatDay1(startDate)} ~ ${formatDay2(
              endDate
            )}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosterComponent;
