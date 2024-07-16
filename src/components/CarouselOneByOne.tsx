import { Children, PropsWithChildren, useEffect, useRef, useState } from "react";
import { utils } from "../utils/utils";
import { CarouselProps } from "../interfaces/Carousel";

export function CarouselOneByOne(props: PropsWithChildren<CarouselProps>) {
	const carouselRef = useRef(null);
	const viewRef = useRef(null);
	const sliderRef = useRef(null);

	const [index, setIndex] = useState(props.initialIndex ?? 0);
	const [sliderOffset, setSliderOffset] = useState("0px");

	const itemsQtd = (props.children as Array<any>).length ?? 0;


	/* METHODS */
	function getItemMaxWidth() {
		return (carouselRef.current ?? new HTMLDivElement()).offsetWidth;
	}

	function calcSliderWidth() {
		return getItemMaxWidth() * itemsQtd;
	}

	function updateSliderWidth() {
		const width = calcSliderWidth();
		const slider = getSlider();
		slider.style.width = `${width}px`;
		updateSlideCurrentItem(index);
	}

	function getSlider() {
		return sliderRef.current ?? new HTMLDivElement();
	}

	function prevItem() {
		let newIndex = index - 1 < 0 ? itemsQtd - 1 : index - 1;
		setIndex(newIndex);
		updateSlideCurrentItem(newIndex);
	}
	function nextItem() {
		let newIndex = index + 1 >= itemsQtd ? 0 : index + 1;
		updateSlideCurrentItem(newIndex);
		setIndex(newIndex);
	}

	function updateSlideCurrentItem(index: number) {
		const itemWidth = getItemMaxWidth();
		const offset = itemWidth * index;
		setSliderOffset(`-${offset}px`);
	}

	/* HOOKS */
	useEffect(() => {
		updateSliderWidth();
	});

	useEffect(() => {
		utils.onResizeScreen(() => {
			updateSliderWidth();
		});
	});

	return (
		<div ref={carouselRef} className={`relative ${props.height ?? 'h-[250px]'}`}>

			<div className="size-full">
				{/* Carousel view */}
				<div ref={viewRef} className="size-full  overflow-hidden ">

					{/* Carousel Slider */}
					<div ref={sliderRef} className={`relative flex h-full transition-all duration-500`} style={{ left: sliderOffset }}>
						{Children.map(props.children, child => {
							return <>
								<span className="flex h-full justify-center items-center w-full">{child}</span>
							</>
						})}
					</div>

				</div>

				{/* index indicators */}
				<div className="flex justify-center mt-2">
					{Children.map(props.children, (_, i) => {
						return <span className={`${i == index ? "bg-gray-500" : "bg-gray-300"} rounded-full p-1 mx-1`}></span>
					})}
				</div>
			</div>

			{/* Buttons */}
			<div className="absolute top-0 size-full">

				<div className="size-full px-4 bg-transparent flex items-center justify-between">
					{/* Prev item button */}
					<button
						className={props.buttonsStyle} onClick={() => prevItem()}>
						<i className="fa-solid fa-chevron-left fa-lg"></i>
					</button>

					{/* Prev item button */}
					<button
						className={props.buttonsStyle}
						onClick={() => nextItem()}>
						<i className="fa-solid fa-chevron-right fa-lg"></i>
					</button>
				</div>

			</div>
		</div>
	);
}