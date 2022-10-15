import React from "react";
import "./styles.css";
import getLocaleDateString from "./helper_functions/getLocaleDateString";

interface ReleaseDateAndTitleProps {
  releaseDate: string;
  title: string;
}

export default function ReleaseDateAndTitle({
  releaseDate,
  title,
}: ReleaseDateAndTitleProps) {
  const formattedReleaseDateString = getLocaleDateString(releaseDate);

  return (
    <div>
      <h3>Released ∙ {formattedReleaseDateString}</h3>
      <div className="Title__Text">{title}</div>
    </div>
  );
}
