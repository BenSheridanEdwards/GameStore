import React from "react";
import clsx from "clsx";
import { ReactComponent as StarIcon } from "assets/icons/star.svg";

type RatingProps = {
  value: number;
};

const ratingScale = [1, 2, 3, 4, 5];

const Rating = ({ value }: RatingProps) => {
  return (
    <div className="Rating">
      <div className="Rating__Label">Rating</div>
      <div>
        {ratingScale.map((ratingIndex) => {
          const className = clsx({
            RatingStar: true,
            "RatingStar--active": ratingIndex <= value,
          });

          return <StarIcon className={className} />;
        })}
      </div>
    </div>
  );
};

export default Rating;
