import React, { ReactNode } from "react";
import "./styles.css";

interface GameDetailsCardWrapperProps {
  artworkUrl: string;
  children: ReactNode;
  id: string;
  title: string;
}

export default function GameDetailsCardWrapper({
  artworkUrl,
  children,
  id,
  title,
}: GameDetailsCardWrapperProps) {
  return (
    <div id={id} className="Card">
      <img className="Card__Artwork" src={artworkUrl} alt={title} />
      <div className="Card__Content">{children}</div>
    </div>
  );
}
