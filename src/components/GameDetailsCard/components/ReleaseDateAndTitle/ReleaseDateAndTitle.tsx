import React, { ReactElement } from "react";
import getLocaleDateString from "./helper_functions/getLocaleDateString";

interface ReleaseDateAndTitleProps {
  releaseDate: string;
  title: string;
}

export function ReleaseDateAndTitle({
  releaseDate,
  title,
}: ReleaseDateAndTitleProps): ReactElement {
  const formattedReleaseDateString = getLocaleDateString(releaseDate);

  return (
    <div>
      <h3 className="text-[#13F0AF]">
        Released ∙ {formattedReleaseDateString}
      </h3>
      <p className="mt-1">{title}</p>
    </div>
  );
}
