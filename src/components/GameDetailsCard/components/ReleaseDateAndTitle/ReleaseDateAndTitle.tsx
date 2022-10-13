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
      <label>Released ∙ {formattedReleaseDateString}</label>
      <h3 className="Title__Text">{title}</h3>
    </div>
  );
}
