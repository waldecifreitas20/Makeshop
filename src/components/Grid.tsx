import { Component, PropsWithChildren } from "react";
import { renderElementChildren } from "../utils/react";

interface GridProps {
    columns?: number;
    rows?: number;

}


export class Grid extends Component {
    public props: PropsWithChildren<GridProps>;

    constructor(props: PropsWithChildren<GridProps>) {
        super(props);
        this.props = props;
    }

    public render(): React.ReactNode {
        return <>
            <div className="flex justify-center gap-2 flex-wrap">
                    {renderElementChildren(this.props.children)}
            
            </div>
        </>;
    }
}