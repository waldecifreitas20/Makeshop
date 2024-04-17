import React from "react";

interface CarouselProps {
    items: Array<any>;
}


export class Carousel extends React.Component {
    private key: string;
    private viewWidth: number;
    private index: number;
    private next;

    public props: CarouselProps;


    public constructor(props: CarouselProps) {
        super(props);
        this.key = (Math.random()).toString();
        this.props = props;
        this.index = 0;
        this.viewWidth = -1;


        this.next = () => {
           const ITEMS_QTD = this.props.items.length;
            
            this.index++;

            const SLIDER = this.getSlider();
            SLIDER.style.left = `-${this.viewWidth * this.index}px`;

        }
    }

    public render() {
        window.addEventListener("resize", () => {
            this.updateCarouselItemsWidth();
        });

        return <>

            <div id={`carousel-${this.key}`} className="flex justify-between px-5">
                <button className="" onClick={this.prev}>Voltar</button>

                <div id={`carousel-view-${this.key}`} className="relative flex overflow-hidden w-[90%]">
                    <ul id={`slider-${this.key}`} className="slider relative transition-all duration-700 flex">
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

        this.getSlider().style.left = '0px';
    }

    private updateCarouselItemsWidth() {
        const CAROUSEL_VIEW_WIDTH = document
            .getElementById(`carousel-view-${this.key}`)?.offsetWidth ?? -1;

        const CAROUSEL_ITEMS = document
            .getElementsByClassName(`carousel-item-${this.key}`) as HTMLCollectionOf<HTMLElement>;

        this.viewWidth = CAROUSEL_VIEW_WIDTH;
        for (const ITEM of CAROUSEL_ITEMS) {
            ITEM.style.width = `${CAROUSEL_VIEW_WIDTH}px`;
        }
    }

    private prev() {

    }


    private getSlider(): HTMLElement {
        return document.getElementById(`slider-${this.key}`) as HTMLElement;
    }

}