import { Component, PropsWithChildren } from "react";
import { renderElementChildren } from "../utils/react";

interface FlexboxProps {
    style?: string;
}


export class Flexbox extends Component {
    public props: PropsWithChildren<FlexboxProps>;

    constructor(props: PropsWithChildren<FlexboxProps>) {
        super(props);
        this.props = props;
    }

    public render(): React.ReactNode {
        return <>
            <div className={`${this.props.style ?? "flex justify-center gap-2 flex-wrap"}`}>
                    {renderElementChildren(this.props.children)}
            
            </div>
        </>;
    }
}