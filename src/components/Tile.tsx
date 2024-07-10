import { PropsWithChildren, ReactElement } from "react";

interface TileProps {
  leading?: ReactElement;
  gap?: number;
}

export function Tile(props: PropsWithChildren<TileProps>) {
  return <>
    <div className="flex items-center size-full">
      {props.leading}
      <div className="flex flex-col items-start w-full" style={{ marginLeft: `${props.gap ?? 5}px` }}>
        {props.children}
      </div>
    </div>
  </>
}