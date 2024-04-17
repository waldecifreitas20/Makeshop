import React from "react";

interface CarouselProps {
    items: Array<any>;
}


export class Carousel extends React.Component {
    private readonly key: string;
    private readonly nextItem: VoidFunction;
    private readonly previousItem: VoidFunction;
    private viewWidth: number;
    private index: number;

    public readonly props: CarouselProps;


    public constructor(props: CarouselProps) {
        super(props);
        this.key = (Math.random()).toString();
        this.props = props;
        this.index = 0;
        this.viewWidth = -1;


        this.nextItem = (): void => {
            const ITEMS_QTD = this.props.items.length;

            this.index++;
            if (this.index >= ITEMS_QTD) {
                this.index = 0;
            }

            console.log(this.index);


            const SLIDER = this.getSlider();
            SLIDER.style.left = `-${this.viewWidth * this.index}px`;

        }

        this.previousItem = (): void => {
            const ITEMS_QTD = this.props.items.length;

            if (this.index <= 0) {
                this.index = ITEMS_QTD;
            }
            this.index--;

            const SLIDER = this.getSlider();
            SLIDER.style.left = `-${this.viewWidth * this.index}px`;

        }
    }

    public render(): JSX.Element {
        window.addEventListener("resize", () => {
            this.updateCarouselItemsWidth();
        });

        return <>

            <div id={`carousel-${this.key}`} className="flex justify-between px-5">
                <button className="" onClick={() => this.previousItem()}>Voltar</button>

                <div id={`carousel-view-${this.key}`} className="relative flex overflow-hidden w-[90%]">
                    <ul id={`slider-${this.key}`} className="slider relative transition-all duration-1000 flex h-full">
                        {this.props.items.map((item, i) => {
                            return <>
                                <li className={`carousel-item-${this.key} text-center h-[200px] flex justify-center`}>{item}</li>
                            </>
                        })}
                    </ul>
                </div>

                <button onClick={() => this.nextItem()}>Proxima</button>
            </div>
        </>;

    }


    public componentDidMount(): void {
        this.getSlider().style.left = '0px';
        this.updateCarouselItemsWidth();
        this.runAutoPlay();

    }

    private updateCarouselItemsWidth(): void {
        const CAROUSEL_VIEW_WIDTH = document
            .getElementById(`carousel-view-${this.key}`)?.offsetWidth ?? -1;

        const CAROUSEL_ITEMS = document
            .getElementsByClassName(`carousel-item-${this.key}`) as HTMLCollectionOf<HTMLElement>;

        this.viewWidth = CAROUSEL_VIEW_WIDTH;
        for (const ITEM of CAROUSEL_ITEMS) {
            ITEM.style.width = `${CAROUSEL_VIEW_WIDTH}px`;
        }
    }


    private runAutoPlay() {
        setInterval(() => {
            this.nextItem();
        }, 5000);
    }

    private getSlider(): HTMLElement {
        return document.getElementById(`slider-${this.key}`) as HTMLElement;
    }

}