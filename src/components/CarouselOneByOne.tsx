import { PropsWithChildren } from "react";
import { IconButton } from "./IconButton";
import { CarouselProps } from "../interfaces/Carousel";

export function CarouselOneByOne(props: PropsWithChildren<CarouselProps>) {
	let hasEventTriggered = false;
	let index = 0;

	const previousItem = () => { }
	const nextItem = () => { }

	const updateCarouselItemsWidth = () => { }

	const getSlider = () => { }

	const getItemsQtd = () => { }

	const getItems = () => { return []; }

	const runAutoPlay = () => {
		setInterval(() => {
			if (hasEventTriggered) {
				nextItem();
			}
		}, props.slidingDelay);


	}

	return <>
		{/* Carousel */}
		<div id={`carousel-${props.key}`} className={`flex justify-center relative ${props.height ?? "h-[250px]"} `}>

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
				<div id={`carousel-view-${props.key}`} className="flex overflow-hidden size-full">
					<ul id={`slider-${props.key}`}
						className="
												slider relative 
												transition-all duration-700 lg:duration-1000 
												flex h-full
								">
						{getItems().map((item, i) => {
							return <>
								<li className={
									`carousel-item-${props.key} 
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
								`carousel-item-${i}-index-${props.key} 
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