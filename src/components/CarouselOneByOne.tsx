import { PropsWithChildren, useEffect, useRef } from "react";
import { onResizeScreen } from "../utils/utils";
import { CarouselProps } from "../interfaces/Carousel";


export function CarouselOneByOneOfBanners(props: PropsWithChildren<CarouselProps>) {
	const key = useRef(null);
	const view = useRef(null);
	const slider = useRef(null);

	/* METHODS */
	function calcSliderWidth() {
		const itemsQtd = (props.children as Array<any>).length ?? 0;
		const viewWidth = window.innerWidth;

		return itemsQtd * viewWidth;
	}

	function updateSliderWidth() {
		const width = calcSliderWidth();
		getSlider().style.width = `${width}px`;
	}

	function getSlider() {
		return slider.current ?? new HTMLDivElement();
	}

	function prevItem() {

	}
	function nextItem() {

	}

	/* HOOKS */
	useEffect(() => {
		updateSliderWidth();
	});

	useEffect(() => {
		onResizeScreen(() => {
			updateSliderWidth();
		});
	});

	return <>
		{/* carousel */}
		<div ref={key} className="relative h-[250px]">

			{/* Carousel view */}
			<div ref={view} className=" size-full">

				{/* Carousel Slider */}
				<div ref={slider} className={`flex h-full`}>
					{props.children}
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
	</>
}