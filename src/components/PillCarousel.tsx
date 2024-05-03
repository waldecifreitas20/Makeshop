import { Component } from "react";
import { onResizeScreen } from "../utils/utils";

export class PillCarousel extends Component implements Carousel {
    private key: string;
    private x: number;
    private slideX: number;
    private showButtons: boolean;

    public readonly props: CarouselProps;
    public readonly nextItem: CallableFunction;
    public readonly previousItem: CallableFunction;

    public constructor(props: CarouselProps) {
        super(props);
        this.props = props;
        this.x = 0;
        this.slideX = 100;
        this.key = Math.random().toString();
        this.showButtons = true
        this.state = {
            showButtons: this.showButtons,
        }

        onResizeScreen(() => {
            this.showButtons = this.getCarouselView().offsetWidth <= this.getSlider().offsetWidth;

            this.setState({
                showButtons: this.showButtons,
            });
        })

        this.nextItem = function () {
            const CAROUSEL_VIEW = this.getCarouselView() as HTMLElement;
            const SLIDER = this.getSlider();
            const OVERFLOW = SLIDER.offsetWidth - CAROUSEL_VIEW.offsetWidth;

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
        this.showButtons = this.getCarouselView().offsetWidth <= this.getSlider().offsetWidth;

        this.setState({
            showButtons: this.showButtons,
        });

    }

    public render(): React.ReactNode {
        console.log(this.state);

        let showButtons = this.showButtons;

        return <>
            <div className="flex Jpx-4 ">
                {showButtons ?

                    <button onClick={() => this.previousItem()} className="w-10 bg-white text-center border rounded-full">
                        <i className="fa-solid fa-chevron-left"></i>
                    </button> : <></>
                }

                <div id={`pill-carousel-view-${this.key}`} className="relative overflow-hidden w-full flex items-center mx-auto">
                    <div id={`pill-carousel-slider-${this.key}`} className={`flex relative md:static flex-nowrap p-0 transition-all duration-700 mx-auto`}>
                        {this.props.items.map((option, i) => {
                            return <>
                                <span key={Math.random() + i}>{option}</span>
                            </>;
                        })}
                    </div>
                </div>

                {
                    showButtons ?
                        <button onClick={() => this.nextItem()} className="w-10 bg-white text-center border rounded-full">
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                        : <></>
                }
            </div>
        </>
    }

    private getSlider(): HTMLElement {
        return document.getElementById(`pill-carousel-slider-${this.key}`) as HTMLElement;
    }

    private getCarouselView(): HTMLElement {
        return document.getElementById(`pill-carousel-view-${this.key}`) as HTMLElement;
    }

}