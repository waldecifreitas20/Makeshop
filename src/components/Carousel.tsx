import React from "react";

interface CarouselProps {
    items: Array<any>;
}


export class Carousel extends React.Component {
    private key: string;
    private viewportWidth: number;

    public props: CarouselProps;

    public constructor(props: CarouselProps) {
        super(props);
        this.key = Math.random().toString();
        this.props = props;
        this.viewportWidth = -1;
    }

    public render() {

        window.addEventListener("resize", () => {
            this.updateCarouselItemsWidth();
        });

        return <>

            <div className="carousel flex justify-between px-5">
                <button className="" onClick={this.prev}>Voltar</button>

                <div id={`carousel-view-${this.key}`} className="relative flex overflow-hidden w-[95%]">
                    <ul id={`slider-${this.key}`} className="slider transition-all duration-700 flex">
                        {this.props.items.map((item, i) => {
                            return <>
                                <li className={`carousel-item-${this.key}`}>{item}</li>
                            </>
                        })}
                    </ul>
                </div>

                <button onClick={this.next}>Proxima</button>
            </div>
        </>;

    }

    public componentDidMount() {
        this.updateCarouselItemsWidth();
    }
    private updateCarouselItemsWidth() {
        const carouselViewPortWidth = document.getElementById(`carousel-view-${this.key}`)?.offsetWidth ?? -1;
        this.setItemsWidth(carouselViewPortWidth);
    }

    private setItemsWidth(width: number) {
        const items = document
            .getElementsByClassName(`carousel-item-${this.key}`) as HTMLCollectionOf<HTMLElement>;

        console.log(width);

        for (const item of items) {
            item.style.width = `${width}px`;
        }
    }

    private next() {

    }

    private prev() {

    }


}