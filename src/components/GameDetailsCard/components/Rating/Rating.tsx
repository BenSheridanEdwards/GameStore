import React, { ReactElement } from "react";
import { ReactComponent as StarIcon } from "assets/icons/star.svg";
import clsx from "clsx";
import "./styles.css";

type RatingProps = {
  value: number;
};

const ratingScale = [1, 2, 3, 4, 5];

export function Rating({ value }: RatingProps): ReactElement {
  return (
    <div>
      <h3>Rating</h3>
      <div>
        {ratingScale.map((ratingIndex) => {
          const className = clsx({
            RatingStar: true,
            "RatingStar--active": ratingIndex <= value,
          });

          return <StarIcon className={className} key={ratingIndex} />;
        })}
      </div>
    </div>
  );
}
