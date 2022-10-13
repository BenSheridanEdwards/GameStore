import React from "react";

type TagsProps = {
  tags: string[];
};

const Tags = ({ tags }: TagsProps) => {
  return (
    <div className="Tags">
      <div className="Tags__Label">Tags</div>
      <div>
        {tags.slice(0, 3).map((tag) => {
          return (
            <div className="Tags__Tag" key={tag}>
              {tag}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tags;
