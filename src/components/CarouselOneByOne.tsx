import { Children, PropsWithChildren, useEffect, useRef, useState } from "react";
import { onResizeScreen } from "../utils/utils";
import { CarouselProps } from "../interfaces/Carousel";


export function CarouselOneByOneOfBanners(props: PropsWithChildren<CarouselProps>) {
	const key = useRef(null);
	const view = useRef(null);
	const slider = useRef(null);
	const [index, setIndex] = useState(props.initialIndex ?? 0);
	const itemsQtd = (props.children as Array<any>).length ?? 0;

	/* METHODS */
	const calcSliderWidth = () => window.innerWidth * itemsQtd;

	function updateSliderWidth() {
		const width = calcSliderWidth();
		getSlider().style.width = `${width}px`;
	}

	function getSlider() {
		return slider.current ?? new HTMLDivElement();
	}

	function prevItem() {
		const itemWidth = window.innerWidth;
		let newIndex = index - 1 < 0 ? itemsQtd - 1 : index - 1;
		setIndex(newIndex);
	}
	function nextItem() {
		const itemWidth = window.innerWidth;
		let newIndex = index + 1 >= itemsQtd ? 0 : index + 1;
		setIndex(newIndex);
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
		<div ref={key} className={` relative ${props.height ?? 'h-[250px]'}`}>

			<div className="size-full bg-blue-500">
				{/* Carousel view */}
				<div ref={view} className="size-full  overflow-hidden">

					{/* Carousel Slider */}
					<div ref={slider} className={`flex h-full`}>
						{props.children}
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
	</>
}