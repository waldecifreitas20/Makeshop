import React from "react";
import { IconButton } from "./IconButton";


export class CarouselOneByOne extends React.Component implements Carousel {
    private readonly key: string;
    private viewWidth: number;
    private index: number;
    private hasEventTriggered: boolean;

    public readonly props: CarouselProps;
    public readonly nextItem: CallableFunction;
    public readonly previousItem: CallableFunction;

    public constructor(props: CarouselProps) {
        super(props);
        this.key = (Math.random()).toString();
        this.props = props;
        this.index = props.initialIndex ?? 0;
        
        this.state = {
            index: this.index,
        }

        this.viewWidth = -1;
        this.hasEventTriggered = false;

        this.nextItem = (): void => {
            const ITEMS_QTD = this.props.items.length;

            this.index++;
            if (this.index >= ITEMS_QTD) {
                this.index = 0;
            }
            const SLIDER = this.getSlider();
            SLIDER.style.left = `-${this.viewWidth * this.index}px`;
            this.setState({ index: this.index })
        }

        this.previousItem = (): void => {
            const ITEMS_QTD = this.props.items.length;

            if (this.index <= 0) {
                this.index = ITEMS_QTD;
            }
            this.index--;

            const SLIDER = this.getSlider();
            SLIDER.style.left = `-${this.viewWidth * this.index}px`;
            this.setState({ index: this.index })
        }
    }

    public render(): JSX.Element {
        window.addEventListener("resize", () => {
            this.updateCarouselItemsWidth();
        });
        const height = this.props.height;

        return <>

            {/* Carousel */}
            <div id={`carousel-${this.key}`} className={`flex justify-cente relative ${height} `}>

                {/* Button to view the previous item */}
                <IconButton
                    key={"floating-01"}
                    positionClass="left-0"
                    style={this.props.buttonsStyle}
                    child={
                        <i className="fa-solid fa-chevron-left fa-lg"></i>
                    }
                    onClick={() => {
                        this.hasEventTriggered = true;
                        this.previousItem();

                        setTimeout(() => {
                            this.hasEventTriggered = false;

                        }, this.props.slidingDelay);
                    }}
                />


                <div className="size-full block">
                    {/* Carousel view */}
                    <div id={`carousel-view-${this.key}`} className="flex overflow-hidden size-full">
                        <ul id={`slider-${this.key}`} className="slider relative transition-all duration-700 flex h-full">
                            {this.props.items.map((item, i) => {
                                return <>
                                    <li className={
                                        `carousel-item-${this.key} 
                                        text-center 
                                        flex justify-center 
                                        size-full`}>{item}</li>
                                </>
                            })}
                        </ul>
                    </div>
                  
                    {/* Items index indicator */}
                    <ol className="flex justify-center gap-2 mt-2 items-center">
                        {this.props.items.map((_, i) => {
                            return <>
                                <li className={
                                    `carousel-item-${i}-index-${this.key} 
                                    size-2 
                                    ${this.index == i ? "bg-gray-500" : "bg-gray-200"}  
                                    rounded-full    
                                    transition-all
                                    duration-700
                                    `
                                }></li>
                            </>
                        })}
                    </ol>
                </div>

                {/* Button to view the next item */}
                <IconButton
                    key={"floating-02"}
                    positionClass="right-2"
                    style={this.props.buttonsStyle}
                    child={
                        <i className="fa-solid fa-chevron-right fa-lg"></i>
                    }
                    onClick={() => {
                        this.hasEventTriggered = true;
                        this.nextItem();

                        setTimeout(() => {
                            this.hasEventTriggered = false;

                        }, this.props.slidingDelay);
                    }}
                />

            </div >
        </>;

    }

    public componentDidMount(): void {
        this.updateCarouselItemsWidth();
        this.getSlider().style.left = `-${this.index * this.viewWidth}px`;
        if (this.props.autoSlide) {
            this.runAutoPlay();
        }
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
            if (!this.hasEventTriggered) {
                this.nextItem();
            }
        }, this.props.slidingDelay);


    }

    private getSlider(): HTMLElement {
        return document.getElementById(`slider-${this.key}`) as HTMLElement;
    }

}