import React, { ReactElement, ReactNode } from "react";
import "./styles.css";

interface GameDetailsCardWrapperProps {
  artworkUrl: string;
  children: ReactNode;
  id: string;
  title: string;
}

export function GameDetailsCardWrapper({
  artworkUrl,
  children,
  id,
  title,
}: GameDetailsCardWrapperProps): ReactElement {
  return (
    <div id={id} className="Card" data-testid={`GameDetailsCard-${id}`}>
      <img className="Card__Artwork" src={artworkUrl} alt={title} />
      <div className="Card__Content">{children}</div>
    </div>
  );
}
