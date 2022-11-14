import React, { ReactElement } from "react";
import clsx from "clsx";

type RatingProps = {
  value: number;
};

const ratingScale = [1, 2, 3, 4, 5];

export function Rating({ value }: RatingProps): ReactElement {
  return (
    <div>
      <h3 className="hidden text-accent lg:block">Rating</h3>
      <div className="mt-1 flex">
        {ratingScale.map((ratingIndex) => {
          const className = clsx({
            "text-headerBg": true,
            "text-light": ratingIndex <= value,
          });

          return (
            <svg
              className={className}
              key={ratingIndex}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <title>Star {ratingIndex}</title>
              <g fill="none">
                <path d="M0 0L24 0 24 24 0 24z" />
                <path
                  fill="currentColor"
                  d="M18.18 21L16.545 13.971 22 9.244 14.809 8.627 12 2 9.191 8.627 2 9.244 7.455 13.971 5.82 21 12 17.272z"
                  opacity=".554"
                />
              </g>
            </svg>
          );
        })}
      </div>
    </div>
  );
}
