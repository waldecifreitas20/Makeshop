import React from "react";
import { FloatingButton } from "./FloatingButton";

interface CarouselProps {
    items: Array<any>;
    delay: number;
    height: number;
    autoSlide: boolean;
}

export class Carousel extends React.Component {
    private readonly key: string;
    private readonly nextItem: VoidFunction;
    private readonly previousItem: VoidFunction;
    private readonly enableFloatingButtons: boolean;
    private viewWidth: number;
    private index: number;
    private hasEventTriggered: boolean;

    public readonly props: CarouselProps;



    public constructor(props: CarouselProps) {
        super(props);
        this.key = (Math.random()).toString();
        this.props = props;
        this.index = 0;
        this.viewWidth = -1;
        this.hasEventTriggered = false;
        this.enableFloatingButtons = true;

        this.nextItem = (): void => {
            const ITEMS_QTD = this.props.items.length;

            this.index++;
            if (this.index >= ITEMS_QTD) {
                this.index = 0;
            }

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
        const height = this.props.height;

        return <>

            {/* Carousel */}
            <div id={`carousel-${this.key}`} className={`flex justify-center relative h-[${height}px]  `}>

                {/* Button to view the previous item */}
                <FloatingButton
                    key={"floating-01"}
                    positionClass="left-0"
                    child={
                        <i className="fa-solid fa-chevron-left fa-lg"></i>
                    }
                    onClick={
                        () => {
                            this.hasEventTriggered = true;
                            this.previousItem();

                            setTimeout(() => {
                                this.hasEventTriggered = false;

                            }, this.props.delay);
                        }
                    }
                />

                <div id={`carousel-view-${this.key}`} className="flex overflow-hidden w-full h-full">
                    <ul id={`slider-${this.key}`} className="slider relative transition-all duration-1000 flex h-full">
                        {this.props.items.map((item, i) => {
                            return <>
                                <li className={`carousel-item-${this.key} text-center flex justify-center w-full h-full`}>{item}</li>
                            </>
                        })}
                    </ul>
                </div>

                {/* Button to view the next item */}
                <FloatingButton
                    key={"floating-02"}
                    positionClass="right-2"
                    child={
                        <i className="fa-solid fa-chevron-right fa-lg"></i>
                    }
                    onClick={
                        () => {
                            this.hasEventTriggered = true;
                            this.nextItem();

                            setTimeout(() => {
                                this.hasEventTriggered = false;

                            }, this.props.delay);
                        }
                    }
                />

            </div >
        </>;

    }

    public componentDidMount(): void {
        this.getSlider().style.left = '0px';
        this.updateCarouselItemsWidth();
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
        }, this.props.delay);


    }

    private getSlider(): HTMLElement {
        return document.getElementById(`slider-${this.key}`) as HTMLElement;
    }

}