import { PropsWithChildren, useEffect, useMemo, useState } from "react";
import { IconButton } from "./IconButton";
import { CarouselProps } from "../interfaces/Carousel";

export function CarouselOneByOne(props: PropsWithChildren<CarouselProps>) {
	let hasEventTriggered = false;
	let viewWidth = 768;
	let [index, setIndex] = useState(0);
	const key = Math.random().toString();

	useEffect(() => {
		updateCarouselItemsWidth();
		getSlider().style.left = `-${index * viewWidth}px`;
		if (props.autoSlide) {
			runAutoPlay();
		}
	}, []);
	const previousItem = () => {
		if (index <= 0) {
			index = getItemsQtd();
		}
		index--;

		const SLIDER = getSlider();
		SLIDER.style.left = `-${viewWidth * index}px`;
		setIndex(index);
	}
	const nextItem = () => {
		index++;

		if (index >= getItemsQtd()) {
			index = 0;
		}
		const SLIDER = getSlider();
		SLIDER.style.left = `-${viewWidth * index}px`;
		setIndex(index)
	}

	const updateCarouselItemsWidth = () => {
		const CAROUSEL_VIEW_WIDTH = document.getElementById(`carousel-view-${key}`)?.offsetWidth ?? -1;

		const CAROUSEL_ITEMS = document
			.getElementsByClassName(`carousel-item-${key}`) as HTMLCollectionOf<HTMLElement>;

		viewWidth = CAROUSEL_VIEW_WIDTH;
		let slider = getSlider();

		slider.style.left = `-${viewWidth * index}px`;

		for (const ITEM of CAROUSEL_ITEMS) {
			ITEM.style.width = `${CAROUSEL_VIEW_WIDTH}px`;
		}

	}

	const getSlider = () => {
		return document.getElementById(`slider-${key}`) as HTMLElement;
	}

	const getItemsQtd = () => {
		return getItems().length ?? 0;
	}

	const getItems = () => { return props.items ?? [];}

	const runAutoPlay = () => {
		setInterval(() => {
			if (hasEventTriggered) {
				nextItem();
			}
		}, props.slidingDelay);


	}

	return <>
		{/* Carousel */}
		<div id={`carousel-${key}`} className={`flex justify-center relative ${props.height ?? "h-[250px]"} `}>

			{/* Button to view the previous item */}
			<IconButton
				key={"floating-01"}
				positionClass="left-0"
				style={props.buttonsStyle}
				child={
					<i className="fa-solid fa-chevron-left fa-lg"></i>
				}
				onClick={() => {
					hasEventTriggered = true;
					previousItem();

					setTimeout(() => {
						hasEventTriggered = false;

					}, props.slidingDelay);
				}}
			/>


			<div className="size-full block">
				{/* Carousel view */}
				<div id={`carousel-view-${key}`} className="flex overflow-hidden size-full">
					<ul id={`slider-${key}`}
						className="
				slider relative 
				transition-all duration-700 lg:duration-1000 
				flex h-full
">
						{getItems().map((item, i) => {
							return <>
								<li className={
									`carousel-item-${key} 
								text-center 
								flex justify-center 
								size-full`}>{item}</li>
							</>
						})}
					</ul>
				</div>

				{/* Items index indicator */}
				<ol className="flex justify-center gap-2 mt-2 items-center">
					{getItems().map((_, i) => {
						return <>
							<li className={
								`carousel-item-${i}-index-${key} 
						size-2 
						${index == i ? "bg-gray-500" : "bg-gray-200"}  
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
				style={props.buttonsStyle}
				child={
					<i className="fa-solid fa-chevron-right fa-lg"></i>
				}
				onClick={() => {
					hasEventTriggered = true;
					nextItem();

					setTimeout(() => {
						hasEventTriggered = false;

					}, props.slidingDelay);
				}}
			/>

		</div >
	</>
}