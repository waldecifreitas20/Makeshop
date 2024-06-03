import { Children, PropsWithChildren, useEffect, useMemo, useRef, useState } from "react";

interface ThisProps {

}

export function CarouselOneByOneOfBanners(props: PropsWithChildren<ThisProps>) {
	const key = useRef(null);
	const view = useRef(null);
	const slider = useRef(null);


	return <>
		{/* carousel */}
		<div ref={key} className="relative">

			{/* Carousel view */}
			<div ref={view}>

				{/* Carousel Slider */}
				<div ref={slider}>
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