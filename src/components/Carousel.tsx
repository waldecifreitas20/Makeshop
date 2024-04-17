import React, { MouseEventHandler } from "react";

interface CarouselProps {
    items: Array<any>;
}


export class Carousel extends React.Component {
    private readonly key: string;
    private readonly nextItem: MouseEventHandler<Element>;
    private readonly previousItem: MouseEventHandler<Element>;
    private viewWidth: number;
    private index: number;

    public readonly props: CarouselProps;


    public constructor(props: CarouselProps) {
        super(props);
        this.key = (Math.random()).toString();
        this.props = props;
        this.index = 0;
        this.viewWidth = -1;


        this.nextItem = () => {
            const ITEMS_QTD = this.props.items.length;

            this.index++;
            if (this.index >= ITEMS_QTD) {
                this.index = 0;
            }

            const SLIDER = this.getSlider();
            SLIDER.style.left = `-${this.viewWidth * this.index}px`;

        }

        this.previousItem = () => {
            const ITEMS_QTD = this.props.items.length;

            if (this.index <= 0) {
                this.index = ITEMS_QTD;
            }
            this.index--;

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
                <button className="" onClick={this.previousItem}>Voltar</button>

                <div id={`carousel-view-${this.key}`} className="relative flex overflow-hidden w-[90%]">
                    <ul id={`slider-${this.key}`} className="slider relative transition-all duration-1000 flex h-full">
                        {this.props.items.map((item, i) => {
                            return <>
                                <li className={`carousel-item-${this.key} bg-blue-500 text-center`}>{item}</li>
                            </>
                        })}
                    </ul>
                </div>

                <button onClick={this.nextItem}>Proxima</button>
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


    private getSlider(): HTMLElement {
        return document.getElementById(`slider-${this.key}`) as HTMLElement;
    }

}