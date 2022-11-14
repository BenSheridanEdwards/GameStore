import React, { ReactElement } from "react";

type TagsProps = {
  tags: string[];
};

export function Tags({ tags }: TagsProps): ReactElement {
  return (
    <div>
      <h3 className="text-accent">Tags</h3>
      <ul className="mt-1 flex flex-wrap">
        {tags.slice(0, 3).map((tag) => {
          return (
            <li
              className="mr-0.5 mb-0.5 rounded-2xl bg-bodyBg py-1 px-2 text-xs text-tinted"
              key={tag}
            >
              {tag}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
