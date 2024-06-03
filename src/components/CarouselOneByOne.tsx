import { Children, PropsWithChildren, useEffect, useMemo, useRef, useState } from "react";
import { onResizeScreen } from "../utils/utils";

interface ThisProps {

}

export function CarouselOneByOneOfBanners(props: PropsWithChildren<ThisProps>) {
	const key = useRef(null);
	const view = useRef(null);
	const slider = useRef(null);
	const [sliderWidth, setSliderWidth] = useState(calcSliderWidth());


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
				<div className="size-full bg-transparent flex items-center justify-between">
					<button>prev</button>
					<button>next</button>
				</div>
			</div>
		</div>
	</>
}