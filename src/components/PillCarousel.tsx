import { Component } from "react";
import { onResizeScreen } from "../utils/utils";

export class PillCarousel extends Component implements Carousel {
    private key: string;
    private showButtons: boolean;
    private maxOffset: number;
    private offsetRate: number;

    public readonly props: CarouselProps;
    public readonly nextItem: CallableFunction;
    public readonly previousItem: CallableFunction;

    public constructor(props: CarouselProps) {
        super(props);
        this.props = props;

        this.key = Math.random().toString();
        this.maxOffset = 0;
        this.offsetRate = 100;

        this.showButtons = true
        this.state = {
            showButtons: this.showButtons,

        }

        onResizeScreen(() => {
            this.showButtons = this.getCarouselView().offsetWidth <= this.getSlider().offsetWidth;
            this.updateMaxOffset();
            this.setState({
                showButtons: this.showButtons,
            });
        })

        this.nextItem = function () {
            const SLIDER = this.getSlider();

            if (SLIDER.offsetLeft > this.maxOffset) {
                let newOffset = SLIDER.offsetLeft - this.offsetRate;

                if (newOffset > this.maxOffset) {
                    newOffset = this.maxOffset;
                }

                SLIDER.style.left = `${newOffset}px`;
            }

        }

        this.previousItem = function () {
            const SLIDER = this.getSlider();

            if (SLIDER.offsetLeft < 0) {
                let newOffset = SLIDER.offsetLeft + this.offsetRate;
                
                if (newOffset < 0) {
                    newOffset = 0;
                }

                SLIDER.style.left = `${newOffset}px`;
            }
        }

    }

    public render(): React.ReactNode {

        let showButtons = this.showButtons;

        return <>
            <div className={`flex px-4`}>
                {showButtons ?

                    <button onClick={() => this.previousItem()} className="w-10 text-center ">
                        <i className="fa-solid fa-chevron-left"></i>
                    </button> : <></>
                }

                <div id={`pill-carousel-view-${this.key}`} className="relative overflow-hidden w-full flex items-center mx-auto">
                    <div id={`pill-carousel-slider-${this.key}`} className={`flex relative flex-nowrap p-0 transition-all duration-700 mx-auto h-full`}>
                        {this.props.items.map((option, i) => {
                            return <>
                                <span key={Math.random() + i}>{option}</span>
                            </>;
                        })}
                    </div>
                </div>

                {
                    showButtons ?
                        <button onClick={() => this.nextItem()} className="w-10 text-center ">
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                        : <></>
                }
            </div>
        </>
    }

    public componentDidMount(): void {
        this.getSlider().style.left = "0px";
        this.updateMaxOffset();
        this.showButtons = this.getCarouselView().offsetWidth <= this.getSlider().offsetWidth;

        this.setState({
            showButtons: this.showButtons,
        });

    }

    private getSlider(): HTMLElement {
        return document.getElementById(`pill-carousel-slider-${this.key}`) as HTMLElement;
    }

    private getCarouselView(): HTMLElement {
        return document.getElementById(`pill-carousel-view-${this.key}`) as HTMLElement;
    }

    private updateMaxOffset() {
        const SLIDER = this.getSlider();
        this.maxOffset = -1 * (SLIDER.offsetWidth - this.getCarouselView().offsetWidth);
    }
}