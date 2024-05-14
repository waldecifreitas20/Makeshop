import { Children, Component, PropsWithChildren } from "react";
import { renderElementChildren } from "../utils/childrenRenderer";

interface FlexboxProps {
    style?: string;
    itemsByRow?: number;
    rows?: number;
}


export class Flexbox extends Component {
    public props: PropsWithChildren<FlexboxProps>;

    private maxRows: number;
    private rowsActives: number;
    private rows: Array<any>;

    constructor(props: PropsWithChildren<FlexboxProps>) {
        super(props);
        this.props = props;
        this.rowsActives = 1;
        this.rows = this.initRows(this.props.children);
        this.maxRows = this.calculateMaxRow(this.props.children)

    }

    private initRows(items: any): Array<any> {
        let rows = [];

        for (let i = 0; i < items.length; i++) {
            if (i >= (this.props.itemsByRow ?? 5) || i >= items.length) {
                break;
            }
            rows.push(items[i])
        }
        return rows;
    }

    private calculateMaxRow(items: any) {
        let byRow = 5;
        console.log(items.length);

        return byRow;
    }

    private getRow(index: number, items: any) {
        let lastItem = items.length
    }

    public render(): React.ReactNode {
        return <>
            <div className={`${this.props.style ?? "grid grid-cols-5"}`}>
                {this.rows.map((child, i) => {
                    return <>{child}</>;
                })}
            </div>
            {this.rows.length < ((this.props.children as Array<any>).length ?? 0) ?
                <div className="flex justify-center mt-10">
                    <button className="border text-pink-500 border-pink-400 rounded-lg p-1 hover:shadow-md hover:shadow-pink-400 w-[150px] transition-all duration-200">Ver mais</button>
                </div>
                : <></>
            }
        </>;
    }
}