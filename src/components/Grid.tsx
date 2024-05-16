import { Component, PropsWithChildren } from "react";

interface GridProps {
	style?: string;
	itemsByRow?: number;
	activeItems?: number;
}


export class Grid extends Component {
	public props: PropsWithChildren<GridProps>;

	private lastPosition: number;
	private maxItems: number;
	private items: Array<any>
	private activeItems: Array<any>;

	constructor(props: PropsWithChildren<GridProps>) {
		super(props);
		this.props = props;

		this.items = this.props.children as Array<any>;
		this.maxItems = this.items.length - 1;
		this.activeItems = this.initActiveItems(this.props.children);
		this.lastPosition = this.activeItems.length - 1;

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


	public nextRow() {
		while (true) {
			if (this.lastPosition + 1 > this.maxItems) {
				break;
			}
			this.lastPosition++;
			this.activeItems.push(this.items[this.lastPosition])
		}

		this.setState({});
	}

	public render(): React.ReactNode {
		return <>
			<div className={`${this.props.style ?? "grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-flow-row"}`}>
				{this.activeItems.map((child, i) => {
					return <span className="m-1">{child}</span>;
				})}
			</div>
			{this.activeItems.length < this.items.length ?
				<div className="flex justify-center mt-10">
					<button onClick={() => this.nextRow.bind(this).call(null)} className="border text-pink-500 border-pink-400 rounded-lg p-1 hover:shadow-md hover:shadow-pink-400 w-[150px] transition-all duration-200">Ver mais</button>
				</div>
				: <></>
			}
		</>;
	}
}