import React, {useState} from "react";
import mojs from "@mojs/core";

import {random, randomColor} from './utils';
import {StyledBalloon} from './Balloon.styles';

export const Balloon = ({msgText, colors, popVolumeLevel, loop, hangOnTop, supportsTouch}) => {
	const delay = random(0, 4);
	const hasMsg = random(0, 2);
	const duration = 10 + random(1, 5);
	const left = random(10, 70); // random init left value to fly
	const [show, setShow] = useState(true);
	const [visible, setVisible] = useState(true);
	let audio = new Audio('https://soundbible.com/mp3/Balloon%20Popping-SoundBible.com-1247261379.mp3');
	audio.volume = popVolumeLevel;

	const popBalloon = (e) => {
		let t = e.currentTarget;
		let color = t.getAttribute('color');
		const burst = new mojs.Burst({
			radius: { 30: 100 },
			parent: t,
			count: 10,
			className: 'show',
			children: {
				fill: [color],
				angle: { 0: 180 },
				delay: 'stagger(0, 25)',
				shape: [ 'circle', 'polygon' ],
			}
		});
		audio.play();
		burst.replay();
		// setVisible(false)
		t.style.visibility = 'hidden';
		setTimeout(() => {
			setShow(false)
		}, 2000);
	};
	return (
		<>
			{
				show ?
				<StyledBalloon
					color={randomColor(colors)}
					onClick={supportsTouch ? popBalloon : null}
					onDoubleClickCapture={supportsTouch ? null : popBalloon}
					animate={{
						delay,
						duration,
						rotate: random(20, 25),
						left,
						loop,
						hangOnTop,
					}}
					show={show}
					visible={visible}
				>
					<div className="string"></div>
					{
						hasMsg ?
						<span className="msg">{msgText}</span>
						: null
					}
				</StyledBalloon>
				: null
			}
		</>
	)
}

export const Balloons = ({count, msgText, colors, popVolumeLevel, loop, hangOnTop}) => {
  const density = count; // concurrent balloon count
	const supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
  return (
		<div className="set-of-balloons">
		{
			new Array(density).fill(null).map((b, i) => 
				<Balloon
					key={`balloon-${i}`}
					{...{msgText, colors, popVolumeLevel, loop, hangOnTop, supportsTouch}}
				/>
			)
		}
  	</div>
	)
}