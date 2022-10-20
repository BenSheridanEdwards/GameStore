import React, { ReactElement } from "react";
import getLocaleDateString from "./helper_functions/getLocaleDateString";
import "./styles.css";

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
      <h3>Released ∙ {formattedReleaseDateString}</h3>
      <div className="Title__Text">{title}</div>
    </div>
  );
}
