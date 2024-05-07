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
            <div className="flex justify-center xl:pl-24">
                <div className="flex flex-wrap md:gap-3 xl:gap-4 md:justify-center lg:justify-start">
                    {renderElementChildren(this.props.children)}
                </div>
            </div>
        </>;
    }
}