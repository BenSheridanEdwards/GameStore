import React, { ReactElement } from "react";
import "./styles.css";

type TagsProps = {
  tags: string[];
};

export function Tags({ tags }: TagsProps): ReactElement {
  return (
    <div>
      <h3>Tags</h3>
      <ul className="Tags__List">
        {tags.slice(0, 3).map((tag) => {
          return (
            <li className="Tags__Tag" key={tag}>
              {tag}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
