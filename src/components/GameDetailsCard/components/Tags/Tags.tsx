import React from "react";
import "./styles.css";

type TagsProps = {
  tags: string[];
};

const Tags = ({ tags }: TagsProps) => {
  return (
    <div className="Tags">
      <label>Tags</label>
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
};

export default Tags;
