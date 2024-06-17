import { Component, PropsWithChildren } from "react";
import { utils } from "../utils/utils";

interface GridProps {
	style?: string;
	itemsByRow?: number;
	activeItems?: number;
}

interface GridState {
	showButton: boolean;
}

export class Grid extends Component {
	public props: PropsWithChildren<GridProps>;

	private maxItems: number;
	private items: Array<any>
	private activeItems: Array<any>;

	public state: Readonly<GridState>;
	constructor(props: PropsWithChildren<GridProps>) {
		super(props);
		this.props = props;

		this.items = this.props.children as Array<any>;
		this.maxItems = this.items.length - 1;
		this.activeItems = this.initActiveItems(this.props.children);

		this.state = {
			showButton: this.activeItems.length < this.items.length,
		}
	}

	private initActiveItems(items: any): Array<any> {
		let activeItems = [];

		for (let i = 0; i < items.length; i++) {
			if (i >= (this.props.itemsByRow ?? 5) || i >= items.length) {
				break;
			}
			activeItems.push(items[i])
		}
		return activeItems;
	}


	public nextRow(): void {
		if (this.activeItems.length + 5 < this.maxItems) {
			this.activeItems = utils.getSubArray(this.items, 0, this.activeItems.length + 5);
			this.setState({});
		} else {
			this.activeItems = this.items;
			this.setState({ showButton: false });
		}
	}

	public render(): React.ReactNode {
		return <>
			<div className={`${this.props.style ?? "w-[95%] mx-auto grid gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-flow-row"}`}>
				{this.activeItems.map((child, i) => {
					return <span className="m-1">{child}</span>;
				})}
			</div>
			{this.state.showButton ?
				<div className="flex justify-center mt-10">
					<button onClick={() => this.nextRow.bind(this).call(null)} className="border text-pink-500 border-pink-400 rounded-lg p-1 hover:shadow-md hover:shadow-pink-400 w-[150px] transition-all duration-200">Ver mais</button>
				</div>
				: <></>
			}
		</>;
	}
}