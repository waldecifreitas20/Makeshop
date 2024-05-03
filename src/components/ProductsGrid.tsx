import React from "react";

interface GridProps {
    items : any;
    rows: number;
    columns: number;
}


export class Grid extends React.Component{

    constructor(props: GridProps) {
        super(props);
    }

    public render(): React.ReactNode {
        return <>
            <h1>Hellooooo</h1>
        </>
    }
}