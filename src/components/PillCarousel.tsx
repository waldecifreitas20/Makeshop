import React from "react";

export class PillCarousel extends React.Component implements Carousel {
    private x: number;
    private slideX: number;

    public readonly props: CarouselProps;
    public readonly nextItem: CallableFunction;
    public readonly previousItem: CallableFunction;

    public constructor(props: CarouselProps) {
        super(props);
        this.props = props;
        this.x = 0;
        this.slideX = 100;


        this.nextItem = function () {
            const CONTAINER = document.getElementById("container") as HTMLElement;
            const SLIDER = this.getSlider();
            const OVERFLOW = SLIDER.offsetWidth - CONTAINER.offsetWidth;

            if (this.x + this.slideX <= OVERFLOW + this.slideX) {
                this.x += this.slideX;
                SLIDER.style.left = `-${this.x}px`;
            }
        }
        this.previousItem = function () {
            const SLIDER = this.getSlider();
            if (this.x - this.slideX > 0 - this.slideX) {

                this.x -= this.slideX;
                SLIDER.style.left = `-${this.x}px`;

            }
        }

    }

    public componentDidMount(): void {
        this.getSlider().style.left = "0px";
    }

    public render(): React.ReactNode {
        return <>
            <div className="flex px-4 ">
                <button onClick={() => this.previousItem()} className="w-10 bg-white text-center border rounded-full">
                    <i className="fa-solid fa-chevron-left"></i>
                </button>

                <div id="container" className="relative overflow-hidden w-full flex items-center mx-2">
                    <div id="slider" className={`flex relative md:static flex-nowrap p-0 transition-all duration-${this.props.delay}`}>
                        {this.props.items.map((option, i) => {
                            return <>
                                <span key={Math.random() + i}>{option}</span>
                            </>;
                        })}
                    </div>
                </div>

                <button onClick={() => this.nextItem()} className="w-10 bg-white text-center border rounded-full">
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            </div>
        </>
    }

    private getSlider(): HTMLElement {
        return document.getElementById("slider") as HTMLElement;
    }

}