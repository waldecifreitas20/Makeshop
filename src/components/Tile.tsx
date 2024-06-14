import { PropsWithChildren, ReactElement } from "react";

interface TileProps {
  leading: ReactElement;
}

export function Tile(props: PropsWithChildren<TileProps>) {
  return <>
    <div className="flex items-center">
      {props.leading}
      <div className="flex flex-col items-start ml-1">
        {props.children}
      </div>
    </div>
  </>
}