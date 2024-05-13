import { Children, ReactElement } from "react";

function renderElementChildren(children: any): ReactElement {
	return <>
		{Children.map(children, (child, i) => {
			return <>{child}</>;
		})}
	</>;
}

export { renderElementChildren }