import React, { ReactElement } from "react";
import getLocaleDateString from "@/utils/getLocaleDataString/getLocaleDateString";

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
      <h3 className="text-accent">Released ∙ {formattedReleaseDateString}</h3>
      <p className="mt-1">{title}</p>
    </div>
  );
}
