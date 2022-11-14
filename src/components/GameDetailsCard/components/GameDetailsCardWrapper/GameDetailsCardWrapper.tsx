import React, { ReactElement, ReactNode } from "react";
import Image from "next/image";

interface GameDetailsCardWrapperProps {
  artworkUrl: string;
  children: ReactNode;
  id: string;
  title: string;
  isMobileCard?: boolean;
}

export function GameDetailsCardWrapper({
  artworkUrl,
  children,
  id,
  title,
  isMobileCard,
}: GameDetailsCardWrapperProps): ReactElement {
  return (
    <article
      id={id}
      className={
        isMobileCard
          ? "relative flex flex-row-reverse justify-between rounded-2xl bg-cardBg text-light lg:hidden lg:h-[120px] lg:flex-row"
          : "relative hidden flex-row-reverse justify-between rounded-2xl bg-cardBg text-light lg:flex lg:h-[120px] lg:flex-row"
      }
      data-testid={`GameDetailsCard-${id}`}
    >
      <Image
        className="absolute h-[120px] w-[120px] rounded-tr-2xl lg:relative lg:rounded-l-2xl lg:rounded-tr-none"
        height={120}
        width={120}
        src={artworkUrl}
        alt={title}
      />
      <div className="flex w-full flex-col gap-2 py-4 px-4 lg:grid lg:auto-cols-fr lg:grid-flow-col lg:items-center lg:justify-items-center lg:gap-4 lg:px-4 lg:py-2">
        {children}
      </div>
    </article>
  );
}

GameDetailsCardWrapper.defaultProp = {
  isMobileCard: false,
};
