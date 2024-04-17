import React from "react";

interface CarouselProps {
    items: Array<any>;
}


export class Carousel extends React.Component {
    private key: string;

    public props : CarouselProps;

    constructor(props: CarouselProps) {
        super(props);
        this.key = Math.random().toString();
        this.props = props;
    }

    render() {
        return <>

              <div className="carousel flex justify-between px-5">
                <button className="" onClick={this.prev}>Voltar</button>

                <div id={`carousel-view-${this.key}`} className="relative flex overflow-hidden w-[300px]">
                    <ul id={`slider-${this.key}`} className="slider transition-all duration-700 flex">
                       {this.props.items.map((item, i) => {
                        return <>
                            <li className="w-[300px]">{item}</li>
                        </>
                       })}
                    </ul>
                </div>

                <button onClick={this.next}>Proxima</button>
            </div> 
        </>;

    }

    componentDidMount() {
        const carouselView = document.getElementById(`carousel-view-${this.key}`);
        console.log(carouselView?.offsetWidth);
    }

    next() {

    }

    prev() {

    }


}