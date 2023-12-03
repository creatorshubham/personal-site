"use client"; // Required to set the onClick.

import { useTheme } from 'next-themes'
import { themeRender, themes } from '@components/ThemeHandler'
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import React, { useEffect, useRef, useState } from "react";

export function RadialProgress({
	progress,
	title,
	size=50,
	animationSpeed=100,
	colour='rgb(var(--secondary-accent))',
	animationDelay=0
}:{
	progress:number,
	title:string,
	size?:number,
	animationSpeed?:number,
	colour?:string,
		animationDelay?:number
}) {

	const [delay, setDelay] = useState<number>(animationDelay)
	const componentStyle = { "--size": `${size}px`, "--colour": `${colour}` } as React.CSSProperties;
	const progressBar = useRef<SVGCircleElement>(null)
	const [currentProgress, setCurrentProgress] = useState<number>(0)
	const [mounted, setMounted] = useState(false)

	if (delay > 0) {
		setTimeout(() => {
			setDelay(0)
		}, delay)
	}
	

	if ((currentProgress < progress) && mounted && delay == 0) {
		setTimeout(() => {
			setCurrentProgress(currentProgress + 1);
		}, 1000 / animationSpeed)
	}

	useEffect(() => {
		if (mounted) return
		setMounted(true)
		// animate();
	}, [])

	return (
		<div style={componentStyle} className="w-[--size] group cursor-pointer relative flex items-center flex-col" onMouseEnter={() => { setCurrentProgress(0) }}>
			<div className="relative block h-[--size]">
				<svg className="w-[--size] h-[--size] overflow-visible line" viewBox="0 0 120 120">
					<circle className="origin-center fill-fg-primary opacity-10" r="56" cx="60" cy="60" strokeWidth="8" strokeLinecap="round" />
					<circle className="brightness-75 dark:brightness-150 origin-center fill-none text-[--colour]" r="56" cx="60" cy="60" strokeWidth="8" strokeLinecap="round" ref={progressBar}
						style={{ transform: 'rotate(-88deg)', strokeDasharray: `${currentProgress * 3.6}, 360`, stroke: `currentColor` }} >
					</circle>
				</svg>
			</div>
			<div className="absolute w-full h-[--size] leading-[--size] text-center font-bold text-[--colour] brightness-75 dark:brightness-150">
				{ currentProgress }
			</div>
			<div className='text-center mt-3 text-xs'>
				{ title }
			</div>
		</div>
	)
}

export default RadialProgress;